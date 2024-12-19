import { List } from './List';

export type ResumeContentType = 'PROJECT' | 'ETC';

export interface ResumeContent {
  type: ResumeContentType;
  title: string;
  date: string;
  company?: string;
  description?: string;
  skills?: string[];
  tasks?: List[];
}
