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
    </main>
  );
}

export default Index;
