"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AiAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Abhishek's AI Assistant. Ask me anything about his skills, projects, or why he's the perfect fit for your team.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          type: "chat",
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      // Handle stream or text
      const reader = response.body?.getReader();
      let assistantMessage = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const text = new TextDecoder().decode(value);
          assistantMessage += text;
          
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = assistantMessage;
            return newMessages;
          });
        }
      } else {
          // Fallback if not streaming (e.g. mock response)
          const text = await response.text();
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = text;
            return newMessages;
          });
      }

    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "Why should we hire Abhishek?",
    "Explain the Job Portal architecture",
    "Is he open to relocation?",
    "What is his tech stack?",
  ];

  return (
    <div className="bg-zinc-900 rounded-xl shadow-xl border border-zinc-800 overflow-hidden flex flex-col h-[500px] w-full max-w-md mx-auto md:mx-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 border-b border-white/10 p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-white/20 rounded-lg">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm">AI Recruiter Assistant</h3>
            <div className="flex items-center gap-1.5">
               <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
               <p className="text-xs text-orange-100">Online | Powered by RAG</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent"
      >
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex w-full",
                m.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                  m.role === "user"
                    ? "bg-orange-500 text-white font-medium rounded-br-none"
                    : "bg-zinc-800 text-zinc-300 border border-white/5 rounded-bl-none"
                )}
              >
                {m.content || <span className="animate-pulse">...</span>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Loading Indicator */}
        {isLoading && messages[messages.length - 1].role === "user" && (
           <div className="flex justify-start">
              <div className="bg-zinc-800 text-zinc-500 border border-white/5 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-orange-500" />
                 <span className="text-xs text-text-muted">Thinking...</span>
              </div>
           </div>
        )}
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
           <p className="text-xs text-text-muted mb-2 font-medium">Suggested Questions:</p>
           <div className="flex flex-wrap gap-2">
             {suggestedQuestions.map((q) => (
               <button
                 key={q}
                 onClick={() => {
                   setInput(q);
                   // Optional: Auto-submit
                 }}
                 className="text-xs bg-midnight-light border border-white/5 text-text-muted px-3 py-1.5 rounded-full hover:bg-sky-blue/10 hover:border-sky-blue/30 hover:text-sky-blue transition-colors text-left"
               >
                 {q}
               </button>
             ))}
           </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 bg-midnight border-t border-white/5">
        <div className="relative flex items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Abhishek..."
            className="w-full bg-midnight-light text-text-main placeholder:text-text-muted rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/20 transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-1.5 p-2 bg-sky-blue text-midnight rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-blue/90 transition-colors"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </div>
        <div className="text-center mt-2">
           <p className="text-[10px] text-text-muted flex items-center justify-center gap-1">
             <Sparkles size={10} /> AI responses generated from portfolio data
           </p>
        </div>
      </form>
    </div>
  );
};
