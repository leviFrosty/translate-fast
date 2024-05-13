"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function NavLinks(props: { closeSheet?: () => void }) {
  const router = useRouter();

  return (
    <>
      <Link
        href="/#pricing"
        onClick={() => {
          router.push("#pricing");
          props.closeSheet?.();
        }}
      >
        <Button variant="ghost" className="w-full">
          Pricing
        </Button>
      </Link>
      <Link href="/#demo" onClick={props.closeSheet}>
        <Button variant="ghost" className="w-full">
          Demo
        </Button>
      </Link>
      <Link href="/#faq" onClick={props.closeSheet}>
        <Button variant="ghost" className="w-full">
          FAQ
        </Button>
      </Link>
    </>
  );
}
