import {
  Briefcase,
  Building2,
  Heart,
  Shield,
  Star,
  Target,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

export const personaIconOptions = [
  "Building2",
  "User",
  "Users",
  "Briefcase",
  "Heart",
  "Shield",
  "Star",
  "Target",
] as const;

export type PersonaIconKey = (typeof personaIconOptions)[number];

export const personaIconMap: Record<PersonaIconKey, LucideIcon> = {
  Building2,
  User,
  Users,
  Briefcase,
  Heart,
  Shield,
  Star,
  Target,
};
