import { List } from './List';

export interface Project {
  title: string;
  date: string;
  company?: string;
  description?: string;
  skills?: string[];
  tasks?: List[];
}
