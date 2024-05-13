"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Providers = [
  {
    name: "Google Translate",
    value: "googleTranslate",
    icon: faGoogle,
    description:
      "Google Translate is a multilingual neural machine translation service developed by Google, to translate text.",
    learnMoreLink: "https://cloud.google.com/translate/docs/setup",
  },
  {
    name: "DeepL Translate",
    value: "deepL",
    icon: faShareNodes,
    description:
      "DeepL Translate is a machine translation service that produces translations. DeepL's neural networks typically a very good cost effective alternative to others.",
    learnMoreLink:
      "https://support.deepl.com/hc/en-us/articles/360020695820-API-Key-for-DeepL-s-API",
  },
  {
    name: "ChatGPT",
    value: "chatGpt",
    image: "/chatGPT_logo.png",
    description:
      "ChatGPT is a large language model trained to generate human-like responses to given prompts. For translations, ChatGPT may give more contextually accurate translations than traditional machine translation services - although at higher cost.",
    learnMoreLink:
      "https://platform.openai.com/docs/api-reference/authentication",
  },
] as const;

const providerSchema = z.object({
  apiKey: z.string(),
  provider: z.enum([
    Providers[0].value,
    Providers[1].value,
    Providers[2].value,
  ]),
});

export default function ProviderForm(props: { goNext: () => void }) {
  const form = useForm<z.infer<typeof providerSchema>>({
    resolver: zodResolver(providerSchema),
    defaultValues: {
      apiKey: "",
      provider: Providers[0].value,
    },
  });

  function onSubmit(values: z.infer<typeof providerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // TODO:
    // Make request to API to validate API key is functional.
    // If errors, show error message on form.

    // If success, update users' api key in the database.
    // Go to next step
    console.log(values);

    props.goNext();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-1 flex-col justify-center gap-4 text-foreground animate-in md:flex-row"
      >
        <FormField
          control={form.control}
          name="provider"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Provider</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Providers.map((provider) => {
                    return (
                      <SelectItem
                        key={provider.value}
                        value={provider.value}
                        className="flex items-center gap-2"
                      >
                        {"image" in provider ? (
                          <Image
                            src={provider.image}
                            alt=""
                            height={15}
                            width={15}
                            className="mr-2 inline"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={provider.icon}
                            className="mr-2"
                          />
                        )}
                        {provider.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
                <FormDescription>
                  <Link
                    href="https://google.com"
                    target="_blank"
                    className="underline"
                  >
                    Learn more
                  </Link>{" "}
                  about how to get your api key.
                </FormDescription>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col gap-2">
          <FormField
            control={form.control}
            name="apiKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Api Key</FormLabel>
                <FormControl>
                  <Input
                    placeholder="**********************"
                    type="password"
                    autoCorrect="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
