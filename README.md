# ALBAIK - Website Redesign Concept

This is a design proposal for albaik.com that aims to feel more modern, easier to browse, and better for both English and Arabic users.

This is not an official ALBAIK product. It is a concept.

## How to run it

```bash
npm install
npm run dev
```

Open the local link that appears in the terminal. To create a production build, run:

```bash
npm run build
```

## What this concept changes

- A real EN/AR language switch with a mirrored right-to-left layout.
- A more useful menu with search, filters, sorting, and nutrition details.
- A branch finder that makes locations easier to scan.
- A stronger story section that highlights the brand history.
- A faster, mobile-friendly front end with keyboard support and reduced-motion support.

## Food images

The site uses placeholder food artwork by default. If you want real photos, add them to `public/food/` using the menu item id as the file name.

Example:

```text
public/food/chicken-4pc.jpg
public/food/chicken-8pc.jpg
public/food/big-baik.jpg
public/food/fish-burger.jpg
public/food/garlic-sauce.jpg
public/food/story-hero.jpg
```

## Project layout

```text
src/
  i18n/        Language context and English/Arabic text
  data/        Menu items and branch data
  components/  Shared UI pieces
  pages/       Main pages for the site
```

## Important notes

The branch data and calorie numbers are sample content, so they should be replaced with official information before real use.

No prices are shown in the site. Ordering links go to the official ALBAIK mobile apps.
