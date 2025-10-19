import { Link } from "react-router";
import {
  IoEyeOutline,
  IoTimeOutline,
  IoShareSocialOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

export default function NewsCard({ news }) {
  const published = new Date(news.author.published_date);
  const formattedDate = published.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="card bg-base-100 shadow-lg max-w-full mx-auto flex flex-col lg:flex-row relative">
      {/* thumbnail */}
      <figure className="w-full lg:w-2/5">
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="object-cover h-48 sm:h-56 md:h-64 lg:h-full w-full"
        />
      </figure>

      <div className="card-body p-4 sm:p-6 flex flex-col gap-2 w-full lg:w-3/5">
        <h2 className="card-title text-lg sm:text-xl lg:text-2xl leading-tight">
          {news.title}
        </h2>

        <div className="w-full flex items-center justify-end gap-2">
          <button
            className="btn btn-circle btn-sm btn-outline hover:btn-primary"
            title="Share"
          >
            <IoShareSocialOutline className="text-lg" />
          </button>
          <button
            className="btn btn-circle btn-sm btn-outline hover:btn-primary"
            title="Bookmark"
          >
            <IoBookmarkOutline className="text-lg" />
          </button>
        </div>

        <p className="text-sm text-base-content/70 line-clamp-3 sm:line-clamp-4">
          {news.details}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={news.author.img} alt={news.author.name} />
              </div>
            </div>

            <div>
              <div className="font-medium text-sm sm:text-base">
                {news.author.name}
              </div>
              <div className="text-xs text-base-content/60 flex items-center gap-2">
                <IoTimeOutline /> <span>{formattedDate}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-sm text-base-content/70">
              <IoEyeOutline /> <span>{news.total_view.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end flex-wrap gap-2">
          <Link
            className="btn btn-outline btn-sm w-full sm:w-auto"
            to={`/news/${news.id}`}
          >
            Read more
          </Link>
          <button className="btn btn-primary btn-sm w-full sm:w-auto">
            Save
          </button>
        </div>
      </div>
    </article>
  );
}
