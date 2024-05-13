import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { BaseHTMLAttributes } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface CompareCardProps extends BaseHTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  title: string;
  message: string;
}

const UserReview = React.forwardRef<HTMLDivElement, CompareCardProps>(
  ({ title, name, message, image }, ref) => {
    return (
      <div className="flex flex-col items-center max-w-80 gap-4" ref={ref}>
        <div className="block">
          <div className=" flex gap-[2px] text-amber-500 h-4 fit">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-center">{message}</p>
          <div className="flex gap-4 items-center">
            <Avatar className="bg-neutral-200">
              <AvatarImage src={image} />
              <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{name}</p>
              <span className="text-neutral-400">{title}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

UserReview.displayName = "CompareCard";

export default UserReview;
