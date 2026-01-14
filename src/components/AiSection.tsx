"use client";

import { Section } from "@/components/ui/Section";
import { AiAssistant } from "@/components/ai/AiAssistant";
import { SkillMatcher } from "@/components/ai/SkillMatcher";
import { Sparkles } from "lucide-react";

export const AiSection = () => {
  return (
    <Section id="ai-demo" className="relative overflow-hidden pt-0">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-orange-500 text-sm font-bold mb-6 shadow-sm">
          <Sparkles size={16} />
          AI-Powered Portfolio
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Interact with my <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Digital Twin</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          I don&apos;t just build websites; I build intelligent systems. Use these AI tools to explore my experience, match your JD, or get a quick summary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Chatbot (Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <AiAssistant />
          <div className="mt-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-sm text-zinc-400">
            <strong>💡 Pro Tip:</strong> Ask specific technical questions like &quot;How did he optimize database queries?&quot; or &quot;What is his experience with AWS?&quot;
          </div>
        </div>

        {/* Right Column: Tools */}
        <div className="lg:col-span-7">
          <SkillMatcher />
        </div>
      </div>
    </Section>
  );
};
