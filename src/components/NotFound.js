import React from 'react';

const NotFound = () => (
  <main className="flex min-h-screen items-center bg-bg px-6 text-ink">
    <div className="mx-auto w-full max-w-xl">
      <p className="text-[clamp(4.5rem,14vw,8rem)] font-extrabold leading-none tracking-[-0.04em]">
        4<span className="text-coral">0</span>4
      </p>
      <h1 className="mt-4 text-[1.6rem] font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-measure text-ink-2">The page you're looking for doesn't exist or has been moved.</p>
      <a
        href="./"
        className="mt-8 inline-block rounded-xl bg-coral px-5 py-3 font-semibold text-on-accent no-underline transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </a>
    </div>
  </main>
);

export default NotFound;
