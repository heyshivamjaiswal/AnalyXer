import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

type ParsedResult = {
  character: string;
  trait: string;
  why: string;
  analysis: string;
};
  
function parseAIText(text?: string): ParsedResult {
  if (!text) {
    return {
      character: "Unknown",
      trait: "Unavailable",
      why: "Reason unavailable.",
      analysis:
        "Something went wrong while generating the analysis. Please try again.",
    };
  }

  const lines = text.split("\n").filter(Boolean);

  const getValue = (key: string) =>
    lines
      .find((line) => line.startsWith(key))
      ?.replace(key, "")
      .trim() || "";

  return {
    character: getValue("Character:"),
    trait: getValue("Trait:"),
    why: getValue("Why:"),
    analysis: getValue("Analysis:"),
  };
}

const AlterEgo = () => {
  const { username } = useParams();
  const [result, setResult] = useState<ParsedResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) return;

    const fetchAlterEgo = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/groq/${username}`);

        const json = await res.json();
        console.log("Groq API response:", json);

        if (!json?.analysis) {
          throw new Error("Invalid AI response");
        }

        setResult(parseAIText(json.analysis));
      } catch (err) {
        console.error(err);
        setError("Failed to generate alter ego. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlterEgo();
  }, [username]);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />

      <div className="max-w-3xl mx-auto px-6 pt-24">
        {loading && (
          <p className="text-center text-white/70 animate-pulse">
            Analyzing your digital psyche...
          </p>
        )}

        {!loading && error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {!loading && result && (
          <>
            <h1 className="text-3xl font-bold text-center mb-12">
              Your Alter Ego
            </h1>

            <div className="space-y-10">
              {/* Character */}
              <section>
                <h2 className="text-xs uppercase tracking-widest text-white/50">
                  Character
                </h2>
                <p className="text-3xl font-semibold mt-2">
                  {result.character}
                </p>
              </section>

              {/* Trait */}
              <section>
                <h2 className="text-xs uppercase tracking-widest text-white/50">
                  Traits
                </h2>
                <p className="italic text-white/80 mt-2">{result.trait}</p>
              </section>

              {/* Why */}
              <section>
                <h2 className="text-xs uppercase tracking-widest text-white/50">
                  Why this character?
                </h2>
                <p className="text-white/80 mt-2">{result.why}</p>
              </section>

              {/* Analysis */}
              <section>
                <h2 className="text-xs uppercase tracking-widest text-white/50">
                  Analysis
                </h2>
                <p className="leading-relaxed text-white/90 mt-4">
                  {result.analysis}
                </p>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AlterEgo;
