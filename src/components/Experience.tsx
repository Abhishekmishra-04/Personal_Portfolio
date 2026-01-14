import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <Section id="experience">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
        <p className="text-zinc-400">
          Hands-on experience in building and shipping production-grade software.
        </p>
      </div>

      <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-6 space-y-12">
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-4 border-orange-500" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <div className="text-orange-500 font-medium text-lg">{job.company}</div>
              </div>
              <div className="text-sm font-semibold text-zinc-300 bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {job.duration}
              </div>
            </div>

            <ul className="space-y-3">
              {job.description.map((point, i) => (
                <li key={i} className="text-zinc-400 flex items-start gap-3">
                  <Briefcase size={16} className="mt-1 text-orange-400 shrink-0" />
                  <span dangerouslySetInnerHTML={{ 
                    __html: point.replace(/(\d+%)/g, '<span class="font-bold text-emerald-400">$1</span>') 
                  }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
