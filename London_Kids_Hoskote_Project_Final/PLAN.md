# PLAN.md

## Goal
Enhance the "Little Sprouts" website with advanced modern Tailwind trends, micro-interactions, and SASS animations.

## Requirement Analysis
- **Micro-interactions:** Focus on hover states, clicks, and focus states.
- **Modern Tailwind:** Use utilities for styling, glassmorphism, and gradients.
- **SASS Animations:** complex keyframes and transitions.

## Proposed Changes

### 1. Infrastructure Setup
- [ ] Install `sass` dependency.
- [ ] Create `src/styles/main.scss` to replace inline `<style>`.
- [ ] Configure Tailwind to scan the new SCSS file.
- [ ] Link the SCSS file in `index.html`.

### 2. Refactoring
- [ ] Extract inline CSS from `index.html` to `src/styles/main.scss`.
- [ ] Convert vanilla CSS to SCSS structure.
- [ ] Replace custom CSS variables with Tailwind utilities where applicable (colors, spacing).

### 3. Enhancements (Micro-Interactions & Animations)
- **Buttons:**
    - [ ] Add 'bloom' effect on hover (scale + shadow spread).
    - [ ] Add active state 'press' effect.
- **Cards (Programs/Features):**
    - [ ] Implement tilt effect or lift-on-hover with smoother physics.
    - [ ] Add staggered entrance animations for grid items.
- **Hero Section:**
    - [ ] Enhance "Blob" animation fluidity using SASS math.
    - [ ] Add parallax effect to mouse movement (optional but impactful).
- **Navigation:**
    - [ ] add underline swipe animation for links.
    - [ ] Glassmorphism reinforcement.

### 4. Verification
- [ ] Verify build succeeds.
- [ ] Visual check of animations in browser.
