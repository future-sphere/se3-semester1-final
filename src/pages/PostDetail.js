import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PostDetailPage() {
  const location = useLocation();
  const [post, setPost] = useState(null);

  const id = location.pathname.split('/')[2];
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + '/posts/' + id)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);
  return post ? (
    <div className='post-detail'>
      <h1>
        <Link to={`/users/${post.author._id}`}>{post.author.name}</Link>:{' '}
        {post.title}
      </h1>
      <p>{post.content}</p>
      <div className='comments'>
        <span>Comments:</span>
        {post.comments.map((comment) => (
          <p>
            {comment.content}
            <span>{dayjs(comment.createdAt).format('DD/MM/YYYY')}</span>
          </p>
        ))}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
