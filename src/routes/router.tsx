import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import NewsByCategoryPage from "../pages/NewsByCategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "category/:id", element: <NewsByCategoryPage /> },
    ],
  },
  {
    path: "/auth",
    element: (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-center">Auth Layout</h1>
      </div>
    ),
  },
  {
    path: "/news",
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
