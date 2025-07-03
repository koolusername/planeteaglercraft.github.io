# Planet Minecraft Style Guide for Planet Eaglercraft

This document describes how to update the Planet Eaglercraft website to visually resemble the Planet Minecraft website, including layout, color palette, navigation, and UI elements.

## 1. Color Palette
- **Primary Blue:** #3c5a99
- **Secondary Blue:** #4a6ea9
- **Accent Green:** #7bb661
- **Background:** #e6e6e6
- **Header/Footer:** #222
- **Text:** #222, #fff for header/footer

## 2. Layout
- **Header:**
  - Logo on the left, site title next to it.
  - Navigation bar below header, full width, with blue background.
- **Navigation:**
  - Horizontal nav bar with Home, Maps, Skins, Texture Packs, Servers.
  - Nav links styled as buttons with hover effect (lighter blue or green underline).
- **Main Content:**
  - Centered, max-width 1100px, white background, subtle shadow, rounded corners.
  - Use cards or grid for featured content (maps, texture packs, etc).
- **Sidebar (optional):**
  - For extra navigation or featured content.
- **Footer:**
  - Dark background, light text, copyright.

## 3. Typography
- **Font:** 'Open Sans', Arial, sans-serif.
- **Headings:** Bold, blue or green accent.
- **Body:** #222 or #444 for readability.

## 4. Buttons & Links
- Rounded corners, blue or green background.
- Hover: lighter shade or underline.

## 5. Cards/Grids
- Use for featured maps/texture packs.
- White background, subtle border, shadow, rounded corners.

## 6. Responsive Design
- Use flexbox or CSS grid for layout.
- Nav collapses to hamburger on mobile.

## 7. Example CSS Classes
- `.pmc-header`, `.pmc-nav`, `.pmc-main`, `.pmc-card`, `.pmc-footer`, `.pmc-btn`

## 8. Example HTML Structure
```html
<header class="pmc-header">
  <img src="logo.png" alt="Logo" class="pmc-logo">
  <span class="pmc-title">Planet Eaglercraft</span>
</header>
<nav class="pmc-nav">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="maps.html">Maps</a></li>
    <li><a href="skins.html">Skins</a></li>
    <li><a href="texturepacks.html">Texture Packs</a></li>
    <li><a href="servers.html">Servers</a></li>
  </ul>
</nav>
<main class="pmc-main">
  <!-- Content here -->
</main>
<footer class="pmc-footer">
  &copy; <span id="year"></span> PlanetEaglercraft. All rights reserved.
</footer>
```

## 9. Assets
- Use a logo similar in size/aspect to Planet Minecraft's.
- Use icons for nav if desired.

## 10. Implementation Steps
1. Update `styles.css` with new color palette and classes.
2. Refactor HTML files to use new structure and classes.
3. Test on desktop and mobile.
4. Document all changes in this `/doc` directory.

---

For more details, see the official [Planet Minecraft](https://www.planetminecraft.com/) site for inspiration.
