import { createFileRoute } from '@tanstack/react-router';

import Features from '../components/Features/Features';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <main>
      <header className="mb-16 text-center">
        <div>
          <h1 className="mb-3 text-7xl font-extrabold">Notia</h1>
          <h2 className="font-semibold">create markdown notes with ease.</h2>
        </div>
      </header>
      <Features />

      <ul className="mt-32 space-y-2 text-center">
        <li>Notia uses the CommonMark spec to format any Markdown that you write</li>
        <li>
          If you are unsure on how to write Markdown, please use{' '}
          <a
            href="https://commonmark.org/help/"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            this short guide
          </a>{' '}
          to get started
        </li>
        <li>Use the button in the bottom right of your screen to create a note</li>
      </ul>
    </main>
  );
}
