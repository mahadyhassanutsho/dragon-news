import { Outlet } from "react-router";
import Header from "../components/home/Header";
import LeftAside from "../components/home/LeftAside";
import RightAside from "../components/home/RightAside";
import LatestNews from "../components/news/LatestNews";
import Navbar from "../components/shared/Navbar";

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
