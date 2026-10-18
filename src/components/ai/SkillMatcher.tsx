"use client";

import { useState } from "react";
import { Search, CheckCircle, Loader2 } from "lucide-react";

interface MatchResult {
  matchPercentage: number;
  analysis: string;
  verdict?: string;
}

export const SkillMatcher = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMatch = async () => {
    if (!jobDescription.trim()) return;
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "skill_match",
          data: { jobDescription },
          messages: [],
        }),
      });

      const text = await response.text();
      try {
        const json = JSON.parse(text);
        setResult(json);
      } catch {
        setResult({ analysis: text, matchPercentage: 0 });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
        <Search className="text-orange-500" size={20} />
        AI Skill Matcher
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Paste a Job Description (JD) below to see how well my skills match your requirements.
      </p>

      <textarea
        className="w-full h-32 p-3.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 mb-4 resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all"
        placeholder="Paste job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button
        onClick={handleMatch}
        disabled={isLoading || !jobDescription.trim()}
        className="w-full py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Analyzing Requirements...
          </>
        ) : (
          "Analyze Match"
        )}
      </button>

      {result && (
        <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Match Score</span>
            <span className="text-2xl font-bold text-orange-500">{result.matchPercentage}%</span>
          </div>
          
          <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mb-6">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${result.matchPercentage}%` }}
            />
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-800 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed">
            {result.analysis}
          </div>
          
          {result.verdict && (
             <div className="mt-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                <CheckCircle size={16} />
                {result.verdict}
             </div>
          )}
        </div>
      )}
    </div>
  );
};
