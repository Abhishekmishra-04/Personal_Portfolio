import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";

export const Certifications = () => {
  return (
    <Section>
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
        <Award className="text-orange-500" />
        Certifications & Licenses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.certifications.map((cert, index) => (
          <div key={index} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 shadow-xs">
            <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
            <span className="text-zinc-800 dark:text-zinc-300 font-medium text-sm">{cert}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};
