import Image from "next/image";
import GetNowButton from "../get-now-button";

export default function FeatureTwo() {
  return (
    <section className="flex justify-center">
      <div className="flex max-w-screen-lg gap-4 max-md:flex-col">
        <div className="flex w-full overflow-hidden rounded-lg">
          <Image
            src={"https://picsum.photos/800/500"}
            alt=""
            height={500}
            width={800}
            className="object-contain shadow-lg"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="pb-4 text-4xl font-bold">Lorem Ipsum</h2>
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
