import { ReactNode } from 'react';

/**
 * Seamless marquee strip. Content is duplicated for the -50% loop, so both
 * halves must be identical. Forced LTR because translateX animation direction
 * is physical; the content itself mixes EN/AR freely.
 */
export default function Ticker({
  items,
  className = '',
  separator = '★',
}: {
  items: string[];
  className?: string;
  separator?: ReactNode;
}) {
  return (
    <div dir="ltr" className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-5 px-5 font-display text-base font-bold uppercase tracking-wider md:text-lg">
                <span>{item}</span>
                <span className="text-baik-yellow" aria-hidden="true">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
