// import { Counter } from "./components/Counter";
// import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import TextEditor from './components/TextEdit'
import Profile from "./components/Profile";
import LoginPage from "./components/LoginPage";
import { Info } from "./components/Info";

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
  {
    path: '/login',
    element: <LoginPage />
  },
];

export default AppRoutes;
