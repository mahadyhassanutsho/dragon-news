import { useParams, useLoaderData } from "react-router";
import Header from "../components/home-layout/Header";
import Navbar from "../components/shared/Navbar";
import RightAside from "../components/home-layout/RightAside";
import NewsDetailsCard from "../components/home-layout/NewsDetailsCard";

export default function NewsDetailsPage() {
  const { id } = useParams();
  const allNews = useLoaderData();
  const news = allNews.find((news) => news.id === id);

  return (
    <>
      <Header />
      <Navbar />
      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 gap-4">
        <section className="col-span-9">
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit py-4">
          <RightAside />
        </aside>
      </main>
    </>
  );
}
