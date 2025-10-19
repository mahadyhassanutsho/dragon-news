import axios from "axios";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import NewsByCategoryPage from "../pages/NewsByCategoryPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NewsDetailsPage from "../pages/NewsDetailsPage";

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
    path: "/news/:id",
    loader: () => axios.get("/news.json").then((res) => res.data),
    element: <NewsDetailsPage />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

export default router;
