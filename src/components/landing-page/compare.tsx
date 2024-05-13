import CompareCard from "../compare-card";
import UserReview from "../user-review";

export default function Compare() {
  return (
    <section className="flex flex-col items-center gap-10">
      <div>
        <h2 className="text-4xl font-bold text-center">
          Tired of Manually Translating Release Notes?
        </h2>
        <div className="flex max-lg:flex-col gap-4 py-8 max-w-screen-lg mx-auto">
          <CompareCard
            title="Translations without TranslateFast"
            variant="negative"
            className="flex flex-grow"
          >
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
          </CompareCard>
          <CompareCard
            title="Translations with TranslateFast"
            variant="positive"
            className="flex flex-grow"
          >
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
          </CompareCard>
        </div>
      </div>
      <UserReview
        message="I loved your product! It saved me so much time and effort. It's the best thing in the world blah blah blah."
        image="https://picsum.photos/100"
        name="Jonathan Doe"
        title="8,100 Followers on Twitter"
      />
    </section>
  );
}
