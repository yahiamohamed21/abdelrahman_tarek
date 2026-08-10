import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Section({ id, children, className, title }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6 md:px-12 max-w-7xl mx-auto w-full relative overflow-hidden", className)}>
      {title && (
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 z-10 relative">{title}</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full z-10 relative"></div>
        </div>
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}
