# ALBAIK - Website Redesign Concept

A design proposal reimagining albaik.com as a modern, bilingual, interactive experience.
**Not an official ALBAIK product** - a concept by Eiman Wasim.

## Run it (2 commands)

```bash
npm install
npm run dev
```

Open the localhost link it prints. `npm run build` produces a production bundle in `dist/`.
No API keys, no backend, no database, no analytics, no cookies - everything is static and self-contained.

## What was upgraded vs. the current site

1. **True bilingual EN/AR** - instant toggle, fully mirrored RTL layout, native Arabic typography (Baloo Bhaijaan 2 + Rubik, both with full Arabic support). The current site reloads the page and keeps an LTR layout.
2. **Interactive menu** - 29 items with categories, bilingual search, spicy filter, calorie sorting, and a per-item nutrition modal. Calories are what customers actively search for; today that traffic goes to third-party sites.
3. **Branch finder** - filterable branch cards by city with services and hours, replacing a plain text list.
4. **Brand storytelling** - the 1974 Shakour AbuGhazalah story as an animated 50-year timeline, plus the suggestion-box tradition.
5. **Modern foundation** - mobile-first, keyboard navigable, `prefers-reduced-motion` respected, instant client-side page transitions.

There is a built-in **/compare** page presenting exactly this list, bilingual, for pitching.

## Adding real food photography

Food images are brand-gradient placeholders by default. Drop a photo into `public/food/`
named by menu item id and it appears automatically (no code changes):

```
public/food/chicken-4pc.jpg
public/food/chicken-8pc.jpg
public/food/big-baik.jpg
public/food/fish-burger.jpg
public/food/garlic-sauce.jpg
public/food/story-hero.jpg   (the homepage story image)
```

Any id from `src/data/menu.ts` works the same way.

## Structure

```
src/
  i18n/          Language context + full EN/AR dictionaries
  data/          menu.ts (29 items), branches.ts (12 branches)
  components/    Nav, Footer, FoodImage, Reveal, AppBadges
  pages/         Home, Menu, Branches, Story, Compare
```

Stack: Vite · React 18 · TypeScript · Tailwind CSS · React Router. Nothing else.

## Notes on data

Sample branches and calorie figures are representative placeholders for the concept and
should be replaced with official data before any real use. No prices are shown anywhere.
Ordering intentionally routes to the official ALBAIK mobile apps, matching the brand's
current strategy.
