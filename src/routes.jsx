import App from "./App";
import Profile from "./components/Profile";
import DefaultProfile from "./components/DefaultProfile";
import Popeye from "./components/Popeye";
import Spinach from "./components/Spinach";
import Info from "./components/Info";
import ErrorPage from "./components/ErrorPage";

const routes = [
	{
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "popeye", element: <Popeye /> },
	    { path: "spinach", element: <Spinach /> },
    ]
  },
  {
    path: "info",
    element: <Info />,
  },
];

export default routes;