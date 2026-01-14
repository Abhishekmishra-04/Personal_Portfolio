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

      // For simplicity, assuming the generic route returns text, 
      // but our mock logic returned JSON string. Let's parse it if possible.
      // If it's a stream of text, we accumulate it.
      // But for "skill_match" the prompt output is expected to be JSON-like or structured text.
      
      // Let's handle the response as text and try to parse
      const text = await response.text();
      try {
          const json = JSON.parse(text);
          setResult(json);
      } catch {
          // If not valid JSON, just display as text analysis
          setResult({ analysis: text, matchPercentage: 0 });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-xl shadow-sm border border-zinc-800 p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <Search className="text-orange-500" size={20} />
        AI Skill Matcher
      </h3>
      <p className="text-sm text-zinc-400 mb-4">
        Paste a Job Description (JD) below to see how well my skills match your requirements.
      </p>

      <textarea
        className="w-full h-32 p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 mb-4 resize-none placeholder:text-zinc-600"
        placeholder="Paste JD here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button
        onClick={handleMatch}
        disabled={isLoading || !jobDescription.trim()}
        className="w-full py-2.5 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Analyzing...
          </>
        ) : (
          "Analyze Match"
        )}
      </button>

      {result && (
        <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-zinc-400">Match Score</span>
            <span className="text-2xl font-bold text-orange-500">{result.matchPercentage}%</span>
          </div>
          
          <div className="w-full bg-zinc-800 rounded-full h-2 mb-6">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${result.matchPercentage}%` }}
            />
          </div>

          <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-sm text-zinc-300 whitespace-pre-wrap">
            {result.analysis}
          </div>
          
          {result.verdict && (
             <div className="mt-4 flex items-center gap-2 text-emerald-500 font-semibold text-sm">
                <CheckCircle size={16} />
                {result.verdict}
             </div>
          )}
        </div>
      )}
    </div>
  );
};
