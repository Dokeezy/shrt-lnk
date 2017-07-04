import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Hmm, there's no page like that here.</p>
        <Link to="/" className="button button--link">GO BACK TO HOME</Link>
      </div>
    </div>
  );
};
