import P from 'prop-types';

import React from 'react';

import { PostCard } from '../PostCard';

import './styles.css';

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard title={post.title} body={post.body} cover={post.cover} key={post.id} />
    ))}
  </div>
);

Posts.defaultProps = { posts: [] };

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
