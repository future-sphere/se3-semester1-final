import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostBlock({ post }) {
  return (
    <Link to={`/posts/${post._id}`}>
      <div className='post-container' key={post._id}>
        <div className='post-header'>
          <span>{post.author ? post.author.name : 'Guest'}:</span>
          <span>{post.title}</span>
        </div>
        <p className='post-body'>{post.content}</p>
        <div className='post-footer'>
          <div>
            <span>{dayjs(post.createdAt).format('MMMM DD, YYYY')}</span>
          </div>
          <div className='post-reactions'>
            <span>{post.likes ? post.likes.length : 0} Likes</span>
            <span>{post.comments ? post.comments.length : 0} Comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
