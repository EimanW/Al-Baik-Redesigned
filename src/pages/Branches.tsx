import { useMemo, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { branches, cities, cityLabels, Branch } from '../data/branches';
import Reveal from '../components/Reveal';

export default function Branches() {
  const { t, lang } = useLang();
  const [city, setCity] = useState<Branch['city'] | 'all'>('all');

  const list = useMemo(() => (city === 'all' ? branches : branches.filter((b) => b.city === city)), [city]);

  return (
    <main className="relative mx-auto max-w-6xl overflow-x-clip px-4 py-14">
      <span
        className="text-outline-red pointer-events-none absolute -top-2 end-0 select-none font-display text-[clamp(5rem,14vw,11rem)] font-extrabold leading-none"
        aria-hidden="true"
      >
        {lang === 'ar' ? 'KSA' : 'فروع'}
      </span>
      <Reveal>
        <h1 className="relative font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-baik-red md:text-8xl">
          {t('branches_title')}
        </h1>
        <p className="relative mt-4 max-w-2xl text-baik-ink/80">{t('branches_sub')}</p>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <button
          onClick={() => setCity('all')}
          className={`ticket btn-spring px-5 py-2 font-display text-sm font-bold ${
            city === 'all' ? 'bg-baik-red text-white shadow-md' : 'bg-white text-baik-ink/80 hover:bg-baik-sand'
          }`}
        >
          {t('branches_all')}
        </button>
        {cities.map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            className={`ticket btn-spring px-5 py-2 font-display text-sm font-bold ${
              city === c ? 'bg-baik-red text-white shadow-md' : 'bg-white text-baik-ink/80 hover:bg-baik-sand'
            }`}
          >
            {cityLabels[c][lang]}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((b, i) => (
          <li key={b.id}>
            <Reveal delay={(i % 3) * 80}>
              <div className="glow-warm h-full border-s-4 border-baik-red bg-white p-6 shadow-sm">
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-baik-ember">
                  {cityLabels[b.city][lang]}
                </p>
                <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-baik-red">
                  {lang === 'ar' ? b.nameAr : b.nameEn}
                </h2>
                <p className="mt-1 text-sm text-baik-ink/70">{lang === 'ar' ? b.areaAr : b.areaEn}</p>
                <p className="mt-3 text-sm font-medium text-baik-ink">
                  {t('br_hours')} · <span dir="ltr">{b.hours}</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                  {b.dineIn && <span className="bg-baik-sand px-3 py-1 text-baik-ink/80">{t('br_dinein')}</span>}
                  {b.driveThru && <span className="bg-baik-sand px-3 py-1 text-baik-ink/80">{t('br_drivethru')}</span>}
                  {b.family && <span className="bg-baik-sand px-3 py-1 text-baik-ink/80">{t('br_family')}</span>}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </main>
  );
}
