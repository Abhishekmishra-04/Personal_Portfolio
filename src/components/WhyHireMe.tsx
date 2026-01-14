import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export const WhyHireMe = () => {
  return (
    <Section id="why-hire-me">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Why Hire Me?</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          I bring a blend of technical expertise, product mindset, and a commitment to engineering excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {portfolioData.whyHireMe.map((item, index) => (
          <div key={index} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-sm hover:border-orange-500/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-zinc-800 p-2 rounded-full">
                <CheckCircle2 className="text-orange-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
