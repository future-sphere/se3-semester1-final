import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import PostsPage from './pages/Posts';
import PostDetailPage from './pages/PostDetail';
import UsersPage from './pages/Users';
import UserDetailPage from './pages/UserDetail';
// import your route components too

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='posts'>
          <Route index element={<PostsPage />} />
          <Route path=':postId' element={<PostDetailPage />} />
        </Route>
        <Route path='users'>
          <Route index element={<UsersPage />} />
          <Route path=':userId' element={<UserDetailPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
