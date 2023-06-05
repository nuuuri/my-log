'use client';

import { allPosts } from '@/contentlayer/generated';
import { styled } from 'styled-components';

const Container = styled.div`
  background: pink;
`;

export default function Home() {
  console.log(allPosts);
  return (
    <Container>
      {allPosts.map((post) => (
        <div>{post.title}</div>
      ))}
    </Container>
  );
}
