import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
    element: (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-center">Not Found</h1>
      </div>
    ),
  },
]);

export default router;
