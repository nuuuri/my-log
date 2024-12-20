import { ListData } from './List';

export interface ResumeContentData {
  title: string;
  date: string;

  subtitle?: string;
  description?: string;
  skills?: string[];
  tasks?: ListData[];
}

export interface ResumeExperienceData
  extends Pick<ResumeContentData, 'title' | 'date'> {
  careerPeriod: string;
  content: { position: string; date: string; tasks: string[] }[];
}

export interface ResumeSkillData {
  category: string;
  skills: string;
}
