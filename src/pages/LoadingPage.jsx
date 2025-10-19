export default function LoadingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content">
      <div className="flex flex-col items-center gap-4">
        <div className="radial-progress animate-spin text-primary border-4 border-t-primary border-b-base-300 w-24 h-24 rounded-full"></div>
        <h1 className="text-2xl sm:text-3xl font-bold">Loading...</h1>
        <p className="text-base-content/70 text-center max-w-xs sm:max-w-sm">
          Please wait while we fetch your content. This won’t take long!
        </p>
      </div>

      <div className="absolute bottom-12 flex gap-2 animate-pulse">
        <span className="w-3 h-3 bg-primary rounded-full"></span>
        <span className="w-3 h-3 bg-secondary rounded-full"></span>
        <span className="w-3 h-3 bg-accent rounded-full"></span>
      </div>
    </div>
  );
}
