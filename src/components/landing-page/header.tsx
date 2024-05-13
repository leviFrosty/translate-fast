import Image from "next/image";
import Link from "next/link";
import MobileSheet from "./mobile-sheet";
import NavLinks from "./nav-links";

export default function Header() {
  return (
    <header className="flex justify-center">
      <div className="flex w-full max-w-screen-lg items-center justify-between py-2 max-lg:p-4">
        <Link className="flex items-center gap-2" href="/">
          <Image src="/icon.png" alt="" width={24} height={24} />
          <p className="font-black">TranslateFast</p>
        </Link>
        <MobileSheet />
        <nav className="flex gap-6 font-semibold max-sm:hidden">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
