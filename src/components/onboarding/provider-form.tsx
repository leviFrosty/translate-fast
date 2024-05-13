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
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Title from "../ui/title";

const Providers = [
  {
    name: "Google Translate",
    value: "googleTranslate",
    icon: faGoogle,
    description:
      "Google Translate is a multilingual neural machine translation service developed by Google, to translate text, documents and websites from one language into another.",
    learnMoreLink: "https://google.com",
  },
  {
    name: "DeepL Translate",
    value: "deepL",
    icon: faShareNodes,
    description:
      "DeepL Translate is a machine translation service that produces translations of unprecedented quality. DeepL's neural networks are able to capture even the slightest nuances and reproduce them in translation unlike any other service.",
    learnMoreLink: "https://deepl.com",
  },
  {
    name: "ChatGPT",
    value: "chatGpt",
    image: "/chatGPT_logo.png",
    description:
      "ChatGPT is a large language model trained to generate human-like responses to given prompts. It is based on the GPT-3 architecture and is fine-tuned for conversational applications.",
    learnMoreLink: "https://openai.com",
  },
] as const;

const providerSchema = z.object({
  apiKey: z.string(),
  provider: z.enum(["googleTranslate", "deepL", "chatGpt"]),
});

export default function ProviderForm() {
  const form = useForm<z.infer<typeof providerSchema>>({
    resolver: zodResolver(providerSchema),
    defaultValues: {
      apiKey: "",
      provider: "googleTranslate",
    },
  });

  function onSubmit(values: z.infer<typeof providerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // Make request to API to validate API key is functional.
    // If errors, show error message on form.

    // If success, update users' api key in the database.
    // Go to next step
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <Title as="h2" className="text-xl font-semibold">
          Translation Provider
        </Title>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-1 justify-center  gap-4 text-foreground animate-in "
          >
            <FormField
              control={form.control}
              name="provider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Provider</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem
                        value="googleTranslate"
                        className="flex items-center gap-2"
                      >
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                        Google Translate
                      </SelectItem>
                      <SelectItem value="deepL">
                        <FontAwesomeIcon
                          icon={faShareNodes}
                          className="mr-2 scale-x-[-1] transform"
                        />
                        DeepL Translate
                      </SelectItem>

                      <SelectItem value="chatGpt">
                        <Image
                          src="/chatGPT_logo.png"
                          alt=""
                          height={15}
                          width={15}
                          className="mr-2 inline"
                        />
                        ChatGPT
                      </SelectItem>
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
            <div className="flex flex-col gap-2">
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
      </CardContent>
    </Card>
  );
}
