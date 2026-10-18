"use client";

import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github, Layers, Zap, Sparkles, X, Loader2, Bot } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleExplain = async (projectTitle: string) => {
    setActiveProject(projectTitle);
    setAiExplanation(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "explain_project",
          data: { projectTitle, audience: "technical recruiter" },
          messages: [],
        }),
      });

      const text = await response.text();
      setAiExplanation(text);
    } catch (error) {
      console.error(error);
      setAiExplanation("Failed to generate explanation.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeExplanation = () => {
    setActiveProject(null);
    setAiExplanation(null);
  };

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fullstack") {
      return project.tech.some((t) => ["Node.js", "MySQL", "MongoDB", "Express", "REST APIs"].includes(t));
    }
    if (activeFilter === "frontend") {
      return project.tech.some((t) => ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5"].includes(t));
    }
    if (activeFilter === "ai") {
      return project.tech.some((t) => ["Python", "NLP", "Machine Learning", "OpenAI API", "AI Integration", "Data Engineering"].includes(t));
    }
    return true;
  });

  const categories = [
    { id: "all", label: `All Projects (${portfolioData.projects.length})` },
    { id: "fullstack", label: "Full Stack & APIs" },
    { id: "frontend", label: "Frontend & Web" },
    { id: "ai", label: "AI & Data Engineering" },
  ];

  return (
    <Section id="projects">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects & GitHub Repositories</h2>
        <p className="text-zinc-400 max-w-2xl mb-6">
          Real-world solutions demonstrating full-stack engineering, from database architecture and data pipelines to production frontend systems.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === cat.id
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:shadow-lg hover:border-orange-500/30 transition-all flex flex-col relative"
          >
            <div className="p-6 md:p-8 flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" title="View Code">
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-orange-500 transition-colors" title="View Live">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Layers size={14} /> The Challenge & Solution
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                   <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Key Features</h4>
                   <ul className="list-disc list-outside ml-4 text-sm text-zinc-400 space-y-1">
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                   </ul>
                </div>

                  <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 mt-4">
                    <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Zap size={14} /> Outcome
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {project.outcome}
                    </p>
                 </div>
              </div>
            </div>

            {/* AI Explain Button */}
            <div className="p-4 bg-zinc-950/60 border-t border-zinc-800">
               <button
                  onClick={() => handleExplain(project.title)}
                  className="w-full py-2 bg-zinc-800/80 hover:bg-zinc-800 border border-orange-500/30 text-orange-400 hover:text-orange-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:border-orange-500/60 transition-colors shadow-sm"
               >
                  <Sparkles size={16} />
                  Ask AI to Explain Architecture
               </button>
            </div>

            {/* AI Modal Overlay */}
            <AnimatePresence>
               {activeProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm z-10 p-6 overflow-y-auto"
                  >
                     <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-orange-400 font-bold">
                           <Bot size={20} />
                           AI Architecture Breakdown
                        </div>
                        <button onClick={closeExplanation} className="text-zinc-400 hover:text-white">
                           <X size={20} />
                        </button>
                     </div>
                     
                     {isLoading ? (
                        <div className="flex flex-col items-center justify-center h-40 gap-3 text-zinc-400">
                           <Loader2 size={32} className="animate-spin text-orange-400" />
                           <p className="text-sm">Analyzing codebase structure...</p>
                        </div>
                     ) : (
                        <div className="prose prose-sm prose-invert text-zinc-300">
                           <div className="whitespace-pre-wrap">{aiExplanation}</div>
                        </div>
                     )}
                  </motion.div>
               )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};
