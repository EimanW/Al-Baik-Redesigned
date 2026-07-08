import { useLang } from '../i18n/LanguageContext';
import Reveal from '../components/Reveal';

const rows = [
  { t: 'cmp_1_t', now: 'cmp_1_now', concept: 'cmp_1_new' },
  { t: 'cmp_2_t', now: 'cmp_2_now', concept: 'cmp_2_new' },
  { t: 'cmp_3_t', now: 'cmp_3_now', concept: 'cmp_3_new' },
  { t: 'cmp_4_t', now: 'cmp_4_now', concept: 'cmp_4_new' },
  { t: 'cmp_5_t', now: 'cmp_5_now', concept: 'cmp_5_new' },
] as const;

export default function Compare() {
  const { t, lang } = useLang();

  return (
    <main className="relative mx-auto max-w-6xl overflow-x-clip px-4 py-14">
      <span
        className="text-outline-red pointer-events-none absolute -top-2 end-0 select-none font-display text-[clamp(4rem,12vw,9rem)] font-extrabold leading-none"
        aria-hidden="true"
      >
        {lang === 'ar' ? 'VS' : 'ضد'}
      </span>
      <Reveal>
        <h1 className="relative font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-baik-red md:text-7xl">
          {t('compare_title')}
        </h1>
        <p className="relative mt-4 max-w-2xl text-baik-ink/80">{t('compare_sub')}</p>
      </Reveal>

      <div className="mt-10 space-y-8">
        {rows.map((row, i) => (
          <Reveal key={row.t} delay={i * 80}>
            <div className="glow-warm overflow-hidden bg-white shadow-sm">
              <h2 className="bg-heat px-6 py-3.5 font-display text-xl font-extrabold tracking-tight text-baik-yellow">
                {t(row.t)}
              </h2>
              <div className="grid md:grid-cols-2">
                <div className="border-b-2 border-dashed border-baik-ink/15 p-6 md:border-b-0 md:border-e-2">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-baik-ink/50">{t('cmp_now')}</p>
                  <p className="mt-2 text-baik-ink/80">{t(row.now)}</p>
                </div>
                <div className="bg-baik-sand/60 p-6">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-baik-ember">{t('cmp_concept')}</p>
                  <p className="mt-2 font-medium text-baik-ink">{t(row.concept)}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
