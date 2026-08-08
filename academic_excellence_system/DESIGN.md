---
name: Academic Excellence System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#000a1e'
  on-primary: '#ffffff'
  primary-container: '#002147'
  on-primary-container: '#708ab5'
  inverse-primary: '#aec7f6'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#200000'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c0000'
  on-tertiary-container: '#ed5542'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f6'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#8f0f07'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Merriweather
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Merriweather
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Merriweather
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Merriweather
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
---

## Brand & Style

The design system is engineered for STISIP BIKES to project an image of institutional authority, intellectual rigor, and modern academic excellence. The brand personality is **distinguished, reliable, and visionary**, striking a balance between historical prestige and contemporary efficiency. 

The aesthetic follows a **Corporate Modern** approach with **Minimalist** influences. It prioritizes clarity and information density while using high-quality imagery and precise alignment to convey a sense of "Campus as a Sanctuary." The UI should feel substantial and grounded, avoiding flighty trends in favor of timeless structural integrity. Visual elements are ordered and symmetrical, evoking the stability of a physical university campus.

## Colors

The palette is rooted in the "Oxford Blue" tradition to establish immediate credibility.
- **Primary (Deep Navy):** Used for headers, footers, and primary navigation to provide a solid structural frame.
- **Secondary (Heritage Gold):** Reserved for high-value accents, call-to-action buttons, and academic honors. It adds a layer of prestige and "light" to the dark primary.
- **Tertiary (Academic Maroon):** Used sparingly for urgent notifications, specific departmental branding, or hover states to provide warmth and depth.
- **Neutral (Cloud White/Stone):** The background space uses a very slightly warm off-white to reduce eye strain and provide a more "paper-like" feel than pure white.
- **Semantic Colors:** Success (Forest Green), Warning (Amber), and Error (Crimson) must be desaturated to maintain the formal tone.

## Typography

This design system utilizes a traditional pairing of a high-legibility Serif for headlines and a systematic Sans-Serif for functional text. 

**Merriweather** is the primary choice for editorial content and headlines, providing an authoritative "published" feel. It should be used for page titles, section headings, and quotes.

**Inter** is utilized for all functional UI elements, body copy, and data-heavy layouts. Its neutral, systematic nature ensures that complex academic information remains accessible and easy to scan. 

*Note: For display headings, always use a slightly tighter letter-spacing to maintain visual tension and authority.*

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** model for desktop to ensure content maintains its scholarly proportions, centered within the viewport.

- **Grid:** A 12-column grid is standard. Gutters are fixed at 24px to provide ample "breathing room" between content blocks.
- **Rhythm:** Spacing follows an 8px base unit. Section-to-section spacing is generous (80px+) to allow for clear thematic breaks.
- **Mobile:** Elements transition to a single column with 16px side margins. Typography scales down (see tokens) to ensure readability without excessive scrolling.
- **Academic Program Grids:** Use a 3-column layout on desktop, collapsing to 2-columns on tablet, and 1-column on mobile.

## Elevation & Depth

To maintain a formal and trustworthy feel, this design system avoids heavy shadows or trendy blurs. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

- **Depth:** Surfaces are differentiated by slight shifts in background color (e.g., moving from White to Neutral-50) rather than shadows.
- **Borders:** Use 1px solid borders in a light gray (#E2E8F0) for cards and input fields.
- **Interaction:** Subtle, soft shadows (Blur 8px, Opacity 4%, Y-Offset 2px) are only permitted on "hover" states for interactive cards to provide a tactile cue without breaking the flat, academic aesthetic.
- **Overlays:** Institutional headers and mega-menus should use a solid Primary background or a very high-opacity (98%) white to maintain the feeling of permanence.

## Shapes

The design system employs a **Soft** shape language. Corners are slightly rounded (4px) to avoid the aggression of sharp points while maintaining a professional, structured appearance. 

- **Buttons:** Use the standard 4px radius.
- **Cards:** Use the 8px (Large) radius for content containers to distinguish them from the page background.
- **Imagery:** Campus photography should always be rectangular with the standard 4px radius; circular masks are only reserved for faculty portraits.

## Components

### Institutional Header & Mega-Menu
The header must feature the university crest on the left. The primary navigation uses Inter (Label-MD) in white text against the Primary Navy background. Mega-menus should be organized by user intent (e.g., "Prospective Students," "Research," "About"). Use a "Utility Bar" above the main nav for quick links like "Library," "Portal," and "Apply Now."

### Hero Sections
Hero sections must use high-resolution campus imagery with a dark navy gradient overlay (40% opacity) to ensure white Merriweather headlines remain legible.

### News & Event Cards
News cards feature a top-aligned image, a date badge in Heritage Gold, and a Merriweather headline. The "Read More" link should use the Secondary color and an arrow icon.

### Academic Program Grids
Cards for degrees/majors should be minimalist: an icon or subtle background pattern, the program title, and a 2-line description. Use a 1px border.

### Buttons
- **Primary:** Heritage Gold background, Navy text, 4px radius, Bold.
- **Secondary:** Navy background, White text.
- **Ghost:** 1px Navy border, Navy text, no background.

### Input Fields
Standardized with a 1px light gray border. Focus states transition the border to Heritage Gold. Labels are always positioned above the field in Inter (Label-MD).