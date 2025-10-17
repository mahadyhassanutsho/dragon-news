import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-center">Home Layout</h1>
      </div>
    ),
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
