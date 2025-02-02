export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
}