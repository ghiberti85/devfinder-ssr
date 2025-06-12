import Head from 'next/head';
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';

import ThemeToggle from '../components/ThemeToggle';
import SearchForm from '../components/SearchForm';
import UserCard from '../components/UserCard';

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

      <main className="relative min-h-screen flex flex-col items-center justify-center p-6">
        {/* Botão de Dark Mode no canto superior direito */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <ThemeToggle />
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">
          Find a GitHub User (SSR)
        </h1>

        <SearchForm username={username} setUsername={setUsername} />

        {user ? (
          <UserCard user={user} />
        ) : (
          <p className="text-gray-500">No user loaded</p>
        )}
      </main>
    </>
  );
}

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
