import { GetStaticPaths, GetStaticProps } from 'next';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

export default function UserPage({ user }: { user: GitHubUser }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">User Profile (ISR)</h1>
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p>@{user.login}</p>
      <p>
        Repos: {user.public_repos} | Followers: {user.followers}
      </p>
      <a
        href={user.html_url}
        target="_blank"
        className="text-blue-500 underline mt-2"
      >
        View GitHub Profile
      </a>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { username: 'octocat' } }], // página gerada inicialmente
    fallback: 'blocking', // outras páginas serão geradas sob demanda
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const username = context.params?.username;

  if (!username || Array.isArray(username)) {
    return { notFound: true };
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) return { notFound: true };

    const user = await res.json();
    return {
      props: { user },
      revalidate: 60,
    };
  } catch {
    return { notFound: true };
  }
};
