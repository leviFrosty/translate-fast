"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "./server";
import { headers } from "next/headers";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function validateLoginData(unsafeData: unknown) {
  const { data, error } = loginSchema.safeParse(unsafeData);

  if (error) {
    return redirect(`/login?message=${error.issues[0].message}`);
  }

  return data;
}

export async function signIn(formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { email, password } = validateLoginData(rawData);

  const supabase = createClient();

  const { error: loginError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/dashboard");
}

export async function signUp(formData: FormData) {
  const origin = headers().get("origin");
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { email, password } = validateLoginData(rawData);

  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/login?message=Check email to continue sign in process");
}
