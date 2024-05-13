"use client";
import { SubmitButton } from "./submit-button";
import { signIn, signUp } from "@/lib/supabase/signIn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/supabase/loginSchema";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "@/components/ui/title";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex w-full flex-col gap-12 py-8 sm:max-w-md lg:py-32">
      <Title>Sign In or Sign Up</Title>
      <Form {...form}>
        <form className="flex w-full flex-1 flex-col justify-center gap-4 text-foreground animate-in">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@acme.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="*********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton formAction={signIn} pendingText="Signing In...">
            Sign In
          </SubmitButton>
          <SubmitButton
            formAction={signUp}
            variant="outline"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
          {searchParams?.message && (
            <Alert>
              <FontAwesomeIcon icon={faEnvelope} />
              <AlertTitle>Notice</AlertTitle>
              <AlertDescription>{searchParams.message}</AlertDescription>
            </Alert>
          )}
        </form>
      </Form>
    </div>
  );
}
