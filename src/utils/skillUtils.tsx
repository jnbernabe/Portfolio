import { 
  SiPython, SiJson, SiDocker, 
  SiLinux, SiMysql, SiPostgresql, SiMongodb, SiOracle, SiDotnet,
  SiJavascript, SiTypescript, SiReact, SiAngular, SiNodedotjs, SiExpress, SiSelenium, 
  SiJunit5, SiPostman, SiJenkins, SiAmazon
} from "react-icons/si";
import { 
  BarChart3, Activity, Search, ShieldCheck, Cog, CheckCircle2, 
  GitBranch, Terminal, Database, Cloud, FileText
} from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type IconComponent = IconType | LucideIcon;

export const getSkillIcon = (skill: string): IconComponent | null => {
  const normalizedSkill = skill.toLowerCase();

  // Languages & Scripting
  if (normalizedSkill.includes("python")) return SiPython;
  if (normalizedSkill.includes("powershell")) return Terminal;
  if (normalizedSkill.includes("bash")) return Terminal;
  if (normalizedSkill.includes("javascript")) return SiJavascript;
  if (normalizedSkill.includes("typescript")) return SiTypescript;
  if (normalizedSkill.includes("c#") || normalizedSkill.includes(".net")) return SiDotnet;
  if (normalizedSkill.includes("java") && !normalizedSkill.includes("script")) return Cog; 
  if (normalizedSkill.includes("json")) return SiJson;
  if (normalizedSkill.includes("sql") && !normalizedSkill.includes("server")) return Database;

  // Cloud & Ops
  if (normalizedSkill.includes("azure")) return SiAmazon; // Fallback or Cloud? Let's use Cloud
  if (normalizedSkill.includes("azure")) return Cloud;
  if (normalizedSkill.includes("aws")) return SiAmazon;
  if (normalizedSkill.includes("docker")) return SiDocker;
  if (normalizedSkill.includes("linux")) return SiLinux;
  if (normalizedSkill.includes("ci/cd") || normalizedSkill.includes("jenkins")) return SiJenkins;
  if (normalizedSkill.includes("devops")) return GitBranch;

  // Databases
  if (normalizedSkill.includes("mysql")) return SiMysql;
  if (normalizedSkill.includes("postgres")) return SiPostgresql;
  if (normalizedSkill.includes("mongo")) return SiMongodb;
  if (normalizedSkill.includes("oracle")) return SiOracle;
  if (normalizedSkill.includes("sql server")) return Database;

  // Frameworks
  if (normalizedSkill.includes("react")) return SiReact;
  if (normalizedSkill.includes("angular")) return SiAngular;
  if (normalizedSkill.includes("node")) return SiNodedotjs;
  if (normalizedSkill.includes("express")) return SiExpress;

  // QA & Testing
  if (normalizedSkill.includes("selenium")) return SiSelenium;
  if (normalizedSkill.includes("junit")) return SiJunit5;
  if (normalizedSkill.includes("postman")) return SiPostman;
  if (normalizedSkill.includes("test") || normalizedSkill.includes("qa") || normalizedSkill.includes("regression")) return ShieldCheck;
  if (normalizedSkill.includes("defect")) return Activity;

  // Concepts / Generic
  if (normalizedSkill.includes("dashboard") || normalizedSkill.includes("visualization")) return BarChart3;
  if (normalizedSkill.includes("logging") || normalizedSkill.includes("monitoring")) return Activity;
  if (normalizedSkill.includes("ingestion") || normalizedSkill.includes("rest apis")) return Cloud;
  if (normalizedSkill.includes("root cause") || normalizedSkill.includes("analysis")) return Search;
  if (normalizedSkill.includes("stlc") || normalizedSkill.includes("plan")) return FileText;
  if (normalizedSkill.includes("performance") || normalizedSkill.includes("apm")) return Activity;

  // Fallback for new items
  return Terminal;
};
