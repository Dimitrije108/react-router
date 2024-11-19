import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import MyPath from './components/MyPath';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "my-path",
    element: <MyPath />,
  },
]);

export default router;