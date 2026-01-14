import { portfolioData } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
           <a href={portfolioData.personal.github} className="text-zinc-400 hover:text-orange-500 transition-colors">GitHub</a>
           <a href={portfolioData.personal.linkedin} className="text-zinc-400 hover:text-orange-500 transition-colors">LinkedIn</a>
           <a href={`mailto:${portfolioData.personal.email}`} className="text-zinc-400 hover:text-orange-500 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};
