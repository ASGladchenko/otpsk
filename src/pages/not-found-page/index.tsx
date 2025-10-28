import { Button } from '@shared/ui';

import './styles.scss';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>Page Not Found</h1>

      <Button as="link" to="/">
        Go to Home
      </Button>
    </div>
  );
};
