import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

const links = [
  { to: '/', key: 'nav_home' },
  { to: '/menu', key: 'nav_menu' },
  { to: '/branches', key: 'nav_branches' },
  { to: '/story', key: 'nav_story' },
  { to: '/compare', key: 'nav_compare' },
] as const;

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-baik-red/15 bg-baik-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 -rotate-6 place-items-center rounded-full bg-baik-red font-display text-xl font-extrabold text-baik-yellow shadow-md ring-2 ring-baik-yellow/70 transition-transform duration-300 group-hover:rotate-6">
            {lang === 'ar' ? 'ب' : 'B'}
          </span>
          <span className="font-display text-2xl font-extrabold leading-none tracking-tight text-baik-red">
            {lang === 'ar' ? 'البيك' : 'ALBAIK'}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-baik-red ${
                  isActive ? 'text-baik-red' : 'text-baik-ink/80'
                }`
              }
            >
              {({ isActive }) => (
                <span className="nav-drip" data-active={isActive}>
                  {t(l.key)}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-full border-2 border-baik-ink/20 text-xs font-bold">
            <button
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-3 py-1.5 transition-colors ${
                lang === 'en' ? 'bg-baik-red text-white' : 'text-baik-ink/70 hover:bg-baik-sand'
              }`}
            >
              <span key={lang} className="inline-block animate-flip-in">EN</span>
            </button>
            <button
              onClick={() => setLang('ar')}
              aria-pressed={lang === 'ar'}
              className={`px-3 py-1.5 transition-colors ${
                lang === 'ar' ? 'bg-baik-red text-white' : 'text-baik-ink/70 hover:bg-baik-sand'
              }`}
            >
              <span key={lang} className="inline-block animate-flip-in">عربي</span>
            </button>
          </div>

          <button
            className="btn-spring grid h-10 w-10 place-items-center rounded-lg border-2 border-baik-ink/20 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="text-lg leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-baik-red/15 bg-baik-cream md:hidden" aria-label="Mobile">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-3.5 font-display text-base font-bold ${
                      isActive ? 'bg-baik-sand text-baik-red' : 'text-baik-ink/80'
                    }`
                  }
                >
                  {t(l.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
