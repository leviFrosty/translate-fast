import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GetNowButton from "../get-now-button";
import { faGift, faStar } from "@fortawesome/free-solid-svg-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex justify-center py-32 max-lg:pt-24 md:py-16">
      <div className="flex w-full max-w-screen-lg gap-6 max-lg:flex-col">
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
            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faGift}
                className="h-4 w-4 text-green-500"
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
              <div className="fit flex h-4 gap-[2px] text-amber-500">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="pt-2 text-sm">121 Businesses trust TranslateFast</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://picsum.photos/800/500"
            alt=""
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
