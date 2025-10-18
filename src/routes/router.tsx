import axios from "axios";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import NewsByCategoryPage from "../pages/NewsByCategoryPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "category/:id",
        loader: () => axios.get("/news.json").then((res) => res.data),
        element: <NewsByCategoryPage />,
      },
    ],
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/news/",
    element: (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-center">News Layout</h1>
      </div>
    ),
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

export default router;
