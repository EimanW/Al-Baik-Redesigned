import { useState } from 'react';

const palettes = [
  'from-baik-red to-baik-crimson',
  'from-baik-orange to-baik-red',
  'from-baik-yellow to-baik-orange',
];

function hashId(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * Brand-gradient placeholder card. If a real photo exists at /food/{id}.jpg
 * in the public folder it is used automatically — otherwise the gradient shows.
 */
export default function FoodImage({ id, label, className = '' }: { id: string; label: string; className?: string }) {
  const [hasPhoto, setHasPhoto] = useState(true);
  const palette = palettes[hashId(id) % palettes.length];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${palette}`} aria-hidden="true">
        <div className="absolute -bottom-8 -end-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -top-6 -start-6 h-24 w-24 rounded-full bg-white/10" />
        <span className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-white/25 text-6xl select-none">
          {label.charAt(0)}
        </span>
      </div>
      {hasPhoto && (
        <img
          src={`/food/${id}.jpg`}
          alt={label}
          loading="lazy"
          onError={() => setHasPhoto(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
