import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h2 id="faq" className="font-bold text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <div className="flex w-96 max-w-96">
        <Accordion type="single" defaultValue="item-1">
          <AccordionItem value="item-1" className="flex flex-col">
            <AccordionTrigger>
              1. Do you store any translations?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum perferendis delectus quibusdam temporibus, voluptate
              eveniet architecto cumque aliquid dignissimos voluptatibus quasi
              beatae!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>2. Can I add multiple Apps?</AccordionTrigger>
            <AccordionContent>
              Yes! You can add as many apps as you want from your App Store
              Connect profile.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. Do you support my translation provider?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum perferendis delectus quibusdam temporibus, voluptate
              eveniet architecto cumque aliquid dignissimos voluptatibus quasi
              beatae!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. Will more languages be added in the future?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our locales will always match whatever is available to be
              targeted in the App Store Connect.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
