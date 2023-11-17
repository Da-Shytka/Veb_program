import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./pages/Error";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Case from "./pages/Case";
import Library from "./pages/Library";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "library",
    element: <Library />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cases",
    element: <Case />,
  },
  {
    path: "admin",
    element: <AdminLogin />,
  },
  {
    path: "admin/home",
    element: <AdminHome />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
