import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <Section id="education">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          A solid academic foundation in Computer Science with consistent performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.education.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-zinc-800 p-2 rounded-full">
                <GraduationCap className="text-orange-500" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {item.institution}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">{item.period}</p>
              </div>
            </div>
            <p className="text-zinc-300 font-medium mb-2">{item.degree}</p>
            <p className="text-zinc-400 text-sm">{item.result}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

