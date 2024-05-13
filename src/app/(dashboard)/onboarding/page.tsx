import OnboardingSteps from "@/components/onboarding/onboarding";
import Title from "@/components/ui/title";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Onboarding() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex w-full max-w-screen-sm flex-col gap-4 py-16">
      <Title>Onboarding</Title>
      <OnboardingSteps />
    </div>
  );
}
