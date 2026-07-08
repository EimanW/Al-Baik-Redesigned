const stores = [
  { id: 'apple', label: 'App Store', sub: 'Download on the' },
  { id: 'google', label: 'Google Play', sub: 'Get it on' },
  { id: 'huawei', label: 'AppGallery', sub: 'Explore it on' },
];

export default function AppBadges({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {stores.map((s) => (
        <span
          key={s.id}
          className={`btn-spring inline-flex cursor-default flex-col justify-center border-2 px-4 py-2 leading-tight ${
            light ? 'border-white/50 bg-white/10 text-white' : 'border-baik-ink/30 bg-white text-baik-ink'
          }`}
        >
          <span className="text-[10px] uppercase tracking-wide opacity-70">{s.sub}</span>
          <span className="font-display font-bold">{s.label}</span>
        </span>
      ))}
    </div>
  );
}
