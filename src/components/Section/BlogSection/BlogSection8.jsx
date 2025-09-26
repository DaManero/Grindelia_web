import React from 'react';
import PostCardStyle5 from '../../PostCard/PostCardStyle5';

export default function BlogSection8({ data }) {
  return (
    <>
      {data?.map((item, index) => (
        <PostCardStyle5 {...item} key={index} variant="cs_size_5" />
      ))}
    </>
  );
}
