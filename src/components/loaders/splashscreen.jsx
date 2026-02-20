function SplashScreen() {
  return (
    <div className="h-screen flex items-center justify-center bg-[var(--background)] animate-pulse">
      <div className="flex flex-col items-center gap-2 ">
        <div className="  w-16 h-16 bg-[var(--logoColor)] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8  md:h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
            />
          </svg>
        </div>
        <p className="font-bold text-2xl">CraveBite</p>
      </div>
    </div>
  );
}
export default SplashScreen;
