import { ListData } from './List';

export interface ResumeContentData {
  title: string;
  date: string;

  subtitle?: string;
  description?: string;
  skills?: string[];
  tasks?: ListData[];
}
