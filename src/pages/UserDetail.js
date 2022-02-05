import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostBlock from '../components/PostBlock';

export default function UserDetailPage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  const id = location.pathname.split('/')[2];

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + '/users/id', { params: { id } })
      .then((response) => {
        setUser(response.data);
      });
  }, [id]);

  return (
    <div className='user-page'>
      {user ? (
        <div>
          <h1>{user.name}</h1> <p>Age: {user.age}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
