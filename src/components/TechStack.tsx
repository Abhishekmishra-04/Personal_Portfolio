import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";

export const TechStack = () => {
  const categories = [
    { name: "Frontend", skills: portfolioData.techStack.frontend },
    { name: "Backend & Database", skills: portfolioData.techStack.backend },
    { name: "DevOps & Tools", skills: portfolioData.techStack.devops },
    { name: "Engineering Practices", skills: portfolioData.techStack.engineering },
  ];

  return (
    <Section id="tech-stack">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Technical Expertise</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A comprehensive toolkit focused on scalability, performance, and modern development practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-orange-500/40 transition-all group"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2 group-hover:text-orange-500 transition-colors">
              {category.name}
            </h3>
            <ul className="space-y-2.5">
              {category.skills.map((skill) => (
                <li key={skill} className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
