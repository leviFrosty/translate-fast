import Link from "next/link";
import { Button } from "../ui/button";

export default function NavLinks() {
  return (
    <>
      <Button variant="ghost" className="w-full">
        <Link href="#pricing">Pricing</Link>
      </Button>
      <Button variant="ghost" className="w-full">
        <Link href="#demo">Demo</Link>
      </Button>
      <Button variant="ghost" className="w-full">
        <Link href="#faq">FAQ</Link>
      </Button>
    </>
  );
}
