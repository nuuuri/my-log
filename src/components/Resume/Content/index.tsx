import { ReactNode } from 'react';

import ResumeList from '../List';

import ResumeContentDate from './Date';
import ResumeContentDescription from './Description';
import ResumeContentSkills from './Skills';
import ResumeContentSubtitle from './Subtitle';
import ResumeContentTitle from './Title';

interface ResumeContentMainProps {
  className?: string;
  children: ReactNode;
}

function ResumeContentMain({ className, children }: ResumeContentMainProps) {
  return <div className={className}>{children}</div>;
}

const ResumeContent = Object.assign(ResumeContentMain, {
  Title: ResumeContentTitle,
  Subtitle: ResumeContentSubtitle,
  Date: ResumeContentDate,
  Description: ResumeContentDescription,
  Skills: ResumeContentSkills,
  Tasks: ResumeList,
});

export default ResumeContent;
