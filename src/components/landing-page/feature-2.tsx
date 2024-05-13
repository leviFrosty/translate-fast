import Image from "next/image";
import GetNowButton from "../get-now-button";

export default function FeatureTwo() {
  return (
    <section className="flex justify-center">
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
          <h2 className="text-4xl font-bold pb-4">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            consequatur.
          </p>
          <GetNowButton />
        </div>
      </div>
    </section>
  );
}
