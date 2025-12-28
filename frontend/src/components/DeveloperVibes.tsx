type Props = {
  repos: any[];
  profile: any;
};

function getVibes(repos: any[], profile: any) {
  const vibes: string[] = [];

  if (repos.length > 20) vibes.push("High Output");
  if (repos.some((l) => l.fork)) vibes.push("Open Source Friendly");
  if (repos.some((l) => l.updated_at?.includes("T02"))) vibes.push("Night Owl");
  if (profile.followers > profile.following) vibes.push("Quiet Builder ");
  if (vibes.length === 0) vibes.push("Focused Developer");

  return vibes;
}

const DeveloperVibes = ({ repos, profile }: Props) => {
  const vibes = getVibes(repos, profile);

  return (
    <div className="mt-12">
      <h2 className="text-xs uppercase tracking-widest text-white/50 mb-4">
        Developer Vibes
      </h2>

      <div className="flex flex-wrap gap-3">
        {vibes.map((vibe) => (
          <span
            key={vibe}
            className="px-4 py-2 rounded-full bg-white/10 text-sm"
          >
            {vibe}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DeveloperVibes;
