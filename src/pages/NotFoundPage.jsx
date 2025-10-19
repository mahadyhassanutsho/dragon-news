import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content px-4">
      <h1 className="text-7xl sm:text-9xl font-extrabold text-primary mb-6">
        404
      </h1>
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-base-content/70 text-center max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved. Don’t
        worry, you can find your way back.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}
