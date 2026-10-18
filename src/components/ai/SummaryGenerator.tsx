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
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
        <FileText className="text-orange-500" size={20} />
        Smart Summary Generator
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
        Generate a tailored professional summary based on who you are.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => generateSummary("recruiter")}
          disabled={isLoading}
          className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-orange-500/40 text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-500 transition-all text-sm font-semibold cursor-pointer shadow-xs"
        >
          <UserCircle size={20} className="mb-2 text-orange-500" />
          For Recruiters
        </button>
        <button
          onClick={() => generateSummary("technical")}
          disabled={isLoading}
          className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-orange-500/40 text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-500 transition-all text-sm font-semibold cursor-pointer shadow-xs"
        >
          <Code2 size={20} className="mb-2 text-orange-500" />
          For Engineers
        </button>
        <button
          onClick={() => generateSummary("cto")}
          disabled={isLoading}
          className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-orange-500/40 text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-500 transition-all text-sm font-semibold cursor-pointer shadow-xs"
        >
          <TrendingUp size={20} className="mb-2 text-orange-500" />
          For CTOs
        </button>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-8 text-zinc-500">
           <Loader2 size={24} className="animate-spin text-orange-500" />
        </div>
      )}

      {summary && !isLoading && (
        <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 animate-in fade-in duration-300">
          <p className="text-zinc-800 dark:text-zinc-300 text-sm leading-relaxed italic">
            &quot;{summary}&quot;
          </p>
        </div>
      )}
    </div>
  );
};
