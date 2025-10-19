import { useNavigate } from "react-router";
import {
  IoEyeOutline,
  IoTimeOutline,
  IoShareSocialOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

export default function NewsDetailsCard({ news }) {
  const navigate = useNavigate();
  const published = new Date(news.author.published_date);
  const formattedDate = published.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const goBack = () => navigate(-1);

  return (
    <article className="card bg-base-100 shadow-xl w-full mx-auto">
      <figure className="relative">
        <img
          src={news.image_url || news.thumbnail_url}
          alt={news.title}
          className="object-cover w-full h-64 sm:h-80 md:h-[28rem]"
        />
        <div className="absolute top-4 right-4 flex gap-2">
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
      </figure>

      <div className="card-body p-6 flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
          {news.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-base-200 pb-3">
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

          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <div className="flex items-center gap-2 text-sm text-base-content/70">
              <IoEyeOutline /> <span>{news.total_view.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="prose max-w-none prose-sm sm:prose-base">
          <p className="leading-relaxed text-base-content/80">{news.details}</p>
        </div>

        {news.tags && news.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-outline text-sm px-3 py-1 cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="card-actions justify-between mt-6">
          <button to="/" className="btn btn-outline btn-sm" onClick={goBack}>
            ← Back to News
          </button>
          <button className="btn btn-primary btn-sm">Bookmark</button>
        </div>
      </div>
    </article>
  );
}
