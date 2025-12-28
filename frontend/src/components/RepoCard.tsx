type Props = {
  repo: {
    name: string;
    description?: string;
    html_url: string;
    topics?: string[];
  };
};

const RepoCard = ({ repo }: Props) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl bg-neutral-800 p-5 hover:scale-[1.02] transition"
    >
      <h4 className="font-semibold text-lg">{repo.name}</h4>

      {repo.description && (
        <p className="text-sm text-white/70 pt-2 line-clamp-2">
          {repo.description}
        </p>
      )}

      {repo.topics?.length ? (
        <div className="flex flex-wrap gap-2 pt-3">
          {repo.topics.map((topic) => (
            <span key={topic} className="text-xs bg-black/50 px-2 py-1 rounded">
              {topic}
            </span>
          ))}
        </div>
      ) : null}
    </a>
  );
};

export default RepoCard;
