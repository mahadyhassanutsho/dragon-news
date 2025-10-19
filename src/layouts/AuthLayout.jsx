import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

export default function AuthLayout() {
  return (
    <div className="bg-base-200">
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto py-4">
        <Outlet />
      </main>
    </div>
  );
}
