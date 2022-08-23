import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/layout';
import Login from './components/Login/login';
//import './custom.css';

function setToken(userToken: any) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  if (!tokenString) {
    console.error('token string is empty')
    return
  }
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
          return <Route key={index}
            {...rest}
            element={element} />;
        })}
      </Routes>

    </Layout>
  );

}
