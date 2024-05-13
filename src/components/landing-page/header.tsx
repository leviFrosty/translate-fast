import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex justify-center">
      <div className="max-w-screen-lg p-8 max-lg:p-4 flex justify-between w-full">
        <Link className="flex gap-2 items-center" href="/">
          <Image src="/icon.png" alt="" width={24} height={24} />
          <p className="font-black">TranslateFast</p>
        </Link>
        <div className="flex gap-6 font-semibold">
          <Button variant="link">
            <Link href="#pricing">Pricing</Link>
          </Button>
          <Button variant="link">
            <Link href="#demo">Demo</Link>
          </Button>
          <Button variant="link">
            <Link href="#faq">FAQ</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
