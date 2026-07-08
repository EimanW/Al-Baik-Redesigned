import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import Reveal from '../components/Reveal';
import CircularStamp from '../components/CircularStamp';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const milestones = [
  { t: 'tl_1974_t', b: 'tl_1974_b' },
  { t: 'tl_growth_t', b: 'tl_growth_b' },
  { t: 'tl_love_t', b: 'tl_love_b' },
  { t: 'tl_today_t', b: 'tl_today_b' },
] as const;

const YEAR_START = 1974;
const YEAR_END = 2026;

/* Pinned scroll scene: the year counts up as milestones swap. */
function PinnedTimeline() {
  const { t, lang } = useLang();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = wrapRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total)) : 0;
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const year = Math.round(YEAR_START + progress * (YEAR_END - YEAR_START));
  const idx = Math.min(milestones.length - 1, Math.floor(progress * milestones.length));
  const fmt = new Intl.NumberFormat(lang === 'ar' ? 'ar-SA' : 'en-US', { useGrouping: false });

  return (
    <div ref={wrapRef} className="relative h-[380vh]">
      <div className="bg-heat-deep sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden text-white">
        <span
          className="text-outline-cream pointer-events-none absolute top-6 select-none font-display text-[clamp(7rem,22vw,18rem)] font-extrabold leading-none opacity-30"
          aria-hidden="true"
        >
          {fmt.format(year)}
        </span>
        <p
          className="relative font-display text-[clamp(6rem,18vw,14rem)] font-extrabold leading-none tracking-tight text-baik-yellow tabular-nums"
          aria-live="off"
        >
          {fmt.format(year)}
        </p>

        <div className="relative mt-8 h-52 w-full max-w-2xl px-6 text-center md:h-44">
          {milestones.map((m, i) => (
            <div
              key={m.t}
              className={`absolute inset-0 transition-all duration-500 ${
                i === idx ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
              }`}
              aria-hidden={i !== idx}
            >
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-baik-cream md:text-4xl">{t(m.t)}</h2>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/90">{t(m.b)}</p>
            </div>
          ))}
        </div>

        {/* progress ruler */}
        <div className="absolute bottom-10 flex items-center gap-3" aria-hidden="true">
          {milestones.map((m, i) => (
            <span
              key={m.t}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === idx ? 'w-10 bg-baik-yellow' : 'w-2.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* Reduced-motion fallback: the classic vertical timeline. */
function StaticTimeline() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <ol className="relative border-s-4 border-baik-yellow">
        {milestones.map((m) => (
          <li key={m.t} className="ms-8 pb-12 last:pb-0">
            <span className="absolute -start-[14px] grid h-6 w-6 place-items-center rounded-full bg-baik-red ring-4 ring-baik-cream" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-baik-yellow" />
            </span>
            <h2 className="font-display text-2xl font-extrabold text-baik-red">{t(m.t)}</h2>
            <p className="mt-2 leading-relaxed text-baik-ink/85">{t(m.b)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Story() {
  const { t, lang } = useLang();
  const reduced = usePrefersReducedMotion();

  return (
    <main>
      <section className="bg-heat relative overflow-hidden pb-20 pt-16 text-white">
        <span
          className="text-outline-cream pointer-events-none absolute -bottom-6 end-0 select-none font-display text-[clamp(6rem,18vw,14rem)] font-extrabold leading-none opacity-40"
          aria-hidden="true"
        >
          {lang === 'ar' ? '1974' : '١٩٧٤'}
        </span>
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <h1 className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-baik-yellow md:text-8xl">
              {t('storyp_title')}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white">{t('storyp_sub')}</p>
          </Reveal>
        </div>
      </section>

      {reduced ? <StaticTimeline /> : <PinnedTimeline />}

      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <div className="relative border-2 border-dashed border-baik-ink/20 bg-baik-sand p-10 md:p-14">
            <CircularStamp
              text={'YOUR VOICE • صوتك مسموع • SINCE 1974 • '}
              className="absolute -top-10 end-6 hidden h-24 w-24 rotate-6 text-baik-red md:grid"
            />
            <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-baik-red md:text-5xl">
              {t('suggestion_t')}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-baik-ink/85">{t('suggestion_b')}</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
