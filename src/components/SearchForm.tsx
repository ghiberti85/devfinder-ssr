interface Props {
  username: string;
  setUsername: (value: string) => void;
}

export default function SearchForm({ username, setUsername }: Props) {
  return (
    <form
      method="GET"
      className="mb-8 flex flex-col sm:flex-row gap-4 items-center"
    >
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="border px-4 py-2 rounded w-72"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
      >
        Search
      </button>
    </form>
  );
}
