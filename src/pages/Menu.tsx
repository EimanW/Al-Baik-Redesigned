import { useMemo, useState, useEffect, useRef } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { menu, categories, Category, MenuItem } from '../data/menu';
import FoodImage from '../components/FoodImage';
import Reveal from '../components/Reveal';
import AppBadges from '../components/AppBadges';

type Sort = 'default' | 'cal_asc' | 'cal_desc';

const catKey: Record<Category, `cat_${Category}`> = {
  chicken: 'cat_chicken',
  sandwiches: 'cat_sandwiches',
  seafood: 'cat_seafood',
  sides: 'cat_sides',
  desserts: 'cat_desserts',
  drinks: 'cat_drinks',
};

export default function Menu() {
  const { t, lang } = useLang();
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<Category | 'all'>('all');
  const [spicyOnly, setSpicyOnly] = useState(false);
  const [sort, setSort] = useState<Sort>('default');
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = menu.filter((m) => {
      if (cat !== 'all' && m.category !== cat) return false;
      if (spicyOnly && !m.spicy) return false;
      if (q && !m.en.toLowerCase().includes(q) && !m.ar.includes(query.trim())) return false;
      return true;
    });
    if (sort === 'cal_asc') list = [...list].sort((a, b) => a.calories - b.calories);
    if (sort === 'cal_desc') list = [...list].sort((a, b) => b.calories - a.calories);
    return list;
  }, [query, cat, spicyOnly, sort]);

  return (
    <main className="relative mx-auto max-w-6xl overflow-x-clip px-4 py-14">
      <span
        className="text-outline-red pointer-events-none absolute -top-2 end-0 select-none font-display text-[clamp(5rem,14vw,11rem)] font-extrabold leading-none"
        aria-hidden="true"
      >
        {lang === 'ar' ? 'MENU' : 'قائمة'}
      </span>
      <Reveal>
        <h1 className="relative font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-baik-red md:text-8xl">
          {t('menu_title')}
        </h1>
        <p className="relative mt-4 max-w-2xl text-baik-ink/80">{t('menu_sub')}</p>
      </Reveal>

      {/* Controls */}
      <div className="sticky top-[65px] z-30 -mx-4 mt-8 bg-baik-cream/95 px-4 py-4 backdrop-blur">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('menu_search')}
            aria-label={t('menu_search')}
            className="w-full max-w-xs rounded-full border-2 border-baik-ink/20 bg-white px-5 py-2.5 text-sm outline-none transition-colors focus:border-baik-red"
          />
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={spicyOnly}
              onChange={(e) => setSpicyOnly(e.target.checked)}
              className="h-4 w-4 accent-baik-red"
            />
            🌶 {t('menu_spicy_only')}
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Sort"
            className="rounded-full border-2 border-baik-ink/20 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-baik-red"
          >
            <option value="default">{t('menu_sort_default')}</option>
            <option value="cal_asc">{t('menu_sort_cal_asc')}</option>
            <option value="cal_desc">{t('menu_sort_cal_desc')}</option>
          </select>
        </div>

        {/* Category tabs as ticket stubs */}
        <div className="mt-4 flex flex-wrap gap-2.5" role="tablist" aria-label="Menu categories">
          <button
            role="tab"
            aria-selected={cat === 'all'}
            onClick={() => setCat('all')}
            className={`ticket btn-spring px-5 py-2 font-display text-sm font-bold ${
              cat === 'all' ? 'bg-baik-red text-white shadow-md' : 'bg-white text-baik-ink/80 hover:bg-baik-sand'
            }`}
          >
            {t('menu_all')}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`ticket btn-spring px-5 py-2 font-display text-sm font-bold ${
                cat === c ? 'bg-baik-red text-white shadow-md' : 'bg-white text-baik-ink/80 hover:bg-baik-sand'
              }`}
            >
              {t(catKey[c])}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {items.length === 0 ? (
        <p className="mt-16 border-2 border-dashed border-baik-ink/20 bg-baik-sand p-10 text-center text-baik-ink/70">
          {t('menu_empty')}
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setSelected(item)}
                className="glow-warm group block w-full overflow-hidden bg-white text-start shadow-sm"
              >
                <div className="relative overflow-hidden">
                  <FoodImage
                    id={item.id}
                    label={lang === 'ar' ? item.ar : item.en}
                    className="aspect-[16/10] transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="cal-flip absolute bottom-2 start-2 bg-baik-ink px-2.5 py-1 font-display text-xs font-bold text-baik-yellow">
                    {item.calories} {t('menu_cal')}
                  </span>
                  {item.spicy && (
                    <span
                      className="absolute end-3 top-3 grid h-10 w-10 rotate-12 place-items-center rounded-full bg-baik-red text-base text-white shadow-md"
                      title={t('menu_spicy')}
                    >
                      🌶<span className="sr-only">{t('menu_spicy')}</span>
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-bold leading-snug text-baik-ink">
                    {lang === 'ar' ? item.ar : item.en}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 text-sm text-baik-ink/70">
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                  <p className="mt-3 font-display text-sm font-bold text-baik-ember">
                    {item.calories} {t('menu_cal')}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}

function ItemModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const { t, lang } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-baik-ink/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'ar' ? item.ar : item.en}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden bg-baik-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="scallop relative">
          <FoodImage id={item.id} label={lang === 'ar' ? item.ar : item.en} className="aspect-[16/9]" />
        </div>
        <div className="p-7">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-baik-red">
              {lang === 'ar' ? item.ar : item.en}
            </h2>
            {item.spicy && (
              <span className="grid h-11 w-11 shrink-0 rotate-12 place-items-center rounded-full bg-baik-red text-lg text-white shadow-md">
                🌶<span className="sr-only">{t('menu_spicy')}</span>
              </span>
            )}
          </div>
          <p className="mt-2 text-baik-ink/80">{lang === 'ar' ? item.descAr : item.descEn}</p>

          <div className="mt-5 border-2 border-dashed border-baik-ink/20 bg-baik-sand p-4">
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-baik-ember">{t('menu_modal_nutrition')}</p>
            <p className="mt-1 font-display text-2xl font-extrabold text-baik-ink">
              {item.calories}{' '}
              <span className="text-sm font-semibold text-baik-ink/60">
                {t('menu_modal_calories')} ({t('menu_cal')})
              </span>
            </p>
          </div>

          <div className="mt-5">
            <p className="mb-3 font-semibold text-baik-ink">{t('menu_modal_order')}</p>
            <AppBadges />
          </div>

          <button
            ref={closeRef}
            onClick={onClose}
            className="btn-spring mt-6 w-full rounded-full bg-baik-red py-3 font-display text-lg font-bold text-white hover:bg-baik-crimson"
          >
            {t('menu_close')}
          </button>
        </div>
      </div>
    </div>
  );
}
