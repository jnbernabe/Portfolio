import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "NaviGrade",
    description: "NaviGrade is a web application that helps students navigate their academic journey by providing personalized insights and recommendations based on their academic performance and goals.",
    period: "January 2026",
    tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Vite"],
    liveUrl: "https://navigrade.netlify.app/",
    repoUrl: "https://github.com/jnbernabe/navigrade",
    imageUrl: "NaviGradeGIF.gif"
  },
  {
    title: "Music Insights",
    description: "Music Insights is a powerful visual analytics dashboard designed to help music lovers understand their Spotify playlists on a deeper level. By analyzing audio features, patterns, and listening habits, it transforms raw data into a beautiful, interactive 'Deep Space themed experience.",
    period: "Nov 2025 - Dec 2025",
    tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "Spotify API"],
    liveUrl: "https://musicinsights.onrender.com/",
    repoUrl: "https://github.com/jnbernabe/musicinsights",
    imageUrl: "MusicInsightsGif.gif"
  },{
    title: "Spotify to YouTube Playlist Generator",
    description: "End-to-end app that migrates Spotify playlists into curated YouTube music video collections with API rate limiting and retry safeguards.",
    period: "January 2024",
    tech: ["React", "TypeScript", "Node.js", "Express", "Spotify API", "YouTube API"],
    liveUrl: "https://stmv.netlify.app/",
    repoUrl: "https://github.com/jnbernabe/spotify-to-youtube",
    imageUrl: "STMVGIF.gif"
  },
  
  
];