import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import Login from "./components/Login/Login";
import './custom.css';

export default function App() {

  const [token, setToken] = useState();

  if (!token) {
    return (
      <Layout>
        <Login setToken={setToken} />
      </Layout>
    )
  }

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
