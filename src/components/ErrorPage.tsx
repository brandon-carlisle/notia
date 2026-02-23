import { Link } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';

function ErrorPage({ error }: ErrorComponentProps) {
  return (
    <div className="error-page">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
        <Link to="/">Go Home.</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
