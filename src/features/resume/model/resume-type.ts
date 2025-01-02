export interface ResumeContent {
  title: string;
  date: string;
  subtitle?: string;
  description?: string;
  skills?: string[];
  tasks?: Task[];
}

interface Task {
  text: string;
  children?: Task[];
}

export interface ResumeExperienceContent {
  title: string;
  date: string;
  careerPeriod: string;
  content: { position: string; date: string; tasks: string[] }[];
}

export interface ResumeSkillContent {
  category: string;
  skills: string;
}
