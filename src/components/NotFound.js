import React from 'react';

const NotFound = () => {

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0d14] text-white">
      {/* Subtle background glow field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 15% -10%, rgba(124, 58, 237, 0.38) 0%, transparent 55%),
            radial-gradient(ellipse 70% 45% at 90% 10%, rgba(196, 181, 253, 0.18) 0%, transparent 55%)
          `,
        }}
      />

      <main className="relative z-10 mx-auto w-full max-w-3xl px-5 min-h-screen text-center flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-5">
          {/* 404 in purple */}
          <div className="font-display text-transparent bg-clip-text bg-gradient-to-br from-violet-300 to-indigo-400 text-transparent text-[clamp(56px,7vw,92px)] font-extrabold leading-[0.95] drop-shadow-[0_20px_45px_rgba(124,58,237,0.12)]">
            404
          </div>

          {/* Page Not Found in white */}
          <h2 className="font-display text-white text-[clamp(26px,4.2vw,46px)] font-bold tracking-tight">
            Page Not Found
          </h2>

          {/* Diamond divider */}
          <div className="flex justify-center px-5" aria-hidden>
            <div className="flex items-center gap-3.5">
              <div className="h-px w-24 rounded-full bg-gradient-to-r from-transparent via-violet-400/40 to-violet-400/70 sm:w-32 md:w-40" />
              <div className="h-2 w-2 shrink-0 rotate-45 bg-gradient-to-br from-violet-300 to-indigo-400 shadow-[0_0_16px_rgba(167,139,250,0.55)]" />
              <div className="h-px w-24 rounded-full bg-gradient-to-l from-transparent via-violet-400/40 to-violet-400/70 sm:w-32 md:w-40" />
            </div>
          </div>

          <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved..
          </p>

          <a
            href="./"
            className="inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-3 font-mono text-sm text-gray-400 transition-all duration-200 hover:border-violet-400/35 hover:bg-violet-500/[0.08] hover:text-violet-200 hover:shadow-[0_0_24px_-8px_rgba(167,139,250,0.5)]"
            aria-label="Back to Home"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

