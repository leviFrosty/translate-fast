import { cn } from "@/lib/utils";
import React from "react";

export interface TitleProps extends React.BaseHTMLAttributes<HTMLHeadElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, as = "h1", className, ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        ref={ref}
        className={cn("mb-1 text-4xl font-black", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Title.displayName = "Title";

export default Title;
