function Header() {
  return (
    <div className="relative z-20 flex flex-col items-center py-3 text-white">
      <header className="flex flex-col items-center py-4">
        <h1
          className="text-4xl font-bold pb-5"
          style={{ textShadow: "0 0 12px rgba(255,255,255,0.9)" }}
        >
          AnalyXer
        </h1>
        <h2 className="text-sm tracking-wide opacity-90">
          Analyze Any Twitter Profile
        </h2>
      </header>
    </div>
  );
}
export default Header;
