import { ReactNode, useId } from 'react';

/**
 * Rotating circular-text stamp — sticker energy. Text runs around a circle,
 * optional children sit in the middle. Purely decorative.
 */
export default function CircularStamp({
  text,
  className = '',
  children,
  spin = true,
}: {
  text: string;
  className?: string;
  children?: ReactNode;
  spin?: boolean;
}) {
  const id = useId();
  return (
    <span className={`relative inline-grid place-items-center ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 200"
        className={`h-full w-full ${spin ? 'animate-spin-slow' : ''}`}
      >
        <defs>
          <path id={id} d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
        </defs>
        <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" opacity="0.7" />
        <text className="fill-current font-display" style={{ fontSize: '16.5px', fontWeight: 700, letterSpacing: '2.5px' }}>
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      {children && (
        <span className="absolute inset-0 grid place-items-center">{children}</span>
      )}
    </span>
  );
}
