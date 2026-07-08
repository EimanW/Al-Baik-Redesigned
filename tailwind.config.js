/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        baik: {
          red: '#C8102E',
          crimson: '#8E0E22',
          maroon: '#6E0A1A',
          yellow: '#FFC72C',
          orange: '#F26522',
          ember: '#B4400C',
          cream: '#FFF6E8',
          sand: '#FBE8CE',
          ink: '#2B1B12',
        },
      },
      fontFamily: {
        display: ['"Baloo Bhaijaan 2"', 'system-ui', 'sans-serif'],
        body: ['Rubik', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        heroIn: {
          from: { opacity: '0', transform: 'translateY(46px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(10px) scaleX(1)' },
          '30%': { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'translateY(-110px) scaleX(1.7)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(9px, -16px, 0) rotate(14deg)' },
        },
        flipIn: {
          from: { opacity: '0', transform: 'perspective(400px) rotateX(88deg)' },
          to: { opacity: '1', transform: 'perspective(400px) rotateX(0deg)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(var(--wob, -2deg)) scale(1)' },
          '50%': { transform: 'rotate(calc(var(--wob, -2deg) * -1)) scale(1.04)' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spinSlow 26s linear infinite',
        'hero-in': 'heroIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        steam: 'steam 6.5s ease-out infinite',
        drift: 'drift 7s ease-in-out infinite',
        'flip-in': 'flipIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
        wobble: 'wobble 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
