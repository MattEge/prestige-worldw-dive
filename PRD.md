# Prestige Worldwide Dustless Eco-Blast - Interactive Experience

An immersive, industrial-luxury web experience for an Idaho-based eco-friendly blasting service, featuring a unique scroll-activated particle cleaning effect that reveals pristine content beneath a weathered surface.

**Experience Qualities**:
1. **Industrial-Luxury** - The intersection of rugged industrial power and refined, premium service quality
2. **Transformative** - Demonstrating the dramatic before-and-after nature of the service through interactive scroll mechanics
3. **Eco-Conscious** - Showcasing environmental responsibility through clean design and sustainability metrics

**Complexity Level**: Light Application (multiple features with basic state)
This is an interactive marketing showcase with multiple sections, particle effects, state management for surface selectors, and persistent eco-counters, but without complex multi-view navigation or advanced data operations.

## Essential Features

### Dynamic Scroll Cleansing Effect
- **Functionality**: Particle emitter that blasts "grime" away as user scrolls, revealing clean content beneath
- **Purpose**: Viscerally demonstrate the power and precision of dustless blasting in an unforgettable way
- **Trigger**: User scroll or touch-swipe gestures
- **Progression**: Page loads with 15% opacity grime overlay → User scrolls → Particles emit from center and blast outward → Grime clears in the scroll wake → Clean, crisp content revealed
- **Success criteria**: Smooth 60fps animation on mobile and desktop, grime clears progressively without obscuring text, particle physics feel realistic and powerful

### Interactive Surface Selector
- **Functionality**: Clickable grid of four surface types (Automotive, Marine, Graffiti, Industrial) that change the grime texture
- **Purpose**: Show versatility of service across different applications and materials
- **Trigger**: User clicks on any surface type card
- **Progression**: User views selector grid → Clicks surface type → Background texture transitions → Grime pattern updates to match selected material
- **Success criteria**: Instant texture swap, each texture is visually distinct, selection state is clearly indicated

### Eco-Commitment Counter
- **Functionality**: Live-updating counters showing environmental impact metrics
- **Purpose**: Reinforce the eco-friendly positioning and build trust through quantifiable benefits
- **Trigger**: Page load and periodic updates
- **Progression**: Counter initializes → Animates up from zero → Updates periodically → Shows impressive cumulative numbers
- **Success criteria**: Numbers feel realistic, animation is smooth, metrics are clearly labeled and impactful

### Idaho-Centric Trust Footer
- **Functionality**: Footer with subtle topographical map elements of Idaho
- **Purpose**: Ground the brand locally and establish regional credibility
- **Trigger**: User scrolls to bottom of page
- **Progression**: User reaches footer → Idaho topo map visible → Company location and service area displayed
- **Success criteria**: Map is recognizable as Idaho, subtle enough to not distract, enhances local trust

### Sticky Translucent Navigation
- **Functionality**: Header that remains visible and accessible during scroll with transparency effect
- **Purpose**: Ensure users never lose access to navigation while maintaining immersion
- **Trigger**: Page load and scroll
- **Progression**: Header visible on load → Becomes slightly more transparent on scroll → Always accessible → "Get a Clean Start" CTA remains prominent
- **Success criteria**: Header doesn't obscure content, transparency enhances rather than hinders readability, CTA is always clickable

## Edge Case Handling

- **Slow Network/Device**: Gracefully degrade particle count on low-performance devices, ensure content is readable even if grime effect doesn't load
- **Touch vs. Mouse**: Adapt particle emission pattern and intensity for touch-swipe vs. scroll wheel input
- **Reduced Motion**: Respect prefers-reduced-motion, show clean content immediately without particle effects
- **Small Screens**: Scale particle density and grime texture appropriately, ensure text remains legible at all viewport sizes
- **Rapid Scrolling**: Throttle particle generation to prevent memory issues, ensure grime clears even with fast scroll

## Design Direction

The design should evoke industrial power meeting premium service quality - think of high-end tool catalogs, luxury automotive detailing, or architectural concrete finishes. The experience should feel substantial, precise, and transformative. Users should feel the satisfaction of revealing clean surfaces, mirroring the actual blasting service. The eco-conscious elements should be integrated naturally without feeling preachy, using clean whites and Irish green as symbols of environmental responsibility against the industrial slate grey foundation.

## Color Selection

An industrial-luxury palette that balances rugged authenticity with premium polish, grounded in environmental responsibility.

- **Primary Color (Slate Grey)**: `oklch(0.45 0.01 240)` - Represents industrial strength, durability, and professional-grade equipment. The dominant neutral that grounds the entire experience.
- **Secondary Color (Irish Green)**: `oklch(0.52 0.15 145)` - Symbolizes eco-friendliness, growth, and environmental responsibility. Used strategically for eco-metrics and CTAs.
- **Accent Color (Crisp White)**: `oklch(0.99 0 0)` - Represents cleanliness, precision, and the transformed "after" state. Used for revealed content and key typography.
- **Supporting Dark**: `oklch(0.25 0.01 240)` - Deeper slate for contrast and depth
- **Grime Overlay**: `oklch(0.35 0.02 50 / 0.15)` - Weathered brown-grey texture at 15% opacity

