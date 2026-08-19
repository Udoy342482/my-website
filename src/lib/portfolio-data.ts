export const resumeUrl = "/resume.pdf";

export const navLinks = [
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/about" },
  { label: "RESUME", href: resumeUrl },
  { label: "CONTACT", href: "/contact" },
] as const;

export const contactSubjects = [
  { value: "new-project", label: "New Project" },
  { value: "collaboration", label: "Collaboration" },
  { value: "job-opportunity", label: "Job Opportunity" },
  { value: "design-consulting", label: "Design Consulting" },
  { value: "other", label: "Other" },
] as const;
