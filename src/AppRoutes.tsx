// import { Counter } from "./components/Counter";
// import { FetchData } from "./components/FetchData";
import Home from "@components/home";
import TextEditor from '@components/TextEditor/text-editor'
import Profile from "@components/profile";
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
