import { ListData } from './List';

interface ResumeContentData {
  title: string;
  subtitle: string;
  date: string;
}

export type ResumeContentType = 'PROJECT' | 'ETC';

export interface ResumeProjectData extends ResumeContentData {
  description: string;
  skills: string[];
  tasks: ListData[];
}
