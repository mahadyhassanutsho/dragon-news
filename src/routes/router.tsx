import axios from "axios";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import NewsByCategoryPage from "../pages/NewsByCategoryPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import ProtectedRoute from "./ProtectedRoute";

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
    element: (
      <ProtectedRoute>
        <NewsDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

export default router;
