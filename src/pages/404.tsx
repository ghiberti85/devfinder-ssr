import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Usuário não encontrado ou página inexistente.
      </p>
      <Link href="/">
        <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Voltar para a Home
        </a>
      </Link>
    </main>
  );
}
