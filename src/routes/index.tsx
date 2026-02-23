import { createFileRoute } from '@tanstack/react-router';

import Features from '../components/features';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="mx-auto w-full max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-5xl font-extrabold tracking-tight md:text-6xl">Notia</h1>
          <h2 className="text-base font-medium text-gray-700">create markdown notes with ease.</h2>
        </header>

        <Features />

        <ul className="mx-auto mt-12 max-w-3xl space-y-2 text-center text-sm leading-6 text-gray-700">
          <li>Notia uses the GitHub Flavored Markdown spec to format any Markdown that you write</li>
        <li>
          If you are unsure on how to write Markdown, please use{' '}
          <a
            href="https://github.github.com/gfm/"
            className="rounded-sm underline decoration-gray-500 underline-offset-2 transition-colors duration-150 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            this short guide
          </a>{' '}
          to get started
        </li>
          <li>Use the button in the bottom right of your screen to create a note</li>
        </ul>
      </section>
    </main>
  );
}
