import { Link } from 'react-router-dom';
import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import Reveal from '../components/Reveal';
import FoodImage from '../components/FoodImage';
import AppBadges from '../components/AppBadges';
import CircularStamp from '../components/CircularStamp';
import Ticker from '../components/Ticker';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { menu } from '../data/menu';

/* Parallax depth helper: a layer drifts with the mouse (--mx/--my) and scroll (--sy). */
const depth = (dx: number, dy: number, sy = 0): CSSProperties => ({
  transform: `translate3d(calc(var(--mx, 0) * ${dx}px), calc(var(--my, 0) * ${dy}px + var(--sy, 0) * ${sy}px), 0)`,
});

function useHeroParallax(ref: RefObject<HTMLElement>, disabled: boolean) {
  useEffect(() => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let mx = 0;
    let my = 0;
    let sy = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty('--mx', mx.toFixed(4));
      el.style.setProperty('--my', my.toFixed(4));
      el.style.setProperty('--sy', sy.toFixed(4));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      schedule();
    };
    const onScroll = () => {
      sy = Math.min(1, window.scrollY / window.innerHeight);
      schedule();
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [disabled, ref]);
}

type Particle = { kind: 'chili' | 'sesame' | 'steam'; top: string; start: string; delay: number; dx: number; dy: number };

/* Ambient kitchen dust: chili flakes, sesame seeds, steam wisps. All transform/opacity only. */
const PARTICLES: Particle[] = [
  { kind: 'chili', top: '16%', start: '6%', delay: 0, dx: 30, dy: 18 },
  { kind: 'sesame', top: '24%', start: '14%', delay: 1.2, dx: 18, dy: 10 },
  { kind: 'chili', top: '62%', start: '9%', delay: 2.1, dx: 44, dy: 26 },
  { kind: 'sesame', top: '72%', start: '22%', delay: 0.6, dx: 24, dy: 14 },
  { kind: 'chili', top: '20%', start: '78%', delay: 1.6, dx: 36, dy: 22 },
  { kind: 'sesame', top: '34%', start: '88%', delay: 0.3, dx: 16, dy: 9 },
  { kind: 'chili', top: '58%', start: '84%', delay: 2.8, dx: 48, dy: 30 },
  { kind: 'sesame', top: '80%', start: '68%', delay: 1.9, dx: 20, dy: 12 },
  { kind: 'sesame', top: '12%', start: '46%', delay: 2.4, dx: 14, dy: 8 },
  { kind: 'chili', top: '44%', start: '94%', delay: 0.9, dx: 40, dy: 24 },
  { kind: 'steam', top: '54%', start: '28%', delay: 0, dx: 10, dy: 6 },
  { kind: 'steam', top: '50%', start: '56%', delay: 2.2, dx: 12, dy: 7 },
  { kind: 'steam', top: '62%', start: '76%', delay: 4.1, dx: 8, dy: 5 },
];

function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span key={i} className="absolute" style={{ top: p.top, insetInlineStart: p.start, ...depth(p.dx, p.dy) }}>
          {p.kind === 'chili' && (
            <span
              className="block h-3 w-1.5 rotate-45 animate-drift rounded-full bg-gradient-to-b from-baik-orange to-baik-red"
              style={{ animationDelay: `${p.delay}s` }}
            />
          )}
          {p.kind === 'sesame' && (
            <span
              className="block h-2 w-1.5 rotate-12 animate-drift rounded-full bg-baik-cream/70"
              style={{ animationDelay: `${p.delay}s` }}
            />
          )}
          {p.kind === 'steam' && (
            <span
              className="block h-24 w-9 animate-steam rounded-full bg-white/10 blur-lg"
              style={{ animationDelay: `${p.delay}s` }}
            />
          )}
        </span>
      ))}
    </div>
  );
}

