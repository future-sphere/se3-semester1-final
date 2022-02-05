import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PostBlock from '../components/PostBlock';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className='post-page'>
      {posts.map((post, i) => (
        <PostBlock post={post} key={i} />
      ))}
      <Outlet />
    </div>
  );
}
