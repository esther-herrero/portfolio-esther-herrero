import React from 'react';

const PostList = ({ data }) => (
  <ul>
    {Array.isArray(data) && data.slice(0, 10).map((item, index) => (
      <li key={index}>
        <strong>{item.title}</strong>: {item.body}
      </li>
    ))}
  </ul>
);

export default PostList;

