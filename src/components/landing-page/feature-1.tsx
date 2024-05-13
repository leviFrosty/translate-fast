import Image from "next/image";
import GetNowButton from "../get-now-button";

export default function FeatureOne() {
  return (
    <section className="flex justify-center ">
      <div className="flex gap-4 max-w-screen-lg max-md:flex-col">
        <div className="flex w-full rounded-lg overflow-hidden">
          <Image
            src={"https://picsum.photos/800/500"}
            alt=""
            height={500}
            width={800}
            className="object-contain shadow-lg"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-4xl font-bold pb-4">Bring Your Own Provider</h2>
          <p>Bring your own API key and never pay a monthly fee again!</p>
          <GetNowButton />
        </div>
      </div>
    </section>
  );
}
