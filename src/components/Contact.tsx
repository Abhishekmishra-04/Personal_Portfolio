import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <Section id="contact" className="pb-32">
      <div className="bg-zinc-900 rounded-2xl p-8 md:p-16 text-center text-white border border-zinc-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to build something amazing?
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
          I am currently available for full-time opportunities. If you&apos;re looking for a developer who can jump in and start contributing immediately, let&apos;s talk.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            <Mail size={20} />
            Send me an email
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-zinc-800 text-white border border-zinc-700 rounded-full font-bold text-lg hover:bg-zinc-700 transition-colors"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            {portfolioData.personal.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            {portfolioData.personal.phone}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {portfolioData.personal.location}
          </div>
        </div>
      </div>
    </Section>
  );
};
