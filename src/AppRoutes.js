// import { Counter } from "./components/Counter";
// import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import TextEditor from './components/TextEditing/TextEdit'
import Profile from "./components/Profile";
import { Info } from "./components/Info";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/text-edit',
    requireAuth: true,
    element: <TextEditor />
  },
  {
    path: '/profile',
    requireAuth: true,
    element: <Profile />
  },
  {
    path: '/info',
    element: <Info />
  },
];

export default AppRoutes;
