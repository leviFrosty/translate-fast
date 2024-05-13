import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GetNowButton from "../get-now-button";

export default function Pricing() {
  return (
    <section className="flex w-full justify-center">
      <div className="flex w-full max-w-screen-lg flex-col gap-4">
        <h2 id="pricing" className="text-4xl font-bold">
          Get translated in{" "}
          <span className="relative">
            <span className="text-white after:absolute after:left-0 after:top-0 after:-z-[1] after:h-full after:w-full after:-rotate-1 after:bg-indigo-500 after:content-[''] ">
              one minute
            </span>
          </span>
        </h2>
        <div className="relative flex flex-col max-lg:gap-28">
          <div className="flex w-full flex-col gap-4 rounded-2xl bg-neutral-700 p-10">
            <h3 className="text-xl font-bold">Translate with TranslateFast</h3>
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
          <div className="absolute -top-[10%] right-0 h-[120%] rounded-2xl border-2 border-indigo-500 bg-neutral-100 text-black  max-lg:relative max-lg:h-fit">
            <div className="relative flex h-full flex-col items-center justify-between gap-8 p-10">
              <h4 className="font-semibold">Lifetime Deal</h4>
              <div className="flex items-end gap-1">
                <p className="text-neutral-400 line-through">$70</p>
                <p className="text-5xl font-bold">$59</p>
                <p className=" text-neutral-400">USD</p>
              </div>
              <p>One time payment. No subscription.</p>
              <GetNowButton className="w-full text-white" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold uppercase text-white">
                Lifetime access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
