import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { BaseHTMLAttributes } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface CompareCardProps extends BaseHTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  title: string;
  message: string;
}

const UserReview = React.forwardRef<HTMLDivElement, CompareCardProps>(
  ({ title, name, message, image }, ref) => {
    return (
      <div className="flex max-w-80 flex-col items-center gap-4" ref={ref}>
        <div className="block">
          <div className=" fit flex h-4 gap-[2px] text-amber-500">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-center">{message}</p>
          <div className="flex items-center gap-4">
            <Avatar className="bg-neutral-200">
              <AvatarImage src={image} />
              <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{name}</p>
              <span className="text-neutral-400">{title}</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

UserReview.displayName = "CompareCard";

export default UserReview;
