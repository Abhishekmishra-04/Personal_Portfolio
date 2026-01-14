"use client";

import { useState } from "react";
import { FileText, Loader2, UserCircle, Code2, TrendingUp } from "lucide-react";

export const SummaryGenerator = () => {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateSummary = async (type: "recruiter" | "technical" | "cto") => {
    setIsLoading(true);
    setSummary("");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "summary",
          data: { audience: type },
          messages: [],
        }),
      });

      const text = await response.text();
      setSummary(text);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-xl shadow-sm border border-zinc-800 p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <FileText className="text-orange-500" size={20} />
        Smart Summary Generator
      </h3>
      <p className="text-sm text-zinc-400 mb-6">
        Generate a tailored professional summary based on who you are.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => generateSummary("recruiter")}
          disabled={isLoading}
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 hover:text-orange-500 transition-all text-sm font-medium text-zinc-400"
        >
          <UserCircle size={20} className="mb-2" />
          For Recruiters
        </button>
        <button
          onClick={() => generateSummary("technical")}
          disabled={isLoading}
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 hover:text-orange-500 transition-all text-sm font-medium text-zinc-400"
        >
          <Code2 size={20} className="mb-2" />
          For Engineers
        </button>
        <button
          onClick={() => generateSummary("cto")}
          disabled={isLoading}
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 hover:text-orange-500 transition-all text-sm font-medium text-zinc-400"
        >
          <TrendingUp size={20} className="mb-2" />
          For CTOs
        </button>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-8 text-zinc-500">
           <Loader2 size={24} className="animate-spin" />
        </div>
      )}

      {summary && !isLoading && (
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 rounded-lg border border-zinc-800 animate-in fade-in duration-300">
          <p className="text-zinc-300 text-sm leading-relaxed italic">
            &quot;{summary}&quot;
          </p>
        </div>
      )}
    </div>
  );
};
