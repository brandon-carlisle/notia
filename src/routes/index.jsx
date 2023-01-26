import Features from '../components/Features/Features';

function Index() {
  return (
    <main>
      <header className="mb-16 text-center">
        <div>
          <h1 className="font-extrabold text-7xl mb-3">Notia</h1>
          <h2 className="font-semibold">create markdown notes with ease.</h2>
        </div>
      </header>
      <Features />

      <ul className="list-disc mt-16 list-inside">
        <li>
          Notia uses the CommonMark spec to format any Markdown that you write
        </li>
        <li>
          If you are unsure on how to write Markdown, please use{' '}
          <a
            href="https://commonmark.org/help/"
            className="underline"
            target="_blank"
          >
            this short guide
          </a>{' '}
          to get started
        </li>
        <li>
          Use the button in the bottom right of your screen to create a note
        </li>
      </ul>
    </main>
  );
}

export default Index;
