import Marquee from "react-fast-marquee";

export default function LatestNews() {
  return (
    <section className="w-11/12 mx-auto my-4 flex items-center gap-2 bg-base-200 p-2">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={60} className="flex gap-5">
        <p className="font-bold">
          🚀 Exciting news: Our new app update rolls out today with improved
          performance and dark mode!
        </p>
        <p className="font-bold">
          🌱 Local community garden hosts weekend workshops for sustainable
          living enthusiasts.
        </p>
        <p className="font-bold">
          🎮 Gaming alert: The top 10 indie games you shouldn't miss this month
          are now live on the store.
        </p>
        <p className="font-bold">
          📰 Breaking: City council approves new cycling lanes to improve urban
          mobility and safety.
        </p>
      </Marquee>
    </section>
  );
}
