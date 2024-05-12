import GetNowButton from "@/components/get-now-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGift, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CompareCard from "@/components/compare-card";
import UserReview from "@/components/user-review";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Home() {
  return (
    <>
      <section className="py-32 flex max-lg:pt-24 justify-center">
        <div className="max-w-screen-lg w-full flex max-lg:flex-col gap-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-black">
                Focus on your app, not the translations.
              </h1>
              <p>
                Instantly generates and uploads all your translations to the App
                Store, so you don&apos;t have to.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <GetNowButton />
              <div className="flex gap-1 items-center">
                <FontAwesomeIcon
                  icon={faGift}
                  className="text-green-500 w-4 h-4"
                />
                <p>
                  <span className="text-green-500">$20 off</span> first 100
                  customers (99 left)
                  {/* TODO: Implement variable remaining discounts */}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex -space-x-5">
                <Avatar>
                  <AvatarImage src="https://picsum.photos/100" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://picsum.photos/100" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://picsum.photos/100" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://picsum.photos/100" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://picsum.photos/100" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="flex gap-[2px] text-amber-500 h-4 fit">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="text-sm pt-2">
                  121 Businesses trust TranslateFast
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://picsum.photos/800/500"
              alt=""
              width={800}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="py-24 flex flex-col items-center gap-10">
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
      <section className="flex justify-center py-24">
        <div className="flex gap-4 max-w-screen-lg max-md:flex-col">
          <div>
            <h2 className="text-4xl font-bold pb-4">How it Works</h2>
            <div className="flex max-w-screen-lg max-md:flex-col">
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
              <div className="flex w-full">
                <Image
                  src="https://picsum.photos/400/300"
                  alt=""
                  height={300}
                  width={400}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-24">
        <div className="flex gap-4 max-w-screen-lg max-md:flex-col px-8">
          <div className="flex w-full rounded-lg overflow-hidden">
            <Image
              src={"https://picsum.photos/800/500"}
              alt=""
              height={500}
              width={800}
              className="object-contain"
            />
          </div>
          <div className="flex w-full flex-col gap-4">
            <h2 className="text-4xl font-bold pb-4">Bring Your Own Provider</h2>
            <p>Bring your own API key and never pay a monthly fee again!</p>
            <GetNowButton />
          </div>
        </div>
      </section>
      <section className="flex justify-center py-24">
        <div className="flex gap-4 max-w-screen-lg max-md:flex-col px-8">
          <div className="flex w-full rounded-lg overflow-hidden">
            <Image
              src={"https://picsum.photos/800/500"}
              alt=""
              height={500}
              width={800}
              className="object-contain"
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
      <section className="flex justify-center py-24">
        <div className="flex gap-4 w-full max-w-screen-lg flex-col px-8">
          <h2 id="pricing" className="font-bold text-4xl">
            Get translated in{" "}
            <span className="relative">
              <span className="text-white after:content-[''] after:absolute after:h-full after:w-full after:bg-indigo-500 after:top-0 after:left-0 after:-z-[1] after:-rotate-1 ">
                one minute
              </span>
            </span>
          </h2>
          <div className="relative flex flex-col max-lg:gap-28">
            <div className="flex flex-col gap-4 w-full bg-neutral-700 rounded-2xl p-10">
              <h3 className="text-xl font-bold">
                Translate with TranslateFast
              </h3>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, alias!
                </p>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, alias!
                </p>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, alias!
                </p>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, alias!
                </p>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, alias!
                </p>
              </div>
            </div>
            <div className="max-lg:relative absolute right-0 -top-[10%] max-lg:h-fit h-[120%] bg-neutral-100 text-black rounded-2xl  border-indigo-500 border-2">
              <div className="relative flex flex-col items-center justify-between h-full p-10 gap-8">
                <h4 className="font-semibold">Lifetime Deal</h4>
                <div className="flex items-end gap-1">
                  <p className="line-through text-neutral-400">$70</p>
                  <p className="text-5xl font-bold">$59</p>
                  <p className=" text-neutral-400">USD</p>
                </div>
                <p>One time payment. No subscription.</p>
                <GetNowButton className="text-white" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 py-1 px-4 uppercase font-semibold text-xs rounded-full text-white bg-indigo-500">
                  Lifetime access
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-10">
        <UserReview
          message="I loved your product! It saved me so much time and effort. It's the best thing in the world blah blah blah."
          image="https://picsum.photos/100"
          name="Jonathan Doe"
          title="8,100 Followers on Twitter"
        />
      </section>
      <section className="flex flex-col items-center py-16 gap-10">
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
    </>
  );
}
