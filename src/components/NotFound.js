import React from 'react';

const NotFound = () => (
  <main className="flex min-h-screen items-center bg-sheet px-6 text-ink">
    <div className="mx-auto w-full max-w-xl border-t border-ink pt-6">
      <p className="font-cad text-[clamp(4rem,12vw,7rem)] leading-none tracking-wide">404</p>
      <h1 className="mt-4 font-cad text-[1.6rem] uppercase tracking-wide">Page not found</h1>
      <p className="mt-3 max-w-measure text-ink-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="./" className="mt-8 inline-block border border-ink px-4 py-2.5 text-ink no-underline hover:bg-ink hover:text-sheet">
        Back to home
      </a>
    </div>
  </main>
);

export default NotFound;
