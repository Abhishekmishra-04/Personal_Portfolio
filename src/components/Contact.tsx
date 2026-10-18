"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Loader2,
  CheckCircle2,
  Copy,
  Check,
  Share2,
  MessageSquare,
  User,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      );
    }
  };

  const copyContactLink = () => {
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}/#contact`
        : `${portfolioData.personal.portfolio}#contact`;

    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(portfolioData.personal.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
    formData.subject || "Portfolio Contact Inquiry"
  )}&body=${encodeURIComponent(
    `Hi Abhishek,\n\n${formData.message || "I would like to connect regarding an opportunity."}\n\nBest regards,\n${
      formData.name || "Visitor"
    } (${formData.email || ""})`
  )}`;

  return (
    <Section id="contact" className="pb-32">
      <div className="bg-white dark:bg-zinc-900/90 rounded-3xl p-6 sm:p-10 md:p-16 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        {/* Header */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4 shadow-xs">
            <MessageSquare size={16} />
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
            Ready to build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              extraordinary?
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            I am currently open to full-time software engineering roles and freelance projects.
            Send a message below or copy my direct contact link to share with your team.
          </p>

          {/* Shareable Link Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={copyContactLink}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/90 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-all shadow-xs cursor-pointer"
              title="Copy direct link to this contact form"
            >
              {copiedLink ? (
                <>
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Contact Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={16} className="text-orange-500" />
                  <span>Copy Direct Form Link</span>
                </>
              )}
            </button>

            <button
              onClick={copyEmailAddress}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/90 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-all shadow-xs cursor-pointer"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-zinc-500 dark:text-zinc-400" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Grid: Contact Info + Working Form */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-50 dark:bg-zinc-950/70 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Direct Contact Details</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                Prefer direct communication? Reach out on any of these channels anytime:
              </p>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/60 hover:border-orange-500/40 transition-colors shadow-xs">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Email Me</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-zinc-900 dark:text-zinc-200 hover:text-orange-500 font-semibold break-all transition-colors"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/60 hover:border-orange-500/40 transition-colors shadow-xs">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Phone & WhatsApp</div>
                    <a
                      href={`https://wa.me/918207768304`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-900 dark:text-zinc-200 hover:text-emerald-500 font-semibold transition-colors inline-flex items-center gap-1.5"
                    >
                      {portfolioData.personal.phone}
                      <ExternalLink size={13} className="text-zinc-400" />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/60 shadow-xs">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500 shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Location</div>
                    <div className="text-zinc-800 dark:text-zinc-300 font-medium">
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-3">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/40 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all shadow-xs"
                >
                  <Linkedin size={18} className="text-orange-500" />
                  LinkedIn
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/40 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all shadow-xs"
                >
                  <Github size={18} className="text-zinc-700 dark:text-zinc-300" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-50 dark:bg-zinc-950/70 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Send a Direct Message</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                Fill out the details below and hit send. I typically reply within 24 hours.
              </p>

              {status === "success" ? (
                <div className="py-10 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-500">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                    Thank you for reaching out! Abhishek has received your message and will get back to you as soon as possible.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white font-semibold text-sm transition-colors border border-zinc-300 dark:border-zinc-700 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={mailtoUrl}
                      className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-orange-500/20"
                    >
                      Open in Email App
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm flex items-start gap-2.5">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{errorMessage}</p>
                        <p className="text-xs text-red-500/80 dark:text-red-300/80 mt-1">
                          You can also{" "}
                          <a href={mailtoUrl} className="underline hover:text-red-700 dark:hover:text-white">
                            click here to send via your email client
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                        Your Name <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 focus:border-orange-500 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                        Your Email <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="e.g. rahul@company.com"
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 focus:border-orange-500 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Subject <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Full Stack Developer Opportunity / Project Discussion"
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 focus:border-orange-500 rounded-xl py-2.5 px-4 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all shadow-xs"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here... tell me about your project, team, or opportunity."
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 focus:border-orange-500 rounded-xl p-3.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all resize-none shadow-xs"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:flex-1 py-3 px-6 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto py-3 px-5 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-semibold transition-colors text-center inline-flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
                      title="Open with your default email application"
                    >
                      <Mail size={16} />
                      Send via Email App
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
