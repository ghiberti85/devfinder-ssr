import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

export default function Home({ user }: { user?: GitHubUser }) {
  const [username, setUsername] = useState('');

  return (
    <>
      <Head>
        <title>DevFinder SSR</title>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Find a GitHub User (SSR)</h1>

        <form method="GET" className="mb-8 flex gap-4">
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="border px-4 py-2 rounded w-72"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </form>

        {user ? (
          <div className="text-center">
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
        ) : (
          <p className="text-gray-500">No user loaded</p>
        )}
      </main>
    </>
  );
}

import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const username = context.query.username;

  if (!username) {
    return { props: {} };
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      return { props: {} };
    }

    const user = await res.json();
    return { props: { user } };
  } catch {
    return { props: {} };
  }
}
