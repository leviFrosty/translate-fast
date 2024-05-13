import ProviderForm from "@/components/onboarding/provider-form";
import Title from "@/components/ui/title";

export default function Onboarding() {
  return (
    <div className="flex flex-col gap-8 py-16">
      <Title>Get Started</Title>
      <ProviderForm />
    </div>
  );
}
