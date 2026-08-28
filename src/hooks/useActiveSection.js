import { useLayoutEffect, useState } from 'react';

// Which section owns the viewport: the last one whose top has passed 40% of the window height.
// Layout effect so a mid-page landing resolves its section before the first paint.
export default function useActiveSection(ids) {
  const [active, setActive] = useState('hero');

  useLayoutEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.scrollY + window.innerHeight * 0.4;
      let current = 'hero';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
