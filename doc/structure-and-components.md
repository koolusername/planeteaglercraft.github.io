# Planet Eaglercraft Website Structure and Components

## Overview
This document explains the structure and main components of the updated Planet Eaglercraft website, styled after Planet Minecraft.

## Main Components

### 1. Header (`.pmc-header`)
- Contains the site logo and title.
- Uses a dark background with white text.

### 2. Navigation Bar (`.pmc-nav`)
- Horizontal navigation with links to all main sections.
- Styled with a blue background and button-like links.

### 3. Main Content (`.pmc-main`)
- Centered, with a white background, rounded corners, and shadow.
- Contains featured content in grid/card format.

### 4. Footer (`.pmc-footer`)
- Dark background, light text, copyright.

### 5. Cards/Grids (`.pmc-card`, `.pmc-grid`)
- Used for featured maps, texture packs, etc.
- White background, border, shadow, rounded corners.

## Example Structure
```html
<body>
  <header class="pmc-header">...</header>
  <nav class="pmc-nav">...</nav>
  <main class="pmc-main">...</main>
  <footer class="pmc-footer">...</footer>
</body>
```

## Responsive Design
- Uses flexbox/grid for layout.
- Navigation collapses on mobile.

## File Organization
- `index.html`, `maps.html`, etc.: Main pages
- `styles.css`: Main stylesheet
- `main.js`: JavaScript for dynamic year, nav, etc.
- `/doc`: Documentation

---
See `planetminecraft-style.md` for style guide and color palette.
