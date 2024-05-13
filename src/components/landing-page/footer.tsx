import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="flex justify-center py-20 bg-neutral-950">
      <div className="flex gap-8 max-w-xl p-18 max-md:flex-col px-2">
        <div className="flex flex-col gap-2">
          <Link className="flex gap-2 items-center" href="/">
            <Image src="/icon.png" alt="" width={24} height={24} />
            <p className="font-black">TranslateFast</p>
          </Link>
          <p className="text-xs">
            TranslateFast makes translating release notes, app details, and more
            as easy as possible so you can focus on your business, not the
            translations.
          </p>
          <p className="text-xs">Copyright © 2024 - All rights reserved</p>
        </div>
        <div className="flex gap-14 max-md:gap-8">
          <div>
            <h5 className="font-semibold uppercase text-neutral-400 px-4">
              Links
            </h5>
            <ul>
              <li>
                <Button variant="link">
                  <Link href="mailto:support@leviwilkerson.com">Support</Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="#pricing">Pricing</Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="/login">Login</Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="#pricing" className="text-nowrap">
                    Buy Now
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold uppercase text-neutral-400 px-4">
              Legal
            </h5>
            <ul className="flex flex-col justify-start">
              <li>
                <Button variant="link">
                  <Link href="mailto:support@leviwilkerson.com">Support</Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="#pricing">Pricing</Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="/login">Login</Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="#pricing" className="text-nowrap">
                    Buy Now
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
