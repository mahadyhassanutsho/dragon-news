import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/home-layout/NewsCard";

export default function NewsByCategoryPage() {
  const { id } = useParams();
  const allNews = useLoaderData();
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    switch (id) {
      case "0":
        setFilteredNews(allNews);
        return;
      case "1":
        setFilteredNews(
          allNews.filter((news) => news.others.is_today_pick == true)
        );
        return;
      default:
        setFilteredNews(allNews.filter((news) => news.category_id == id));
    }
  }, [allNews, id]);

  return (
    <div>
      <h2 className="font-bold">
        Total <span className="text-secondary">{filteredNews.length} </span>news
        found
      </h2>

      <ul className="mt-4 grid grid-cols-1 gap-4">
        {filteredNews.map((news, i) => (
          <li key={i}>
            <NewsCard news={news} />
          </li>
        ))}
      </ul>
    </div>
  );
}
