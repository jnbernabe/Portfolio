import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "STMV - Spotify to YouTube Playlist Generator",
    description: "End-to-end app that migrates Spotify playlists into curated YouTube music video collections with API rate limiting and retry safeguards.",
    period: "2024",
    tech: ["React", "TypeScript", "Node.js", "Express", "Spotify API", "YouTube API"],
    liveUrl: "https://stmv.netlify.app/",
    repoUrl: "https://github.com/jnbernabe/spotify-to-youtube"
  }
];