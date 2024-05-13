import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./nav-links";
import Link from "next/link";

export default function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <FontAwesomeIcon icon={faBars} className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex h-full flex-col justify-between gap-2 pt-4">
          <div className="flex flex-col">
            <NavLinks />
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
