import { Link } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';

function ErrorPage({ error }: ErrorComponentProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Something went wrong</h1>
        <p className="mt-2 text-sm text-gray-700">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mt-3 text-sm text-gray-600">
          <i>{error.message}</i>
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
