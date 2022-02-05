import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/users').then((response) => {
      console.log('loading');
      setUsers(response.data);
    });
  }, []);
  return (
    <div className='users-page'>
      {users.length ? (
        <div>
          {users.map((user, i) => (
            <div>
              <p>
                <Link to={`/users/${user._id}`}>{user.name || 'Guest'}</Link>:{' '}
                {user.age} years old
              </p>
            </div>
          ))}
        </div>
      ) : (
        'No users'
      )}
      <Outlet />
    </div>
  );
}
