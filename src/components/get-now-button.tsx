import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export interface GetNowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const GetNowButton = ({ text, className, ...props }: GetNowButtonProps) => {
  return (
    <Link href="/login">
      <Button className={"flex gap-2 w-fit " + className} {...props}>
        <p>{text ?? "Get TranslateFast"}</p>
        <Image src="/icon-alt.png" alt="" width={24} height={24} />
      </Button>
    </Link>
  );
};

export default GetNowButton;
