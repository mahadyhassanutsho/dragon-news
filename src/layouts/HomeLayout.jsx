import { Outlet } from "react-router";
import Header from "../components/home-layout/Header";
import LatestNews from "../components/home-layout/LatestNews";
import Navbar from "../components/shared/Navbar";
import LeftAside from "../components/home-layout/LeftAside";
import RightAside from "../components/home-layout/RightAside";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <LatestNews />
      <Navbar />
      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 gap-4">
        <aside className="col-span-3 sticky top-0 h-fit py-4">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit py-4">
          <RightAside />
        </aside>
      </main>
    </>
  );
}
