import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import Login from "./components/Login/Login";
import './custom.css';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString)
  return userToken?.token
}

export default function App() {

  // const [token, setToken] = useState();
  const token = getToken();

  // if (!token) {
  //   return (
  //     <Layout>
  //       <Login setToken={setToken} />
  //     </Layout>
  //   )
  // }

  return (
    <Layout>

      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>

    </Layout>
  );

}
