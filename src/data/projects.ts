import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "STMV - Spotify to YouTube Playlist Generator",
    description: "End-to-end app that migrates Spotify playlists into curated YouTube music video collections with API rate limiting and retry safeguards.",
    period: "2024",
    tech: ["React", "TypeScript", "Node.js", "Express", "Spotify API", "YouTube API"],
    liveUrl: "https://stmv.netlify.app/",
    repoUrl: "https://github.com/jnbernabe/spotify-to-youtube"
  },
  {
    title: "NaviGrade",
    description: "Full-stack coursework manager that lets students plan assignments, track progress, and model final grades in real time.",
    period: "2023",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Heroku"],
    liveUrl: "https://navigrade-ee7efdf3e932.herokuapp.com/",
    repoUrl: "https://github.com/jnbernabe/NaviGrade"
  },
  {
    title: "AWS Translate & Polly Pipeline",
    description: "Serverless workflow that extracts text from images, translates it, and delivers natural-sounding speech output for accessibility use cases.",
    period: "2022",
    tech: ["Python", "AWS Translate", "AWS Polly", "Serverless"],
    repoUrl: "https://github.com/jnbernabe/AWS-Translate-polly"
  }
];