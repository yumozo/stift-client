// import { Counter } from "./components/Counter";
// import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import TextEditor from './components/TextEdit'
import Profile from "./components/Profile";
import LoginPage from "./components/Login/Login";
import { Info } from "./components/Info";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/text-editor',
    element: <TextEditor />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/info',
    element: <Info />
  },
  // {
  //   path: '/login',
  //   element: <LoginPage />
  // },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/preferences',
    element: <Preferences />
  },
];

export default AppRoutes;
