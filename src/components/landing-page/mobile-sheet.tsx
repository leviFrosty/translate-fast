"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./nav-links";
import Link from "next/link";
import { useState } from "react";

export default function MobileSheet() {
  const [open, setOpen] = useState(false);

  function closeSheet() {
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <FontAwesomeIcon icon={faBars} className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex h-full flex-col justify-between gap-2 pt-4">
          <div className="flex flex-col">
            <NavLinks closeSheet={closeSheet} />
          </div>
          <Link href="/login">
            <Button variant="outline" className="w-full">
              Login
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
