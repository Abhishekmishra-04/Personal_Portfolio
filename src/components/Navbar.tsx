"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b shadow-md",
        isScrolled 
          ? "bg-zinc-950/95 backdrop-blur-md py-3 border-zinc-800" 
          : "bg-zinc-950/95 backdrop-blur-md py-4 border-zinc-800"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-tight font-mono">
          Abhishek<span className="text-orange-500">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-zinc-800">
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
              className="bg-transparent border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500/10 transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 absolute top-full left-0 right-0 shadow-lg p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-zinc-300 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
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
          </div>
        </div>
      )}
    </nav>
  );
};
