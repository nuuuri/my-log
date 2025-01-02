import fs from 'fs';
import path from 'path';

export const getFileContent = (slug: string) => {
  const filePath = path.join(process.cwd(), 'mdx', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  return fs.readFileSync(filePath, 'utf-8');
};
