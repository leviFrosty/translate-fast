import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function HowItWorks() {
  return (
    <section className="flex justify-center">
      <div className="flex max-w-screen-lg gap-4 max-md:flex-col">
        <div>
          <h2 className="pb-4 text-4xl font-bold">How it Works</h2>
          <div className="flex max-w-screen-lg gap-4 max-md:flex-col">
            <div className="flex w-full">
              <Accordion type="single" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    1. Connect your App Store Connect API Key
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum perferendis delectus quibusdam temporibus,
                    voluptate eveniet architecto cumque aliquid dignissimos
                    voluptatibus quasi beatae!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    2. Choose your translation provider
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum perferendis delectus quibusdam temporibus,
                    voluptate eveniet architecto cumque aliquid dignissimos
                    voluptatibus quasi beatae!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    3. Upload your source translations
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum perferendis delectus quibusdam temporibus,
                    voluptate eveniet architecto cumque aliquid dignissimos
                    voluptatibus quasi beatae!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>4. Publish!</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum perferendis delectus quibusdam temporibus,
                    voluptate eveniet architecto cumque aliquid dignissimos
                    voluptatibus quasi beatae!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex w-full justify-center">
              <Image
                src="https://picsum.photos/400/300"
                alt=""
                height={300}
                width={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
