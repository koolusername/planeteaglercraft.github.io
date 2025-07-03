# Planet Eaglercraft CSS Documentation

This document explains the structure, purpose, and usage of the `styles.css` file for the Planet Eaglercraft website. It is intended for contributors and maintainers to understand and extend the site's design system.

---

## Overview

The `styles.css` file defines the layout, color palette, and UI elements for the Planet Eaglercraft website, inspired by Planet Minecraft. It is organized into logical sections, each with clear comments in the CSS file itself.

---

## Sections & Classes

### 1. Base & Body Styles
- **body, html**: Sets up the base font, background color, and minimum height for the site. Uses 'Open Sans' for a modern, readable look.

### 2. Header
- **.pmc-header**: The main site header bar. Uses a dark background and flex layout for logo and title alignment.
- **.pmc-logo**: The logo image in the header.
- **.pmc-title**: The site title next to the logo.

### 3. Navigation Bar
- **.pmc-nav**: The main navigation bar, with a blue background and subtle shadow.
- **.pmc-nav-toggle**: Hamburger button for mobile navigation (visible on small screens).
- **.pmc-nav ul**: Container for navigation links.
- **.pmc-nav ul li a**: Navigation links, with hover and active states for user feedback.

### 4. Main Content Area
- **.pmc-main**: The main content container. White background, rounded corners, and drop shadow for a card-like appearance.

### 5. Grid & Cards
- **.pmc-grid**: CSS grid for laying out featured cards responsively.
- **.pmc-card**: Card container for featured content (maps, skins, etc.).
- **.pmc-card a:not(.pmc-btn)**: Styles for card links that are not buttons, to avoid conflicts.

### 6. Buttons
- **.pmc-btn**: Main action buttons (Browse, Download, etc). Green text, blue background. On hover, blue text, green background.

### 7. Footer
- **.pmc-footer**: Site footer, dark background, white text, and blue top border.

### 8. Headings
- **h1, h2, h3, h4, h5**: Blue, bold headings for consistency.
- **h2**: Section heading with a green underline for emphasis.

### 9. Responsive Navigation
- **@media (max-width: 700px)**: Stacks nav links vertically, shows hamburger menu, and adjusts padding for mobile screens.

### 10. Warning Page
- **.warning-page, body.warning-page**: Special layout for warning pages, with centered content and a yellow background.

---

## Customization & Extension
- To add new UI elements, follow the commenting and sectioning style in `styles.css`.
- Use semantic class names and keep color palette consistent with the rest of the site.
- For new pages, reuse `.pmc-main`, `.pmc-card`, and `.pmc-btn` for visual consistency.

---

## Color Palette
- **Blue**: `#3c5a99` (primary navigation, buttons, headings)
- **Green**: `#7bb661` (accents, hover states)
- **Dark**: `#222` (header/footer background)
- **Light**: `#fafafa`, `#fff`, `#e6e6e6` (backgrounds, cards)

---

## Notes
- The CSS is mobile-first and fully responsive.
- All navigation and action buttons are accessible and have clear hover/focus states.
- The stylesheet is heavily commented for maintainability.

For further details, see the comments in `styles.css`.
