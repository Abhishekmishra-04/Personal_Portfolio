import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export const CodingProfiles = () => {
  return (
    <Section className="py-12 bg-zinc-900 text-white border border-zinc-800 rounded-2xl my-12 mx-4 md:mx-8 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Coding Profiles</h3>
          <p className="text-zinc-400">
            Check out my problem-solving track record across various platforms.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {portfolioData.codingProfiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors font-medium border border-zinc-700"
            >
              {profile.platform}
              <ExternalLink size={16} className="text-orange-500" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
