import RepoCard from "./RepoCard";

type Props = {
  repos: any[];
};

const RepoSection = ({ repos }: Props) => {
  return (
    <div className="px-8 py-10">
      <h3 className="text-xl font-semibold mb-6">Repositories</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoSection;
