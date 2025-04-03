import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = (props) => {
  const { children, className } = props;
  return (
    <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
      {children}
    </div>
  );
};