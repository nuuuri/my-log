import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

import rehypePrettyCode from 'rehype-pretty-code';

interface MdxContentProps {
  content: string;
}

export default function MdxContent({ content }: MdxContentProps) {
  return (
    <MDXRemote
      components={{
        Link: ({ href }: { href: string }) => (
          <Link href={href} rel="noopener noreferrer" target="_blank">
            {href}
          </Link>
        ),
      }}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, { theme: 'slack-dark' }]],
        },
      }}
      source={content}
    />
  );
}
