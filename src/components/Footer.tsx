import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-heat-deep relative mt-24 overflow-hidden text-baik-cream">
      <div className="scallop-top absolute inset-x-0 top-0 h-8 bg-baik-cream" aria-hidden="true" />
      <span
        className="text-outline-cream pointer-events-none absolute -bottom-8 -end-4 select-none whitespace-nowrap font-display text-[clamp(6rem,18vw,15rem)] font-extrabold leading-none opacity-30"
        aria-hidden="true"
      >
        {lang === 'ar' ? 'البيك' : 'ALBAIK'}
      </span>
      <div className="stripe-band mt-8 h-3" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-baik-yellow">{t('footer_service')}</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">{t('footer_contact')}</h2>
          <a
            href="tel:8002442245"
            dir="ltr"
            className="btn-spring mt-4 inline-block rounded-full bg-baik-yellow px-6 py-2.5 font-display font-extrabold text-baik-ink shadow-md"
          >
            800 244 2245
          </a>
        </div>
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-baik-yellow">{t('footer_links')}</p>
          <ul className="mt-3 space-y-2 text-sm font-medium">
            <li><Link className="nav-drip inline-block [--drip:#FFC72C] hover:text-baik-yellow" to="/menu">{t('nav_menu')}</Link></li>
            <li><Link className="nav-drip inline-block [--drip:#FFC72C] hover:text-baik-yellow" to="/branches">{t('nav_branches')}</Link></li>
            <li><Link className="nav-drip inline-block [--drip:#FFC72C] hover:text-baik-yellow" to="/story">{t('nav_story')}</Link></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <span className="inline-flex w-fit -rotate-2 items-center gap-2 border-2 border-dashed border-baik-yellow/60 px-4 py-2 font-display text-sm font-bold text-baik-yellow">
            ★ {t('footer_saudi')}
          </span>
        </div>
      </div>
      <div className="relative border-t border-white/15 px-4 py-6 text-center">
        <p className="mx-auto max-w-3xl text-xs text-baik-cream/70">{t('footer_legal')}</p>
        <p className="mx-auto mt-2 max-w-3xl text-xs font-medium text-baik-yellow/90">{t('footer_concept')}</p>
      </div>
    </footer>
  );
}
