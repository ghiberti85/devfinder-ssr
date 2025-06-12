import Image from 'next/image';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

export default function UserCard({ user }: { user: GitHubUser }) {
  return (
    <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 dark:bg-white/5 dark:border-white/10 transition-all w-full max-w-sm">
      <Image
        src={user.avatar_url}
        alt={user.login}
        width={96}
        height={96}
        className="rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p>@{user.login}</p>
      <p>
        Repos: {user.public_repos} | Followers: {user.followers}
      </p>
      <a
        href={user.html_url}
        target="_blank"
        className="text-blue-500 underline mt-2 block"
      >
        View Profile
      </a>
    </div>
  );
}
