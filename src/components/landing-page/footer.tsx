import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-neutral-950 py-20">
      <div className="p-18 flex max-w-xl gap-8 px-2 max-md:flex-col">
        <div className="flex flex-col gap-2">
          <Link className="flex items-center gap-2" href="/">
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
          <ColumnOne />
          <ColumnTwo />
        </div>
      </div>
    </footer>
  );
}

function ColumnOne() {
  return (
    <div>
      <h5 className="px-4 font-semibold uppercase text-neutral-400">Links</h5>
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
  );
}

function ColumnTwo() {
  return (
    <div>
      <h5 className="px-4 font-semibold uppercase text-neutral-400">Legal</h5>
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
  );
}
