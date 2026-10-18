"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Why Me", href: "#why-hire-me" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b shadow-md",
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md py-3 border-zinc-800"
          : "bg-zinc-950/95 backdrop-blur-md py-4 border-zinc-800"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xl font-bold text-white tracking-tight font-mono whitespace-nowrap"
        >
          Abhishek<span className="text-orange-500">.dev</span>
        </Link>

        <div className="flex items-center justify-end gap-4 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <Link
              href="#contact"
              className="bg-transparent border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500/10 transition-colors whitespace-nowrap"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
