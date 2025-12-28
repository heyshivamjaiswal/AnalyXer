type Props = {
  profile: {
    name: string;
    avatar_url: string;
    bio?: string;
    location?: string;
    followers: number;
    following: number;
    twitter_username?: string;
    html_url: string;
  };
};

const ProfileInfo = ({ profile }: Props) => {
  if (!profile) return null;
  return (
    <div className="w-full bg-black/70 py-10 flex flex-col items-center">
      <a href={profile.html_url} target="_blank" rel="noreferrer">
        <img src={profile.avatar_url} className="w-24 h-24 rounded-full mb-3" />
      </a>

      <h2 className="text-2xl font-bold">{profile.name}</h2>

      <div className="flex gap-6 text-sm pt-3">
        <span>Followers: {profile.followers}</span>
        <span>Following: {profile.following}</span>
      </div>

      {profile.bio && (
        <p className="pt-4 max-w-xl text-center text-sm text-white/80">
          {profile.bio}
        </p>
      )}

      {profile.twitter_username && (
        <a
          href={`https://x.com/${profile.twitter_username}`}
          target="_blank"
          rel="noreferrer"
          className="pt-3 text-blue-400 text-sm"
        >
          @{profile.twitter_username}
        </a>
      )}

      {profile.location && (
        <p className="pt-3 text-xs text-white/70">{profile.location}</p>
      )}
    </div>
  );
};

export default ProfileInfo;
