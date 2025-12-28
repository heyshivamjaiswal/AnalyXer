import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileInfo from "../components/ProfileCard";

import RepoSection from "../components/RepoSection";

type ApiResponse = {
  profile: any;
  repos: any[];
};

function Analyze() {
  const { username } = useParams();
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/user/${username}`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div className="p-10 text-white">Loading...</div>;
  if (!data) return <div className="p-10 text-white">No data</div>;

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <ProfileInfo profile={data.profile} />
      <RepoSection repos={data.repos} />
    </div>
  );
}

export default Analyze;
