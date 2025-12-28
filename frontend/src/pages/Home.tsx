import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import Header from "../components/Header";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!username.trim()) return;
    navigate(`/analyze/${username.trim()}`);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img src={bg} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-screen flex-col text-white">
        <Header />

        <main className="flex flex-1 flex-col items-center px-6 text-center">
          <div className="max-w-2xl italic text-white/90 pt-20">
            “Analyze your GitHub profile & repositories.”
          </div>

          <div className="flex flex-col gap-6 pt-28 w-full max-w-md">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="w-full h-11 rounded-2xl px-4 bg-white text-black outline-none"
            />
            <button
              onClick={handleSearch}
              className="h-12 rounded-3xl border border-white"
            >
              Search
            </button>
          </div>
        </main>

        <footer className="py-4 text-center text-xs opacity-70">
          Built for educational purposes
        </footer>
      </div>
    </div>
  );
}

export default Home;
