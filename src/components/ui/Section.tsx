import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto", className)}>
      {children}
    </section>
  );
};
