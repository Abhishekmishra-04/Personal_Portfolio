import { portfolioData } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-600 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
           <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors text-sm font-medium">GitHub</a>
           <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors text-sm font-medium">LinkedIn</a>
           <a href={`mailto:${portfolioData.personal.email}`} className="text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors text-sm font-medium">Email</a>
        </div>
      </div>
    </footer>
  );
};
