"use client";

import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import { Download, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section id="about" className="pt-24 md:pt-32 min-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Available for Full-Time Roles
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">{portfolioData.personal.name.split(" ")[0]}</span>. <br />
              I build production-ready web applications.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              {portfolioData.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-pink-700 transition-all shadow-lg shadow-orange-500/20"
              >
                Get in Touch
                <MessageSquare size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-300 rounded-lg font-medium hover:border-orange-500 hover:text-orange-500 transition-all shadow-sm"
              >
                Download Resume
                <Download size={20} />
              </a>
            </div>
            <div className="flex items-center gap-6 text-zinc-500 dark:text-zinc-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {portfolioData.personal.location}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="md:col-span-5 flex justify-center md:justify-end items-start">
          <div className="group p-1 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-orange-500/10">
            <div className="rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 w-[260px] h-[340px] sm:w-[300px] sm:h-[380px] md:w-[340px] md:h-[420px] transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/profile.jpeg"
                alt="Abhishek Kumar Mishra – Full Stack Developer"
                width={768}
                height={892}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