function Hero() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const [videoOk, setVideoOk] = useState(true);
  useHeroParallax(ref, reduced);

  const echo = lang === 'ar' ? 'AL BAIK' : 'البيك';
  const tickerItems = menu.slice(0, 12).flatMap((m) => [m.en, m.ar]);

  return (
    <section ref={ref} className="bg-heat relative flex min-h-[94svh] flex-col overflow-hidden text-white">
      {/* optional fullscreen video: drop /public/hero.mp4 in and it appears */}
      {videoOk && (
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
      )}
      {videoOk && (
        <div className="absolute inset-0 bg-gradient-to-br from-baik-crimson/90 via-baik-red/70 to-baik-crimson/90" aria-hidden="true" />
      )}

      {/* depth plane 1 — giant outlined brand word in the opposite script */}
      <div className="pointer-events-none absolute inset-0" style={depth(14, 8, -40)} aria-hidden="true">
        <span className="text-outline-cream absolute -end-6 top-10 select-none whitespace-nowrap font-display text-[24vw] font-extrabold leading-none opacity-60 md:top-2">
          {lang === 'ar' ? 'ALBAIK' : 'البيك'}
        </span>
      </div>

      {/* depth plane 2 — ambient particles */}
      <HeroParticles />

      {/* depth plane 3 — rotating stamp */}
      <div
        className="pointer-events-none absolute bottom-40 end-4 z-10 animate-hero-in [animation-delay:600ms] md:bottom-48 md:end-14"
        style={depth(-34, -22)}
        aria-hidden="true"
      >
        <CircularStamp
          text={'EST. 1974 • JEDDAH • السعودية • ALBAIK • '}
          className="h-28 w-28 text-baik-cream drop-shadow-lg md:h-44 md:w-44"
        >
          <span className="font-display text-xl font-extrabold text-baik-yellow md:text-3xl">١٩٧٤</span>
        </CircularStamp>
      </div>

      {/* content plane */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-16 pt-20 md:pt-24">
        <p className="animate-hero-in inline-flex w-fit items-center gap-2 border-2 border-baik-yellow/70 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-widest text-baik-yellow [animation-delay:60ms]">
          <span aria-hidden="true">★</span> {t('hero_eyebrow')}
        </p>
        <h1 className="relative mt-8" style={depth(-18, -10, -20)}>
          <span
            className="text-outline-cream pointer-events-none absolute -top-[0.45em] start-[0.03em] select-none whitespace-nowrap font-display text-[clamp(4.5rem,15vw,13rem)] font-extrabold leading-[0.82]"
            aria-hidden="true"
          >
            {echo}
          </span>
          <span className="relative block animate-hero-in font-display text-[clamp(4rem,13vw,11.5rem)] font-extrabold leading-[0.87] tracking-tight text-baik-yellow [animation-delay:140ms]">
            {t('hero_title_1')}
          </span>
          <span className="relative block animate-hero-in font-display text-[clamp(4rem,13vw,11.5rem)] font-extrabold leading-[0.87] tracking-tight text-white [animation-delay:260ms]">
            {t('hero_title_2')}
          </span>
        </h1>
        <p className="mt-7 max-w-xl animate-hero-in text-lg text-white [animation-delay:380ms]">{t('hero_sub')}</p>
        <div className="mt-9 flex flex-wrap gap-4 animate-hero-in [animation-delay:480ms]">
          <Link
            to="/menu"
            className="btn-spring rounded-full bg-baik-yellow px-8 py-3.5 font-display text-lg font-extrabold text-baik-ink shadow-lg"
          >
            {t('hero_cta_menu')}
          </Link>
          <Link
            to="/branches"
            className="btn-spring rounded-full border-2 border-white/80 px-8 py-3.5 font-display text-lg font-bold text-white hover:bg-baik-cream hover:text-baik-red"
          >
            {t('hero_cta_branches')}
          </Link>
        </div>
      </div>

      {/* marquee ticker at the hero's base */}
      <div className="relative z-20 border-t-2 border-white/15 bg-baik-maroon/70 py-3 backdrop-blur-sm">
        <Ticker items={tickerItems} className="text-baik-cream" />
      </div>
      <div className="scallop relative z-20 h-8 w-full bg-baik-cream" aria-hidden="true" />
    </section>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const featured = menu.filter((m) => m.featured);

  return (
    <main>
      <Hero />

      {/* STORY STRIP — cream, oversized 1974 bleeding off */}
      <section className="relative overflow-hidden py-24">
        <span
          className="text-outline-red pointer-events-none absolute -top-8 end-[-4%] select-none font-display text-[clamp(9rem,24vw,20rem)] font-extrabold leading-none"
          aria-hidden="true"
        >
          1974
        </span>
        <span
          className="eyebrow-v pointer-events-none absolute start-3 top-28 hidden select-none font-display text-xs font-bold uppercase tracking-[0.4em] text-baik-red/60 lg:block"
          aria-hidden="true"
        >
          {lang === 'ar' ? 'جدة — المملكة العربية السعودية' : 'JEDDAH — SAUDI ARABIA'}
        </span>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-baik-ember">{t('story_eyebrow')}</p>
              <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-baik-red md:text-7xl">
                {t('story_title')}
              </h2>
              <p className="mt-6 max-w-prose leading-relaxed text-baik-ink/85">{t('story_body')}</p>
              <Link
                to="/story"
                className="btn-spring mt-7 inline-block bg-baik-red px-7 py-3 font-display text-lg font-bold text-white shadow-md"
              >
                {t('story_link')}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="rotate-1 shadow-2xl">
                <FoodImage id="story-hero" label={lang === 'ar' ? 'ب' : 'B'} className="aspect-[4/3]" />
              </div>
              <CircularStamp
                text={'SINCE 1974 • JEDDAH • منذ ١٩٧٤ • جدة • '}
                className="absolute -bottom-8 -start-6 h-28 w-28 -rotate-12 rounded-full bg-baik-yellow text-baik-ink shadow-xl md:h-36 md:w-36"
                spin={false}
              >
                <span className="font-display text-2xl font-extrabold md:text-3xl">1974</span>
              </CircularStamp>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PURPOSE — deep heat with diagonal edges */}
      <section className="bg-heat-deep relative overflow-hidden text-white">
        <div className="edge-diag-t absolute inset-x-0 top-0 h-14 bg-baik-cream" aria-hidden="true" />
        <span
          className="text-outline-cream pointer-events-none absolute -end-10 top-1/2 -translate-y-1/2 rotate-6 select-none font-display text-[clamp(10rem,26vw,24rem)] font-extrabold leading-none opacity-50"
          aria-hidden="true"
        >
          {lang === 'ar' ? 'AMANA' : 'أمانة'}
        </span>
        <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-32">
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-baik-cream/80">{t('purpose_eyebrow')}</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-baik-yellow md:text-7xl">
              {t('purpose_title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white md:text-xl">{t('purpose_body')}</p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal delay={100}>
              <div className="h-full -rotate-1 bg-baik-cream p-8 text-baik-ink shadow-xl md:p-10">
                <h3 className="font-display text-3xl font-extrabold tracking-tight text-baik-red">{t('vision_title')}</h3>
                <p className="mt-3 text-lg leading-relaxed text-baik-ink/85">{t('vision_body')}</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative h-full rotate-1 bg-baik-yellow p-8 text-baik-ink shadow-xl md:p-10">
                <h3 className="font-display text-3xl font-extrabold tracking-tight">{t('mission_title')}</h3>
                <p className="mt-3 text-lg font-semibold leading-relaxed">{t('mission_body')}</p>
                <CircularStamp
                  text={'100% CUSTOMER LOVE • حب العملاء • '}
                  className="absolute -top-10 end-4 h-24 w-24 rotate-12 text-baik-cream md:-top-12 md:h-28 md:w-28"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="edge-diag-b absolute inset-x-0 bottom-0 h-14 bg-baik-cream" aria-hidden="true" />
      </section>

      {/* VALUES — cream, sticker badges */}
      <section className="relative mx-auto max-w-6xl overflow-visible px-4 py-24">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-baik-ember">{t('values_eyebrow')}</p>
          <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-baik-red md:text-7xl">
            {t('values_title')}
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-baik-ink/85">{t('values_body')}</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {(['value_1', 'value_2', 'value_3', 'value_4'] as const).map((k, i) => {
            const rot = [-3, 2, -2, 3][i];
            return (
              <Reveal key={k} delay={i * 100}>
                <div
                  className="relative grid aspect-square place-items-center rounded-full bg-baik-yellow p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105"
                  style={{ transform: `rotate(${rot}deg)` }}
                >
                  <span className="pointer-events-none absolute inset-2 rounded-full border-2 border-dashed border-baik-ink/30" aria-hidden="true" />
                  <span className="font-display text-xl font-extrabold leading-tight text-baik-ink md:text-2xl">
                    <span className="mb-1 block text-base text-baik-red" aria-hidden="true">★</span>
                    {t(k)}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SIGNATURE ITEMS — heat */}
      <section className="bg-heat relative overflow-hidden text-white">
        <div className="scallop-top absolute inset-x-0 top-0 h-8 bg-baik-cream" aria-hidden="true" />
        <span
          className="text-outline-cream pointer-events-none absolute -start-6 bottom-6 select-none whitespace-nowrap font-display text-[clamp(6rem,15vw,12rem)] font-extrabold leading-none opacity-40"
          aria-hidden="true"
        >
          {lang === 'ar' ? 'البيك' : 'AL BAIK'}
        </span>
        <div className="relative mx-auto max-w-6xl px-4 py-28">
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-baik-cream/80">{t('sig_eyebrow')}</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-baik-yellow md:text-7xl">
              {t('sig_title')}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/90">{t('sig_body')}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {featured.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <Link to="/menu" className="glow-warm group block overflow-hidden bg-baik-cream text-baik-ink shadow-md">
                  <div className="relative overflow-hidden">
                    <FoodImage
                      id={item.id}
                      label={lang === 'ar' ? item.ar : item.en}
                      className="aspect-square transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="cal-flip absolute bottom-2 start-2 bg-baik-ink px-2.5 py-1 font-display text-xs font-bold text-baik-yellow">
                      {item.calories} {t('menu_cal')}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="font-display font-bold leading-snug">{lang === 'ar' ? item.ar : item.en}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                to="/menu"
                className="btn-spring inline-block rounded-full bg-baik-yellow px-9 py-3.5 font-display text-lg font-extrabold text-baik-ink shadow-lg"
              >
                {t('sig_cta')}
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="scallop relative h-8 w-full bg-baik-cream" aria-hidden="true" />
      </section>

      {/* APP — cream with a heat coupon card */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <Reveal>
          <div className="bg-heat scallop relative overflow-hidden p-10 pb-14 text-white md:p-14 md:pb-16">
            <span
              className="text-outline-cream pointer-events-none absolute -bottom-4 end-6 select-none font-display text-[clamp(4rem,10vw,8rem)] font-extrabold leading-none opacity-40"
              aria-hidden="true"
            >
              APP
            </span>
            <CircularStamp
              text={'ORDER AHEAD • اطلب مسبقًا • SKIP THE QUEUE • '}
              className="absolute end-6 top-6 hidden h-28 w-28 text-baik-cream md:grid"
            />
            <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-baik-cream/80">{t('app_eyebrow')}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-baik-yellow md:text-6xl">
              {t('app_title')}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white">{t('app_body')}</p>
            <div className="relative mt-9">
              <AppBadges light />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
