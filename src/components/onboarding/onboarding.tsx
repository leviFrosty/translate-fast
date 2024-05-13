"use client";

import { useState } from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import Title from "../ui/title";
import AppStoreConnectForm from "./app-store-connect-form";
import ProviderForm from "./provider-form";

export default function OnboardingSteps() {
  const steps = ["Provider", "App Store Connect"] as const;
  const [currentStep, setCurrentStep] = useState<(typeof steps)[number]>(
    steps[0],
  );

  const goNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex === steps.length - 1) {
      return;
    }
    setCurrentStep(steps[currentIndex + 1]);
  };

  const goBack = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex === 0) {
      return;
    }
    setCurrentStep(steps[currentIndex - 1]);
  };

  const progress = (steps.indexOf(currentStep) / (steps.length - 1)) * 100;
  const beginning = steps.indexOf(currentStep) === 0;
  return (
    <>
      <Progress value={progress} />
      {!beginning && (
        <div>
          <Button variant="ghost" onClick={goBack}>
            Back
          </Button>
        </div>
      )}
      <Card>
        <CardHeader>
          <Title as="h2" className=" !mt-0 text-lg font-semibold">
            {currentStep}
          </Title>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ab
            necessitatibus modi.
          </p>
        </CardHeader>
        <CardContent>
          {currentStep === "Provider" && <ProviderForm goNext={goNext} />}
          {currentStep === "App Store Connect" && (
            <AppStoreConnectForm goNext={goNext} />
          )}
        </CardContent>
      </Card>
    </>
  );
}