**Foreground/Background Pairings**:
- Primary Slate Grey (`oklch(0.45 0.01 240)`): White text (`oklch(0.99 0 0)`) - Ratio 7.2:1 ✓
- Irish Green (`oklch(0.52 0.15 145)`): White text (`oklch(0.99 0 0)`) - Ratio 5.1:1 ✓
- Crisp White (`oklch(0.99 0 0)`): Slate Grey text (`oklch(0.45 0.01 240)`) - Ratio 7.2:1 ✓
- Dark Slate (`oklch(0.25 0.01 240)`): White text (`oklch(0.99 0 0)`) - Ratio 13.8:1 ✓

## Font Selection

The typography should bridge industrial utilitarianism with refined luxury - technical precision meets premium service.

- **Primary Font**: **Orbitron** (headings) - A geometric sans with mechanical precision that feels both industrial and futuristic, perfect for the "Dustless Eco-Blast" technological positioning
- **Secondary Font**: **Inter** (body text) - Clean, highly legible, professional sans-serif for all content and UI elements

**Typographic Hierarchy**:
- H1 (Hero Title "Prestige Worldwide"): Orbitron Bold / 56px / Tracking: -0.02em / Line-height: 1.1
- H2 (Section Headers): Orbitron SemiBold / 36px / Tracking: -0.01em / Line-height: 1.2
- H3 (Subsections): Orbitron Medium / 24px / Tracking: 0 / Line-height: 1.3
- Body Large (Intro Copy): Inter Regular / 18px / Line-height: 1.6
- Body (Standard Text): Inter Regular / 16px / Line-height: 1.5
- Small (Captions, Labels): Inter Medium / 14px / Line-height: 1.4
- CTA Button: Orbitron SemiBold / 16px / Uppercase / Tracking: 0.05em

## Animations

Animations should reinforce the core metaphor of powerful, precise blasting that transforms surfaces. Every motion should feel purposeful and satisfying.

**Functional Animations**:
- Particle emission uses realistic physics with velocity, gravity, and fade-out
- Grime clearing creates a satisfying "wipe" effect that follows scroll position
- Surface selector cards lift and highlight on hover with subtle shadow expansion
- Counter digits roll up smoothly using spring physics
- Sticky header fades transparency on scroll with smooth easing

**Delight Moments**:
- Hero particles have slight randomization in trajectory for organic feel
- "Get a Clean Start" button pulses gently with a green glow
- Idaho map subtly animates into view with a fade-up and slight scale
- Surface texture transitions use a crossfade with 300ms duration

**Timing Standards**:
- Particle lifecycle: 800-1200ms
- Grime clear transition: 400ms ease-out
- Surface selector hover: 200ms cubic-bezier
- Counter animation: 2000ms spring physics
- Navigation transparency: 300ms ease-in-out

## Component Selection

**Components**:
- **Card**: Surface selector grid items with hover states and clear selection indicators
- **Button**: Primary CTA ("Get a Clean Start") with custom Irish Green styling
- **Badge**: Small labels for surface types and eco-metrics
- **Separator**: Subtle dividers between major sections
- **Progress**: Visual representation of grime clearing percentage (hidden, for state tracking)

**Customizations**:
- **Particle Canvas Component**: Custom Three.js or Canvas-based particle system with physics simulation
- **Grime Overlay Component**: Custom SVG or Canvas mask that responds to scroll position
- **Counter Component**: Custom animated number display with rolling digits
- **Idaho Map Component**: Custom SVG topographical visualization
- **Scroll Progress Tracker**: Custom hook to manage scroll position and grime clearing state

**States**:
- **Buttons**: Default (Irish Green with white text) → Hover (brighter green with subtle lift) → Active (pressed with scale-down) → Disabled (desaturated grey)
- **Surface Cards**: Default (slate grey with border) → Hover (elevated with shadow) → Selected (Irish Green accent border + check icon)
- **Navigation**: Opaque (at top) → Translucent (on scroll) with backdrop blur
- **Grime**: 15% opacity → Progressively clears to 0% based on scroll proximity

**Icon Selection**:
- **Check** (selected surface type indicator)
- **Sparkles** (clean/transformation icons)
- **Drop** (water-based eco process)
- **Leaf** (environmental commitment)
- **MapPin** (Idaho location markers)
- **ArrowRight** (CTA buttons)

**Spacing**:
- Section padding: `py-24 md:py-32` (96-128px)
- Content max-width: `max-w-7xl`
- Card grid gap: `gap-6 md:gap-8`
- Text block spacing: `space-y-4`
- Inline element gap: `gap-3`

**Mobile**:
- Hero text scales down: 56px → 36px
- Particle density reduces by 50% on mobile
- Surface selector grid: 2x2 → 1x4 vertical stack
- Navigation height reduces: 80px → 64px
- Section padding reduces: 96px → 64px
- Touch-optimized buttons with minimum 44px tap targets
- Grime effect optimized for touch-swipe with gesture throttling
