# 📚 TDK Group of Institutions - Complete Website Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Design System](#design-system)
3. [Typography System](#typography-system)
4. [Color Palette](#color-palette)
5. [Spacing & Layout](#spacing--layout)
6. [Components Library](#components-library)
7. [Pages Breakdown](#pages-breakdown)
8. [Animations & Interactions](#animations--interactions)
9. [Responsive Design](#responsive-design)
10. [Technical Stack](#technical-stack)

---

## 🎯 Project Overview

### Website Purpose
Educational institution website for TDK Group of Institutions (formerly London Kids), showcasing Pre-School (Ages 1.5-5.5), Primary School (Grades 1-7), and Pre-University College (PUC - Grades 11-12) programs.

### Key Features
- **Multi-page React Application** with React Router
- **3D Interactive Elements** using Three.js & React Three Fiber
- **Framer Motion Animations** for smooth page transitions
- **Responsive Mobile-First Design** with Tailwind CSS
- **WhatsApp Integration** for direct communication
- **Form Submissions** with validation and success states
- **Neuro-optimized Design** for educational engagement

### File Structure
```
app/
├── public/
│   └── images/              # All assets (45 optimized files)
│       ├── activities/      # Activity images (4 files)
│       ├── documents/       # PDF documents (3 files)
│       ├── gallery/         # Gallery photos (16 files)
│       ├── logos/           # Brand logos (3 files)
│       ├── programs/        # Program images (3 files)
│       ├── staff/           # Staff photos (4 files)
│       └── teachers/        # Teacher photos (3 files)
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── layout/          # Header, Footer
│   │   └── animations/      # Custom animations
│   ├── pages/               # Route pages
│   ├── data/                # Content data files
│   ├── styles/              # SCSS modules
│   └── hooks/               # Custom hooks
└── dist/                    # Build output (820KB JS, 67KB CSS)
```

---

## 🎨 Design System

### Design Philosophy
**Neuro-Optimized Educational Design**
- Trust & Intelligence: Soft Blue (#3B82F6)
- Creativity & Optimism: Warm Yellow (#F59E0B)
- Playfulness & Warmth: Soft Pink (#EC4899)
- Growth & Harmony: Soft Green (#10B981)

### Design Principles
1. **8-Point Spacing Grid** - Consistent visual rhythm
2. **12-Column Layout** - Flexible responsive grid
3. **Fluid Typography** - Scalable with viewport (clamp)
4. **Accessible Color Contrast** - WCAG AA compliant
5. **Motion Design** - Spring-based physics animations
6. **Glassmorphism** - Backdrop blur effects

---

## 📝 Typography System

### Font Families

#### Primary Font Stack
```css
font-family: 'Nunito', sans-serif;
```
- **Usage**: Body text, headings, navigation, buttons
- **Weights**: 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Characteristics**: Rounded, friendly, highly readable

#### Secondary Font
```css
font-family: 'Inter', sans-serif;
```
- **Usage**: Fallback font, technical content
- **Weights**: 400, 500, 600, 700

#### Accent Fonts
```css
font-family: 'Nothing You Could Do', cursive;  /* Handwritten signatures */
font-family: 'Noto Sans Kannada', sans-serif;  /* Kannada language */
```

### Heading Scale (Major Third - 1.25 ratio)

#### H1 - Main Page Titles
```css
font-size: clamp(2.5rem, 5vw, 3.5rem);  /* 40px → 56px */
font-weight: 800;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 24px;
color: var(--color-neutral-900);  /* #0F172A */
```
**Usage**: Hero sections, page headers
**Examples**: "Nurturing Future Global Citizens", "Pre-School Excellence"

#### H2 - Section Headings
```css
font-size: clamp(2rem, 4vw, 3rem);  /* 32px → 48px */
font-weight: 800;
line-height: 1.1;
letter-spacing: -0.02em;
margin-bottom: 20px;
color: var(--color-neutral-900);
```
**Hover Effect**: 
```css
transform: translateY(-3px);
text-shadow: 0 4px 12px rgba(58, 141, 255, 0.2);
transition: all 0.3s ease;
```
**Usage**: Major section titles
**Examples**: "Our Programs", "Why Choose Us"

#### H3 - Subsection Headings
```css
font-size: clamp(1.5rem, 3vw, 1.75rem);  /* 24px → 28px */
font-weight: 700;
line-height: 1.3;
margin-bottom: 16px;
color: var(--color-neutral-900);
```
**Usage**: Card titles, feature headings

#### H4 - Component Titles
```css
font-size: clamp(1.25rem, 2vw, 1.5rem);  /* 20px → 24px */
font-weight: 700;
margin-bottom: 12px;
```

#### H5 - Small Headings
```css
font-size: 1.25rem;  /* 20px */
font-weight: 700;
```

#### H6 - Label Headings
```css
font-size: 1rem;  /* 16px */
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.05em;
```

### Body Text

#### Base Body
```css
font-size: 18px;
line-height: 1.7;
font-family: 'Nunito', 'Inter', sans-serif;
color: var(--color-neutral-700);  /* #334155 */
```

#### Paragraph Text
```css
font-size: clamp(0.9rem, 2vw, 1rem);  /* 14.4px → 18px */
line-height: 1.6;
max-width: 70ch;  /* Optimal reading width */
```

#### Small Text
```css
font-size: 0.875rem;  /* 14px */
line-height: 1.5;
```

#### Tiny Text (Captions)
```css
font-size: 0.75rem;  /* 12px */
line-height: 1.4;
font-weight: 600;
```

### Component-Specific Typography

#### Section Subtitles
```css
font-size: 0.875rem;  /* 14px */
font-weight: 600;
color: var(--color-primary);  /* #3B82F6 */
text-transform: uppercase;
letter-spacing: 0.05em;
display: block;
margin-bottom: 12px;
```
**Usage**: "Our Story", "Educational Path", "Leadership"

#### Button Text
```css
font-size: clamp(0.875rem, 1.5vw, 1rem);  /* 14px → 16px */
font-weight: 700;
letter-spacing: 0.01em;
```

#### Navigation Links
```css
font-size: 1rem;  /* 16px */
font-weight: 700;
font-family: 'Nunito', sans-serif;
```

#### Footer Text
```css
/* Footer Section Titles */
font-size: clamp(0.82rem, 1.1vw, 0.92rem);  /* 13.12px → 14.72px */
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
color: #E2E8F0;

/* Footer Links/Body */
font-size: clamp(0.875rem, 1.1vw, 0.95rem);  /* 14px → 15.2px */
line-height: 1.6;
color: #CBD5E1;
```

#### Form Labels
```css
/* Floating Label Initial State */
font-size: 0.9rem;  /* 14.4px */
top: 14px;

/* Floating Label Focused/Filled State */
font-size: 0.7rem;  /* 11.2px */
top: 6px;
font-weight: 600;
```

#### Tags/Badges
```css
font-size: 0.75rem;  /* 12px */
font-weight: 700;
padding: 6px 12px;
border-radius: 8px;
letter-spacing: 0.02em;
```

---

## 🎨 Color Palette

### Primary Colors

#### Brand Blue (Trust & Intelligence)
```css
--color-primary: #3B82F6;        /* Main brand color */
--color-primary-dark: #2563EB;    /* Darker variant */
HSL: 217° 91% 60%
RGB: 59, 130, 246
```
**Usage**: Primary buttons, links, active states, icons
**Accessibility**: 4.5:1 contrast on white

#### Accent Yellow (Creativity & Optimism)
```css
--color-accent: #F59E0B;
HSL: 43° 96% 56%
RGB: 245, 158, 11
```
**Usage**: Highlights, badges, secondary CTAs
**Pairs with**: Blue (#3B82F6), Green (#10B981)

#### Warm Pink (Playfulness)
```css
--color-warm: #EC4899;
HSL: 327° 84% 60%
RGB: 236, 72, 153
```
**Usage**: Preschool program cards, playful elements
**Gradient**: Often paired with Purple (#A855F7)

#### Calm Green (Growth & Harmony)
```css
--color-calm: #10B981;
HSL: 160° 84% 39%
RGB: 16, 185, 129
```
**Usage**: Success states, growth metrics, environmental themes

### Neutral Colors (Slate Palette)

#### Dark Neutrals
```css
--color-neutral-900: #0F172A;  /* Darkest - Headers, important text */
--color-neutral-800: #1E293B;  /* Dark - Body text */
--color-neutral-700: #334155;  /* Medium-dark - Secondary text */
```

#### Mid Neutrals
```css
--color-neutral-600: #475569;  /* Mid - Disabled states */
--color-neutral-500: #64748B;  /* Light-mid - Placeholders */
--color-neutral-400: #94A3B8;  /* Light - Borders */
```

#### Light Neutrals
```css
--color-neutral-300: #CBD5E1;  /* Very light - Borders */
--color-neutral-200: #E2E8F0;  /* Lighter - Backgrounds */
--color-neutral-100: #F1F5F9;  /* Lightest - Surface backgrounds */
--color-bg: #F8FAFC;           /* Page background */
```

### Extended Colors

#### Secondary Blues
```css
/* Indigo */
#6366F1  /* Indigo-500 - Accent elements */
#818CF8  /* Indigo-400 - Light accent */
#EFF6FF  /* Indigo-50  - Background tint */
#DBEAFE  /* Indigo-100 - Hover backgrounds */
```

#### Secondary Purples
```css
#8B5CF6  /* Violet-500 - ICSE Board, Arts stream */
#A855F7  /* Purple-500 - Commerce, special highlights */
#F5F3FF  /* Violet-50  - Background tint */
#FAF5FF  /* Purple-50  - Background tint */
```

#### Secondary Greens
```css
#10B981  /* Emerald-500 - Success, growth */
#ECFDF5  /* Emerald-50  - Success backgrounds */
#14B8A6  /* Teal-500    - Secondary accent */
```

#### Secondary Oranges/Ambers
```css
#F59E0B  /* Amber-500 - Warnings, highlights */
#FFFBEB  /* Amber-50  - Warning backgrounds */
```

#### Secondary Reds/Roses
```css
#F43F5E  /* Rose-500 - Errors, urgent */
#FCA5A5  /* Red-300  - Error borders */
#FEE2E2  /* Red-100  - Error backgrounds */
```

### Semantic Colors

#### Success
```css
background: #10B981;  /* Green */
text: #ECFDF5;        /* Light green text */
border: #14B8A6;      /* Teal border */
```

#### Warning
```css
background: #F59E0B;  /* Amber */
text: #78350F;        /* Dark amber */
border: #FCD34D;      /* Light amber */
```

#### Error
```css
background: #EF4444;  /* Red */
text: #FEE2E2;        /* Light red */
border: #FCA5A5;      /* Rose border */
```

#### Info
```css
background: #3B82F6;  /* Blue */
text: #EFF6FF;        /* Light blue */
border: #93C5FD;      /* Sky blue */
```

### Component-Specific Colors

#### Program Cards
```css
/* Preschool Playgroup */
--card-color: #EC4899;  /* Pink */
--card-bg: #FCE7F3;

/* Preschool Nursery */
--card-color: #3B82F6;  /* Blue */
--card-bg: #EFF6FF;

/* Preschool LKG */
--card-color: #F59E0B;  /* Amber */
--card-bg: #FEF3C7;

/* Preschool UKG */
--card-color: #10B981;  /* Green */
--card-bg: #D1FAE5;
```

#### Primary School Boards
```css
/* CBSE Foundation (Grades 1-4) */
--accent: #3B82F6;  /* Blue */
--bg: #EFF6FF;

/* ICSE Intermediate (Grades 5-7) */
--accent: #8B5CF6;  /* Violet */
--bg: #F5F3FF;

/* State Advanced (Grades 8-9) */
--accent: #10B981;  /* Emerald */
--bg: #ECFDF5;

/* Board Exam Mastery (Grade 10) */
--accent: #F59E0B;  /* Amber */
--bg: #FFFBEB;
```

#### PUC Streams
```css
/* Science (PCMB/PCMC) */
--stream-color: #3B82F6;
--stream-bg: #EFF6FF;
--gradient: linear-gradient(135deg, #3B82F6, #6366F1);

/* Commerce (Accounts/Business/Economics) */
--stream-color: #10B981;
--stream-bg: #ECFDF5;
--gradient: linear-gradient(135deg, #10B981, #14B8A6);

/* Arts (Humanities/Social Sciences) */
--stream-color: #A855F7;
--stream-bg: #FAF5FF;
--gradient: linear-gradient(135deg, #A855F7, #EC4899);
```

### Gradient Combinations

#### Primary Button Gradient
```css
background: linear-gradient(135deg, #3B82F6, #2563EB);
hover: linear-gradient(135deg, #2563EB, #1E40AF);
```

#### Hero Plasma Gradient (Animated)
```css
background: linear-gradient(
    120deg,
    #020617 0%,
    #3B82F6 25%,
    #14B8A6 50%,
    #8B5CF6 75%,
    #020617 100%
);
background-size: 200% auto;
animation: plasma-flow 4s linear infinite;
```

#### Section Background Gradients
```css
/* Light gradient */
background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);

/* Blue tint */
background: linear-gradient(180deg, #FFFFFF 0%, #F0F4FF 40%, #E8F5E9 100%);

/* Warm gradient */
background: linear-gradient(120deg, var(--color-bg) 60%, #E0E7FF 100%);
```

#### Card Spotlight Gradient
```css
background: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    ${accentColor}20,
    transparent 80%
);
```

---

## 📏 Spacing & Layout

### 8-Point Spacing System

#### Base Units
```css
--space-1: 0.25rem;   /* 4px  - Micro spacing */
--space-2: 0.5rem;    /* 8px  - Tight spacing */
--space-3: 0.75rem;   /* 12px - Small gap */
--space-4: 1rem;      /* 16px - Base unit ★ */
--space-5: 1.25rem;   /* 20px - Element gap */
--space-6: 1.5rem;    /* 24px - Component gap */
--space-8: 2rem;      /* 32px - Section gap */
--space-10: 2.5rem;   /* 40px - Large gap */
--space-12: 3rem;     /* 48px - Section padding */
--space-16: 4rem;     /* 64px - Large padding */
--space-20: 5rem;     /* 80px - Section spacing */
--space-24: 6rem;     /* 96px - Large section */
--space-30: 7.5rem;   /* 120px - Hero section */
```

### Section Spacing Tokens

#### Vertical Section Padding
```css
--section-padding-xs: 48px;  /* Compact sections */
--section-padding-sm: 64px;  /* Small sections */
--section-padding-md: 80px;  /* Standard sections ★ */
--section-padding-lg: 96px;  /* Large sections */
--section-padding-xl: 120px; /* Hero/CTA sections */
```

**Common Pattern**:
```css
padding: clamp(48px, 8vw, 100px) clamp(16px, 4vw, 24px);
/* Vertical: 48px → 100px */
/* Horizontal: 16px → 24px */
```

#### Section Gaps (Element Spacing)
```css
--section-gap-sm: 32px;  /* Card grids */
--section-gap-md: 48px;  /* Component spacing */
--section-gap-lg: 64px;  /* Major section breaks */
```

### 12-Column Grid System

#### Grid Configuration
```css
--grid-columns: 12;
--grid-gutter: 24px;               /* Space between columns */
--grid-margin-desktop: 32px;       /* Side margins on desktop */
--grid-margin-tablet: 20px;        /* Side margins on tablet */
--grid-margin-mobile: 16px;        /* Side margins on mobile */
--container-max: 1280px;           /* Max container width */
```

#### Container Widths
```css
/* Standard container */
max-width: 1280px;
margin: 0 auto;
padding: 0 clamp(16px, 4vw, 32px);

/* Wide container */
max-width: 1440px;

/* Narrow container (text-heavy) */
max-width: 900px;

/* Extra narrow (forms, articles) */
max-width: 600px;
```

### Common Grid Patterns

#### Two-Column Layout
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 32px;

/* Responsive: stacks on mobile */
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
```

#### Three-Column Layout (Programs)
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
gap: 32px;
```

#### Four-Column Layout (Activities)
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: clamp(24px, 3vw, 32px);

/* Mobile: 1 column */
/* Tablet: 2 columns */
/* Desktop: 4 columns */
```

#### Asymmetric Layout (Hero)
```css
display: grid;
grid-template-columns: 1.2fr 1fr;  /* Text larger than image */
gap: 48px;
align-items: center;
```

### Component-Specific Spacing

#### ActivityCard Padding
```css
/* Card body */
padding: 32px 32px 32px;  /* px-8 pb-8 pt-2 */

/* Header image */
height: 256px;  /* h-64 */

/* Internal gaps */
margin-bottom: 20px;  /* Between title and description */
gap: 16px;  /* Tag spacing */
```

#### ProgramCard Padding
```css
/* Card container */
padding: clamp(16px, 3vw, 32px);
border-radius: 24px;

/* Image section */
height: 220px;

/* Content section */
padding: 24px;
gap: 16px;  /* Element spacing */
```

#### ContactSection Layout
```css
/* Section padding */
padding: clamp(48px, 8vw, 100px) clamp(16px, 4vw, 24px);

/* Form container */
max-width: 600px;
padding: 40px 32px;  /* Desktop */
padding: 32px 24px;  /* Mobile */

/* Input spacing */
margin-bottom: 24px;

/* Info cards */
padding: 22px 20px;
gap: 12px;
```

#### Footer Spacing
```css
/* Main footer */
padding: clamp(48px, 6vw, 80px) clamp(20px, 4vw, 32px) clamp(32px, 4vw, 48px);

/* Grid gap */
gap: clamp(32px, 4vw, 48px);

/* Bottom bar */
padding-top: clamp(20px, 3vw, 28px);
```

#### Header Spacing
```css
height: 96px;  /* 24 * 4px = 6rem */
padding: 0 clamp(16px, 4vw, 24px);

/* Nav link gaps */
gap: 32px;  /* Desktop */

/* Logo elements */
gap: clamp(8px, 2vw, 16px);
```

### Border Radius System

#### Standard Radii
```css
/* Small */
border-radius: 8px;   /* Tags, small cards */
border-radius: 10px;  /* Input fields */
border-radius: 12px;  /* Buttons, badges */

/* Medium */
border-radius: 14px;  /* Medium cards */
border-radius: 16px;  /* Icon containers */
border-radius: 18px;  /* Contact cards */
border-radius: 20px;  /* Feature cards */

/* Large */
border-radius: 22px;  /* Large cards */
border-radius: 24px;  /* Main cards ★ Most common */
border-radius: 28px;  /* Extra large cards */
border-radius: 32px;  /* Hero containers */

/* Extra Large */
border-radius: 40px;  /* Activity cards (2.5rem) */

/* Pill/Circle */
border-radius: 9999px;  /* Infinite radius - pills */
border-radius: 50%;     /* Perfect circles */
```

#### Component-Specific Radii

**ActivityCard**:
```css
main-card: 40px (rounded-[2.5rem])
outer-glow: 41.6px (rounded-[2.6rem])
button: 16px (rounded-2xl)
tags: 8px (rounded-lg)
badge: 9999px (rounded-full)
```

**ProgramCard**:
```css
card: 24px
image: 24px 24px 0 0 (top corners only)
tags: 8px
age-pill: 9999px
enrollment-bar: 12px
```

**ContactSection**:
```css
form-card: 24px
inputs: 12px
info-cards: 18px
icon-wrap: 12px
button: 12px
```

---

## 🧩 Components Library

### Layout Components

#### Header
**File**: `src/components/layout/Header.jsx`

**Structure**:
```jsx
<header className="fixed top-0 z-[100]">
  <div className="max-w-[95%] mx-auto h-24">
    <Logo />
    <DesktopNavigation />
    <MobileMenuButton />
  </div>
  <MobileMenu />
</header>
```

**Styling Details**:
```css
/* Fixed position */
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 100;
height: 96px;

/* Scrolled state */
background: linear-gradient(
    to right,
    rgba(238, 242, 255, 0.95),
    rgba(243, 232, 255, 0.95),
    rgba(204, 251, 241, 0.95)
);
backdrop-filter: blur(12px);
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
border-bottom: 1px solid #C7D2FE;

/* Not scrolled */
background: linear-gradient(
    to right,
    #C7D2FE,
    #DDD6FE,
    #99F6E4
);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Top gradient line */
height: 6px;
background: linear-gradient(to right, #6366F1, #A855F7, #EC4899);
opacity: 0.9;
```

**Logo Styling**:
```css
/* Logo image */
height: clamp(48px, 10vw, 64px);
width: auto;
transition: all 0.3s ease;

/* Brand text */
font-family: 'Nunito', sans-serif;
font-size: clamp(1rem, 3vw, 1.4rem);
font-weight: 800;
letter-spacing: -0.01em;
color: var(--hero-text);

/* Subtitle */
font-size: clamp(0.65rem, 1.8vw, 0.85rem);
font-weight: 600;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--color-primary);
```

**Desktop Navigation**:
```css
/* Nav link */
font-family: 'Nunito', sans-serif;
font-weight: 700;
font-size: 16px;
color: #334155;  /* Default */
transition: color 0.3s;

/* Active state */
color: #4F46E5;  /* Indigo-600 */

/* Hover state */
color: #4F46E5;

/* Underline animation */
position: absolute;
bottom: -4px;
left: 0;
width: 0;
height: 2px;
background: linear-gradient(to right, #2563EB, #4F46E5);
transition: width 0.3s ease;

/* Hover: width 100% */
```

**Contact Button**:
```css
padding: clamp(10px, 1.5vw, 12px) clamp(18px, 3vw, 24px);
background: var(--color-primary);  /* #3B82F6 */
color: white;
border-radius: 9999px;
font-weight: 700;
font-size: clamp(0.875rem, 1.5vw, 1rem);

/* Hover */
box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);
transform: translateY(-2px);
```

**Mobile Menu**:
```css
/* Container */
position: absolute;
top: 96px;
left: 0;
right: 0;
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(24px);
border-top: 1px solid #EEF2FF;
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
max-height: calc(100vh - 96px);
overflow-y: auto;

/* Menu item */
padding: 12px 16px;
font-weight: 700;
font-size: 16px;
border-left: 4px solid transparent;
transition: all 0.3s;

/* Active item */
background: #4F46E5;
color: white;
border-left-color: #4338CA;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Inactive hover */
border-left-color: #A5B4FC;
background: #EEF2FF;
color: #4F46E5;

/* Active indicator (dot) */
content: '●';
color: white;
opacity: 1;

/* Hover indicator (arrow) */
content: '→';
color: #A5B4FC;
opacity: 0;
/* opacity: 1 on hover */
```

---

#### Footer
**File**: `src/components/layout/Footer.jsx`

**Structure**:
```jsx
<footer style={{ backgroundColor: '#0F172A' }}>
  <div className="main-content">
    <BrandColumn />
    <ProgramsColumn />
    <QuickLinksColumn />
    <ContactColumn />
  </div>
  <BottomBar>
    <SocialLinks />
    <Copyright />
  </BottomBar>
</footer>
```

**Main Footer Styling**:
```css
background-color: #0F172A;  /* Dark slate */
color: #F8FAFC;
padding: clamp(48px, 6vw, 80px) clamp(20px, 4vw, 32px) clamp(32px, 4vw, 48px);

/* Grid layout */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
gap: clamp(32px, 4vw, 48px);
margin-bottom: clamp(36px, 4vw, 48px);
```

**Brand Column**:
```css
/* Logo */
height: clamp(40px, 5vw, 52px);
width: auto;
border-radius: 8px;

/* Brand title */
font-family: 'Nunito', sans-serif;
font-size: clamp(1.05rem, 1.5vw, 1.2rem);
font-weight: 800;
letter-spacing: -0.01em;
color: #F8FAFC;

/* Subtitle */
font-size: clamp(0.72rem, 0.9vw, 0.78rem);
font-weight: 600;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #60A5FA;  /* Blue-400 */

/* Tagline */
font-size: clamp(0.8rem, 1vw, 0.88rem);
line-height: 1.6;
color: #94A3B8;  /* Slate-400 */
```

**Section Title**:
```css
font-family: 'Nunito', sans-serif;
font-size: clamp(0.82rem, 1.1vw, 0.92rem);
font-weight: 700;
color: #E2E8F0;  /* Slate-200 */
letter-spacing: 0.08em;
text-transform: uppercase;
margin-bottom: 18px;
line-height: 1.3;
```

**Footer Links**:
```css
/* Link */
font-family: 'Nunito', 'Inter', sans-serif;
color: #CBD5E1;  /* Slate-300 */
text-decoration: none;
font-size: clamp(0.875rem, 1.1vw, 0.95rem);
line-height: 1.5;
letter-spacing: 0.005em;
display: inline-flex;
align-items: center;
gap: 6px;
position: relative;
padding-bottom: 2px;
transition: color 0.25s ease;

/* Hover */
color: #E2E8F0;  /* Slate-200 */

/* Arrow indicator */
display: inline-block;
font-size: 0.7em;
color: #94A3B8;
transition: transform 0.25s ease, color 0.25s ease;

/* Animated underline */
position: absolute;
bottom: 0;
left: 14px;
right: 0;
height: 1px;
background: linear-gradient(90deg, #3B82F6, #10B981);
transform-origin: left;
transform: scaleX(0);
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover: scaleX(1) */
```

**Contact Row**:
```css
/* Icon wrapper */
display: flex;
width: 28px;
height: 28px;
border-radius: 8px;
background: rgba(59, 130, 246, 0.08);
align-items: center;
justify-content: center;

/* Icon */
width: 15px;
height: 15px;
stroke: #94A3B8;

/* Text/Link */
color: #CBD5E1;
font-size: clamp(0.875rem, 1.1vw, 0.95rem);
line-height: 1.6;
letter-spacing: 0.005em;
transition: color 0.25s ease;

/* Hover */
color: #F1F5F9;
```

**Bottom Bar**:
```css
border-top: 1px solid rgba(148, 163, 184, 0.1);
padding-top: clamp(20px, 3vw, 28px);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
gap: 16px;

/* Copyright text */
font-size: clamp(0.8rem, 0.95vw, 0.88rem);
color: #94A3B8;
```

**Social Links**:
```css
/* Container */
display: flex;
gap: 16px;

/* Link */
display: flex;
align-items: center;
justify-content: center;
width: 36px;
height: 36px;
border-radius: 8px;
background: rgba(148, 163, 184, 0.1);
color: #CBD5E1;
transition: all 0.3s ease;

/* Hover */
background: #3B82F6;
color: white;
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
```

---

### Common Components

#### SectionHeading
**File**: `src/components/common/SectionHeading.jsx`

**Props**:
```jsx
subtitle: string;       // "Our Story", "Our Programs"
title: string;          // Main heading (required)
description: string;    // Optional description
align: 'left' | 'center' | 'right';  // Default: 'center'
className: string;      // Additional classes
```

**Styling**:
```css
/* Container */
text-align: center;  /* or left/right */
margin-bottom: 64px;

/* Subtitle */
font-size: 0.875rem;  /* 14px */
font-weight: 600;
color: var(--color-primary);  /* #3B82F6 */
text-transform: uppercase;
letter-spacing: 0.05em;
display: block;
margin-bottom: 12px;

/* Title */
font-size: clamp(2rem, 4vw, 3rem);  /* 32px → 48px */
line-height: 1.1;
color: var(--color-neutral-900);  /* #0F172A */
margin: 0;

/* Description */
color: var(--color-neutral-700);  /* #334155 */
max-width: 600px;
margin: 16px auto 0;  /* Centers when align="center" */
line-height: 1.6;
```

**Usage Example**:
```jsx
<SectionHeading
  subtitle="Our Educational Path"
  title="Curriculum for Every Stage"
  description="Scientifically calibrated educational stages designed to maximize cognitive potential."
  align="center"
/>
```

---

#### ProgramCard
**File**: `src/components/common/ProgramCard.jsx`

**Props**:
```jsx
title: string;          // "Pre-School", "Primary School"
age: string;            // "Ages 1.5 - 5.5"
description: string;    // Program description
tags: string[];         // ["Joyful Learning", "Creative Play"]
image: string;          // Image path
color: string;          // Accent color (CSS variable or hex)
enrollment: number;     // 92 (percentage)
className: string;      // Additional classes
```

**3D Tilt Effect**:
```jsx
/* Motion values */
x: useMotionValue(0);
y: useMotionValue(0);

/* Spring physics */
stiffness: 300;
damping: 30;

/* Rotation transforms */
rotateX: [-0.5, 0.5] → ["9deg", "-9deg"]
rotateY: [-0.5, 0.5] → ["-9deg", "9deg"]

/* Spotlight positioning */
spotlightX: [-0.5, 0.5] → ["0%", "100%"]
spotlightY: [-0.5, 0.5] → ["0%", "100%"]
```

**Card Structure Styling**:
```css
/* Outer container */
perspective: 1200px;
transform-style: preserve-3d;

/* Card */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px);
border-radius: 24px;
border: 1px solid rgba(255, 255, 255, 0.6);
box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.5s;

/* Hover */
box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.15);
```

**Spotlight Effect**:
```css
position: absolute;
inset: 0;
z-index: 0;
border-radius: 24px;
background: radial-gradient(
    circle at ${spotlightX} ${spotlightY},
    ${color}20,  /* 20% opacity */
    transparent 80%
);
opacity: 0;

/* Hover: opacity 1 */
```

**Image Section**:
```css
/* Container */
height: 220px;
position: relative;
border-radius: 24px 24px 0 0;
overflow: hidden;
transform: translateZ(30px);  /* 3D depth */
transform-style: preserve-3d;

/* Image */
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.8s;

/* Hover: scale 1.15 */

/* Gradient overlay */
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 60%;
background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    transparent 100%
);
```

**Age Pill**:
```css
position: absolute;
top: 64px;
left: 64px;
transform: translateZ(20px);  /* Parallax */
background: rgba(255, 255, 255, 0.95);
padding: 6px 14px;
border-radius: 9999px;
font-size: 0.75rem;
font-weight: 800;
color: ${color};
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
backdrop-filter: blur(8px);
```

**Content Section**:
```css
/* Container */
padding: clamp(16px, 3vw, 32px);
display: flex;
flex-direction: column;
gap: 16px;

/* Title */
font-size: clamp(1.25rem, 3vw, 1.75rem);
font-weight: 800;
letter-spacing: -0.02em;
line-height: 1.1;
text-align: center;
color: var(--color-neutral-900);
transform: translateZ(60px);  /* Max 3D depth */

/* Description */
font-size: clamp(0.9rem, 2vw, 1rem);
line-height: 1.6;
color: #334155;
text-align: center;
transform: translateZ(40px);
```

**Tags**:
```css
display: flex;
flex-wrap: wrap;
gap: 8px;
justify-content: center;
transform: translateZ(50px);

/* Tag */
font-size: 0.75rem;
font-weight: 700;
color: ${color};
background: ${color}10;  /* 10% opacity */
padding: 6px 12px;
border-radius: 8px;
border: 1px solid ${color}25;  /* 25% opacity */
white-space: nowrap;
```

**Enrollment Bar**:
```css
/* Container */
background: #F1F5F9;
border-radius: 12px;
padding: 12px;
transform: translateZ(45px);

/* Text */
font-size: 0.8rem;
font-weight: 600;
color: var(--color-neutral-700);
margin-bottom: 8px;

/* Progress bar track */
background: #F1F5F9;
height: 6px;
border-radius: 9999px;
overflow: hidden;

/* Progress bar fill */
background: linear-gradient(90deg, ${color}, ${color}CC);
height: 100%;
border-radius: 9999px;
box-shadow: 0 0 10px ${color}60;

/* Animation */
initial: { width: 0 }
animate: { width: `${enrollment}%` }
transition: { duration: 1, ease: "circOut", delay: 0.2 }
```

---

#### ActivityCard
**File**: `src/components/common/ActivityCard.jsx`

**Props**:
```jsx
title: string;          // "Creative Arts"
description: string;    // Activity description
image: string;          // Image path
tags: string[];         // ["Painting", "Music"]
theme: {
  primary: string;      // Tailwind class (bg-rose-500)
  secondary: string;    // Text color (text-rose-600)
  gradient: string;     // Background gradient
  soft: string;         // Light background (bg-rose-50)
  strongBorder: string; // Border (border-rose-500)
  shadow: string;       // Shadow color
  icon: string;         // Icon color (text-rose-500)
};
details: string;        // Extended description
className: string;
```

**Card Structure**:
```css
/* Outer container */
overflow: visible;
border-radius: 40px;  /* rounded-[2.5rem] */
transition: all 0.5s ease;

/* Initial animation */
initial: { opacity: 0, y: 50 }
animate: { opacity: 1, y: 0 }
viewport: { once: true, margin: "-50px" }

/* Hover spring */
whileHover: { y: -12 }
spring: { stiffness: 300, damping: 20 }
```

**Double Border Layer**:
```css
/* Outer border */
position: absolute;
inset: -2px;
border-radius: 41.6px;  /* rounded-[2.6rem] */
background: linear-gradient(to bottom right, white, transparent);
border: 1px solid #F1F5F9;
transition: border-color 0.5s;

/* Hover: border transparent */
```

**Colored Glow Effect**:
```css
position: absolute;
inset: -4px;
border-radius: 41.6px;
background: ${theme.primary};
filter: blur(32px);
opacity: 0;
transition: opacity 0.5s;

/* Hover: opacity 1 */
```

**Image Header**:
```css
/* Container */
position: relative;
height: 256px;  /* h-64 */
border-radius: 40px 40px 0 0;
overflow: hidden;

/* Image */
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.8s ease-out;

/* Hover */
scale: 1.12;
rotate: 1deg;

/* Gradient overlay */
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 50%;
background: linear-gradient(
    to top,
    white 0%,
    transparent 100%
);

/* Color overlay (hover) */
position: absolute;
inset: 0;
background: linear-gradient(
    135deg,
    ${theme.gradient}
);
opacity: 0;
transition: opacity 0.5s;

/* Hover: opacity 0.3 */
```

**Badge**:
```css
position: absolute;
top: 20px;
left: 20px;
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.8);
border: 1px solid rgba(255, 255, 255, 0.6);
font-size: 0.75rem;
font-weight: 700;
padding: 8px 16px;
border-radius: 9999px;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
z-index: 10;

/* Icon */
width: 14px;
height: 14px;
```

**Body Content**:
```css
/* Container */
padding: 8px 32px 32px;  /* px-8 pb-8 pt-2 */
position: relative;
z-index: 10;

/* Background gradient (hover) */
position: absolute;
inset: 0;
background: ${theme.gradient};
opacity: 0;
transition: opacity 0.5s;

/* Hover: opacity 1 */
```

**Title**:
```css
font-size: 1.5rem;  /* text-2xl */
font-weight: 800;
letter-spacing: -0.025em;
color: #0F172A;
margin-bottom: 12px;
transition: color 0.3s;

/* Hover */
color: #1E293B;
```

**Underline Accent**:
```css
height: 4px;
width: 48px;
border-radius: 9999px;
background: currentColor;
color: ${theme.icon};
opacity: 0.5;
transition: all 0.3s ease;
margin-bottom: 16px;

/* Hover */
width: 80px;
opacity: 1;
```

**Description**:
```css
color: #475569;  /* text-slate-600 */
margin-bottom: 24px;
line-height: 1.625;  /* leading-relaxed */
font-weight: 500;
```

**Tags Row**:
```css
/* Container */
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-bottom: 24px;

/* Tag */
font-size: 0.75rem;
font-weight: 700;
padding: 6px 12px;  /* px-3 py-1.5 */
border-radius: 8px;  /* rounded-lg */
border: 1px solid;
border-color: ${theme.accent};
color: ${theme.secondary};
background: ${theme.soft};
```

**Button**:
```css
width: 100%;
border-radius: 16px;  /* rounded-2xl */
padding: 14px 24px;  /* py-3.5 px-6 */
font-weight: 700;
font-size: 0.875rem;
color: white;
background: linear-gradient(135deg, ${theme.primary}, ${theme.strongBorder});
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

/* Hover */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
scale: 1.02;

/* Arrow icon */
width: 16px;
height: 16px;
transition: transform 0.3s ease;

/* Hover: rotate -45deg */
```

---

#### WhatsAppWidget
**File**: `src/components/common/WhatsAppWidget.jsx`

**Configuration**:
```jsx
const PHONE_NUMBER = '919008009830';  // +91 90080 09830
const DEFAULT_MESSAGE = 'Hi! I would like to know more about London Kids Pre-School admissions.';
```

**Container Styling**:
```css
/* Fixed position */
position: fixed;
bottom: clamp(20px, 4vw, 32px);
right: clamp(20px, 4vw, 32px);
z-index: 9999;

/* Entrance animation */
initial: {
  opacity: 0;
  scale: 0.5;
  y: 30;
}
animate: {
  opacity: 1;
  scale: 1;
  y: 0;
}
transition: {
  delay: 2.2s;  /* Appears after 2.2 seconds */
  type: "spring";
  stiffness: 350;
  damping: 22;
}
```

**Tooltip**:
```css
/* Container */
position: absolute;
bottom: calc(100% + 12px);
right: 0;
background: #FFFFFF;
color: #1E293B;
font-size: 0.82rem;
font-weight: 600;
padding: 10px 16px;
border-radius: 12px;
white-space: nowrap;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
z-index: 10;

/* Arrow */
content: '';
position: absolute;
bottom: -4px;
right: 20px;
width: 12px;
height: 12px;
background: #FFFFFF;
transform: rotate(45deg);

/* Auto-show behavior */
initial: { opacity: 0, y: 10 }
show after: 3.5s
hide after: 8s (from mount)
```

**Button**:
```css
position: relative;
width: 60px;
height: 60px;
border-radius: 50%;
border: none;
background: linear-gradient(135deg, #25D366, #128C7E);
box-shadow: 0 4px 18px rgba(37, 211, 102, 0.35);
cursor: pointer;
transition: all 0.3s ease;
z-index: 1;

/* Hover */
transform: scale(1.1) rotate(5deg);
box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
```

**Pulse Ring**:
```css
/* Keyframe */
@keyframes wa-pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}

/* Styling */
position: absolute;
inset: -4px;
border: 2px solid rgba(37, 211, 102, 0.25);
border-radius: 50%;
animation: wa-pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

**Icon**:
```css
width: 30px;
height: 30px;
fill: white;
filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
```

**WhatsApp Link Format**:
```jsx
https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}
```

---

### Hero Components

#### Hero (Home Page)
**File**: `src/components/Hero.jsx`

**Structure**:
```jsx
<section id="hero" className="section--hero">
  <BackgroundGradient />
  <Canvas3D>
    <EtherealBackground />
  </Canvas3D>
  <HeroContent>
    <FounderImage position="left" />
    <CenterContent>
      <KannadaSubtitle />
      <MainHeading />
      <Description />
      <CTAButtons />
      <StatsRow />
    </CenterContent>
    <FounderImage position="right" />
  </HeroContent>
</section>
```

**Section Styling**:
```css
text-align: center;
position: relative;
overflow: hidden auto;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: clamp(96px, 15vh, 120px);
padding-bottom: clamp(40px, 8vh, 60px);
```

**Background Gradient**:
```css
position: absolute;
inset: 0;
background: radial-gradient(
    circle at 50% 50%,
    #F8FAFC 0%,
    #E2E8F0 100%
);
z-index: -2;
```

**3D Canvas Settings**:
```jsx
camera={{ position: [0, 0, 15], fov: 35 }}
gl={{
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
  stencil: false,
  depth: false,
}}
dpr={[1, 1.5]}  /* Device pixel ratio */
performance={{ min: 0.5 }}
```

**Ethereal Background (3D)**:
```jsx
/* Sparkles */
count: 60
scale: 25
size: 4
speed: 0.4
opacity: 0.4
color: #6366F1  /* Indigo */

/* Secondary sparkles */
count: 40
scale: 20
size: 6
speed: 0.3
opacity: 0.25
color: #F59E0B  /* Amber */

/* Floating orbs */
position: [-6, 4, -5]
color: #A5B4FC  /* Indigo-300 */
speed: 1.5
scale: 1.5

position: [7, -5, -8]
color: #FCD34D  /* Amber-300 */
speed: 1.2
scale: 2
```

**Founder Images**:
```css
/* Container */
position: absolute;
top: 20px;
left: 20px;  /* or right: 20px */
width: 280px;
max-width: 18vw;
z-index: 1;

/* Floating animation */
animate: { y: [0, -12, 0] }
transition: {
  repeat: Infinity;
  duration: 5;
  ease: "easeInOut";
}

/* Image */
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
border-radius: 24px;
box-shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.3);
border: 4px solid white;
```

**Kannada Subtitle**:
```css
font-family: 'Noto Sans Kannada', sans-serif;
font-size: clamp(1.2rem, 3.5vw, 2.2rem);
font-weight: 800;
line-height: 1.6;
color: var(--color-primary);  /* #3B82F6 */
margin-bottom: clamp(12px, 2vh, 20px);
text-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
```

**Main Heading**:
```css
font-size: clamp(3rem, 7vw, 5rem);  /* 48px → 80px */
line-height: 1.1;
letter-spacing: -0.03em;
margin-bottom: clamp(20px, 3vh, 28px);
color: var(--color-neutral-900);
font-weight: 900;

/* Gradient text (animated) */
background: linear-gradient(
    120deg,
    #020617 0%,
    #3B82F6 25%,
    #14B8A6 50%,
    #8B5CF6 75%,
    #020617 100%
);
background-size: 200% auto;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
animation: plasma-flow 4s linear infinite;

@keyframes plasma-flow {
  0% { background-position: 0% center; }
  100% { background-position: -200% center; }
}
```

**Description**:
```css
font-size: clamp(1.05rem, 2.5vw, 1.3rem);
line-height: 1.6;
color: var(--color-neutral-700);
max-width: 720px;
margin: 0 auto clamp(28px, 4vh, 40px);
```

**CTA Buttons Container**:
```css
display: flex;
gap: clamp(12px, 2vw, 20px);
justify-content: center;
flex-wrap: wrap;
margin-bottom: clamp(40px, 6vh, 64px);
```

**Primary Button (Magnetic)**:
```css
/* Base */
padding: clamp(14px, 2vw, 18px) clamp(24px, 4vw, 40px);
background: linear-gradient(135deg, #3B82F6, #2563EB);
color: white;
border: none;
border-radius: 12px;
font-weight: 700;
font-size: clamp(0.95rem, 1.8vw, 1.1rem);
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 8px 20px -6px rgba(59, 130, 246, 0.4);

/* Magnetic effect */
x: mouseXSpring;  /* Spring animation based on mouse */
y: mouseYSpring;

/* Hover */
box-shadow: 0 12px 28px -6px rgba(59, 130, 246, 0.5);
transform: translateY(-2px);

/* Shine effect */
::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
      110deg,
      transparent 40%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0.6s;
}

/* Hover: translateX(100%) */
```

**Secondary Button**:
```css
padding: clamp(14px, 2vw, 18px) clamp(24px, 4vw, 40px);
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(8px);
color: var(--color-primary);
border: 2px solid rgba(59, 130, 246, 0.3);
border-radius: 12px;
font-weight: 700;
font-size: clamp(0.95rem, 1.8vw, 1.1rem);
transition: all 0.3s ease;

/* Hover */
background: #3B82F6;
color: white;
border-color: #3B82F6;
transform: translateY(-2px);
```

**Stats Row**:
```css
/* Container */
display: flex;
gap: clamp(24px, 4vw, 48px);
justify-content: center;
flex-wrap: wrap;

/* Stat item */
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(10px);
padding: clamp(16px, 2.5vw, 24px) clamp(20px, 3vw, 32px);
border-radius: 16px;
border: 1px solid rgba(255, 255, 255, 0.8);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
min-width: 140px;
text-align: center;

/* Value */
font-size: clamp(1.8rem, 4vw, 2.5rem);
font-weight: 900;
color: var(--color-primary);
line-height: 1;
display: block;

/* Label */
font-size: clamp(0.75rem, 1.5vw, 0.9rem);
color: var(--color-neutral-600);
margin-top: 8px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
```

---

#### PreSchoolHero
**File**: `src/components/PreSchoolHero.jsx`

**Similar structure to main Hero with these differences**:

**Main Heading**:
```css
font-size: clamp(2.8rem, 6vw, 4.5rem);
/* Preschool-specific: "Where Learning Begins with Joy" */
```

**Color Scheme**:
```css
/* More playful, warmer colors */
--hero-accent: #EC4899;  /* Pink */
--hero-secondary: #F59E0B;  /* Amber */
background: radial-gradient(
    circle at 50% 50%,
    #FEF7ED 0%,  /* Warm cream */
    #FCE7F3 100%  /* Light pink */
);
```

**Stats**:
```jsx
{ value: '500+', label: 'Happy Families' }
{ value: '15', label: 'Years Experience' }
{ value: '12', label: 'Expert Teachers' }
```

---

#### PrimarySchoolHero  
**File**: `src/components/PrimarySchoolHero.jsx`

**Uses SCSS Module**: `src/styles/PrimarySchoolHero.module.scss`

**Board Cards** (4 cards in grid):
```css
/* Card base */
background: rgba(255, 255, 255, 0.88);
backdrop-filter: blur(16px) saturate(180%);
border-radius: 22px;
padding: 30px 22px;
text-align: center;
border: 1.5px solid transparent;
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

/* Float animation (per card) */
animation: ps-float-0 4.5s ease-in-out infinite;  /* Card 0 */
animation: ps-float-1 5.2s ease-in-out infinite 0.6s;  /* Card 1 */
animation: ps-float-2 3.8s ease-in-out infinite 1.2s;  /* Card 2 */
animation: ps-float-3 5.8s ease-in-out infinite 0.3s;  /* Card 3 */

@keyframes ps-float-0 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Hover state */
background: rgba(255, 255, 255, 0.96);
transform: translateY(-8px) scale(1.03);
border-color: rgba(${accent}, 0.35);
box-shadow: 0 16px 44px rgba(${accent}, 0.2);
```

**Board Accents**:
```scss
/* CBSE Foundation (Grades 1-4) */
--accent: #3B82F6;  /* Blue */
--bg: #EFF6FF;

/* ICSE Intermediate (Grades 5-7) */
--accent: #8B5CF6;  /* Violet */
--bg: #F5F3FF;

/* State Advanced (Grades 8-9) */
--accent: #10B981;  /* Emerald */
--bg: #ECFDF5;

/* Board Exam (Grade 10) */
--accent: #F59E0B;  /* Amber */
--bg: #FFFBEB;
```

**Icon Container**:
```css
width: 52px;
height: 52px;
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto 20px;
background: transparent;
will-change: transform;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* Icon specific animations on hover */
/* Cap toss */
animation: icon-cap-toss 0.9s ease-in-out;

/* Atom orbit */
animation: icon-atom-orbit 3s linear infinite;

/* Landmark rise */
animation: icon-landmark-rise 1.2s ease-in-out infinite;

/* Trophy bounce */
animation: icon-trophy-bounce 1s ease-in-out;
```

**Shimmer Border**:
```css
/* Border overlay */
position: absolute;
inset: 0;
border-radius: 22px;
padding: 1.5px;
background: linear-gradient(
    110deg,
    transparent 0%,
    transparent 40%,
    rgba(${accent}, 0.5) 50%,
    transparent 60%,
    transparent 100%
);
background-size: 200% 100%;
opacity: 0;
transition: opacity 0.5s;
animation: ps-shimmer-sweep 3s linear infinite;

/* Hover: opacity 1 */

@keyframes ps-shimmer-sweep {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
```

**Title**:
```css
font-size: clamp(1.1rem, 2vw, 1.4rem);
font-weight: 700;
letter-spacing: -0.01em;
color: ${accent};
margin-bottom: 6px;
```

**Subtitle (Grades)**:
```css
font-size: clamp(0.88rem, 1.5vw, 1rem);
font-weight: 600;
color: #64748B;
margin-bottom: 14px;
```

**Description**:
```css
font-size: clamp(0.82rem, 1.3vw, 0.92rem);
line-height: 1.6;
color: #475569;
```

---

#### PUCHeroSection
**File**: `src/components/PUCHeroSection.jsx`

**Uses SCSS Module**: `src/styles/PUCHero.module.scss`

**Similar structure to PrimarySchoolHero but with 3 stream cards**:

**Stream Cards**:
```css
/* Science */
--accent: #3B82F6;
--bg: #EFF6FF;
icon: Flask with bubbles
animation: icon-flask-bubble 1s ease-in-out;

/* Commerce */
--accent: #10B981;
--bg: #ECFDF5;
icon: Dollar sign
animation: icon-dollar-spin 0.8s ease-in-out;

/* Arts */
--accent: #A855F7;
--bg: #FAF5FF;
icon: Eye/Vision
animation: icon-eye-open 1.1s ease-in-out infinite;
```

**Float Configs**:
```scss
/* Amplitude, duration, delay */
Card 0 (Science): -9px, 4.2s, 0s
Card 1 (Commerce): -12px, 5.5s, 0.5s
Card 2 (Arts): -7px, 3.6s, 1s
```

**Hover Transform**:
```css
transform: translateY(-10px) scale(1.04);
border-color: rgba(${accent}, 0.4);
box-shadow: 0 18px 48px rgba(${accent}, 0.22);
```

---

## 📄 Pages Breakdown

### Home Page
**File**: `src/pages/Home.jsx`

**Structure**:
```jsx
<main style={{ overflow: 'hidden' }}>
  <Hero />
  <StackingSection>
    <VisionMissionSection />
  </StackingSection>
  <StackingSection>
    <LeadershipMessage />
  </StackingSection>
  <StackingSection>
    <ProgramsSection />
  </StackingSection>
  <StackingSection>
    <CTASection />
  </StackingSection>
</main>
```

**Sections**:

1. **Hero** - Main landing section with 3D elements
2. **VisionMissionSection** - SKTEC Trust vision
3. **LeadershipMessage** - Founders' message
4. **Programs** - Three main programs (Pre-School, Primary, PUC)
5. **CTASection** - Call to action

**Programs Data** (`src/data/homeData.jsx`):
```jsx
[
  {
    id: 'preschool',
    title: 'Pre-School',
    age: 'Ages 1.5 - 5.5',
    description: 'A world of wonder where curiosity meets structured play.',
    tags: ['Joyful Learning', 'Creative Play', 'Early Confidence'],
    enrollment: 98,
    image: '/images/programs/program-toddler.jpg',
    color: 'var(--color-warm)'  /* Pink */
  },
  {
    id: 'primary',
    title: 'Primary School',
    age: 'Grades 1 - 7',
    description: 'Where potential turns into capability.',
    tags: ['Core Mastery', 'Creative Voice', 'Global Outlook'],
    enrollment: 95,
    image: '/images/programs/program-preschool.jpg',
    color: 'var(--color-primary)'  /* Blue */
  },
  {
    id: 'puc',
    title: 'Pre-University (PUC)',
    age: 'Grades 11 - 12',
    description: 'The launchpad for future leaders.',
    tags: ['Elite Mentorship', 'Academic Excellence', 'Future Leaders'],
    enrollment: 92,
    image: '/images/programs/program-prek.jpg',
    color: 'var(--color-accent)'  /* Yellow */
  }
]
```

---

### About Page
**File**: `src/pages/About.jsx`

**Structure**:
```jsx
<div style={{ paddingTop: '96px' }}>
  <HeroSection />
  <VisionMissionSection />
  <LeadershipSection>
    <PrincipalProfile />
    <DirectorProfile />
  </LeadershipSection>
  <AboutGallerySection />
</div>
```

**Hero Section**:
```css
padding: clamp(40px, 6vw, 80px) clamp(16px, 4vw, 24px);
text-align: center;
background: linear-gradient(120deg, var(--color-bg) 60%, #E0E7FF 100%);
position: relative;
overflow: hidden;
```

**Blobs (Background)**:
```css
/* Blob 1 */
width: min(500px, 80vw);
height: min(500px, 80vw);
background: linear-gradient(135deg, var(--color-accent), #FFAB91);
position: absolute;
top: -200px;
left: -100px;
opacity: 0.4;
border-radius: 50%;
filter: blur(80px);
animation: blob-morph 20s ease-in-out infinite alternate;

/* Blob 2 */
width: min(400px, 70vw);
height: min(400px, 70vw);
background: linear-gradient(135deg, #93C5FD, #818CF8);
bottom: -100px;
right: -100px;
opacity: 0.4;
animation-delay: -5s;
```

**Leadership Profile Layout**:
```css
/* Container */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
gap: clamp(24px, 4vw, 60px);
align-items: center;
margin-bottom: clamp(48px, 8vw, 100px);

/* Image wrapper */
position: relative;

/* Background accent */
position: absolute;
inset: 10px -10px -10px 10px;  /* Offset  */
background: #E0E7FF;  /* Light indigo */
border-radius: 24px;
z-index: -1;

/* Image */
width: 100%;
height: clamp(350px, 50vw, 550px);
object-fit: cover;
object-position: center 15%;
border-radius: 24px;
background-color: #F8FAFC;
box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
```

**Leadership Text**:
```css
/* Label */
color: var(--color-primary);
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.05em;
display: block;
margin-bottom: 8px;

/* Heading */
font-size: clamp(1.5rem, 3.5vw, 2.25rem);
margin-bottom: 24px;
color: var(--color-neutral-900);

/* Paragraph */
color: var(--color-neutral-700);
line-height: 1.8;
margin-bottom: 16px;

/* Signature */
font-family: 'Nothing You Could Do', cursive;
font-size: 1.125rem;
color: var(--color-primary);
margin-top: 16px;
```

---

### PreSchool Page
**File**: `src/pages/PreSchool.jsx`

**Structure**:
```jsx
<div style={{ paddingTop: '96px' }}>
  <PreSchoolHero />
  <StackingSection>
    <ProgramsSection />  {/* 4 programs: Playgroup, Nursery, LKG, UKG */}
  </StackingSection>
  <StackingSection>
    <ActivitiesSection />  {/* 8 activity cards */}
  </StackingSection>
  <StackingSection>
    <PreschoolResultsSection />
  </StackingSection>
  <StackingSection>
    <FeaturesSection />  {/* 3 features */}
  </StackingSection>
  <StackingSection>
    <PreschoolContactSection />
  </StackingSection>
</div>
```

**Programs Data** (`src/data/preschoolData.jsx`):
```jsx
[
  {
    id: 'playgroup',
    title: 'Playgroup',
    age: 'Ages 1.5 - 2.5',
    tags: ['Sensory Integration', 'Social Anchoring'],
    enrollment: 92,
    color: 'var(--color-warm)'  /* Pink */
  },
  {
    id: 'nursery',
    title: 'Nursery',
    age: 'Ages 2.5 - 3.5',
    tags: ['Linguistic Architecture', 'Pattern Recognition'],
    enrollment: 96,
    color: 'var(--color-primary)'  /* Blue */
  },
  {
    id: 'lkg',
    title: 'LKG',
    age: 'Ages 3.5 - 4.5',
    tags: ['Cognitive Scaffolding', 'Fine Motor Precision'],
    enrollment: 88,
    color: 'var(--color-accent)'  /* Yellow */
  },
  {
    id: 'ukg',
    title: 'UKG',
    age: 'Ages 4.5 - 5.5',
    tags: ['Executive Function', 'Leadership Protocols'],
    enrollment: 94,
    color: 'var(--color-calm)'  /* Green */
  }
]
```

**Activities** (8 cards with colored themes):
```jsx
{
  id: 'creative-arts',
  title: 'Creative Arts',
  tags: ['Painting', 'Music', 'Crafts'],
  theme: {
    primary: 'bg-rose-500',
    secondary: 'text-rose-600',
    soft: 'bg-rose-50',
    gradient: 'from-rose-500/10 to-transparent'
  }
}
// Similar for: Story Time, Outdoor Play, Science Exploration,
// Music & Movement, Language Development, Block Building, Dramatic Play
```

**Results Section** (Infinite Scroll):
```jsx
/* Image slider */
display: flex;
gap: 24px;
animation: infinite-scroll 60s linear infinite;

@keyframes infinite-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Duplicate content for seamless loop */
[{images}, {images}]  /* Array duplicated */
```

**Features** (3 cards):
```jsx
{
  id: 'play-based',
  title: 'Play-Based Learning',
  gradient: 'linear-gradient(135deg, var(--color-primary), #2563EB)',
  bg: 'linear-gradient(135deg, #F0F4FF, #E8F5E9)'
},
{
  id: 'loving-env',
  title: 'Loving Environment',
  gradient: 'linear-gradient(135deg, #FF7A90, #F06292)',
  bg: 'linear-gradient(135deg, #FFF8E1, #FFEBEE)'
},
{
  id: 'school-readiness',
  title: 'School Readiness',
  gradient: 'linear-gradient(135deg, var(--color-calm), #22C55E)',
  bg: 'linear-gradient(135deg, #E8F5E9, #E0F7FA)'
}
```

---

### Primary School Page
**File**: `src/pages/PrimarySchool.jsx`

**Structure**:
```jsx
<div style={{ paddingTop: '96px' }}>
  <PrimarySchoolHero />
  <StackingSection>
    <TuitionProgramsSection />  {/* 4 board programs */}
  </StackingSection>
  <StackingSection>
    <StudentImpactSection />  {/* Metrics/testimonials */}
  </StackingSection>
  <StackingSection>
    <PrimaryContactSection />
  </StackingSection>
</div>
```

**Tuition Programs** (`src/data/primarySchoolData.jsx`):
```jsx
[
  {
    id: 'grade-1-4',
    title: 'Foundation',
    grades: 'Grades 1 – 4',
    boards: ['CBSE', 'ICSE', 'Karnataka State'],
    subjects: ['English', 'Mathematics', 'EVS', 'Kannada', 'Hindi'],
    accentColor: '#3B82F6',  /* Blue */
    accentBg: '#EFF6FF'
  },
  {
    id: 'grade-5-7',
    title: 'Intermediate',
    grades: 'Grades 5 – 7',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Kannada', 'Hindi'],
    accentColor: '#8B5CF6',  /* Violet */
    accentBg: '#F5F3FF'
  },
  {
    id: 'grade-8-9',
    title: 'Advanced',
    grades: 'Grades 8 – 9',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Science'],
    accentColor: '#10B981',  /* Emerald */
    accentBg: '#ECFDF5'
  },
  {
    id: 'grade-10',
    title: 'Board Exam Mastery',
    grades: 'Grade 10',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Kannada / Hindi'],
    accentColor: '#F59E0B',  /* Amber */
    accentBg: '#FFFBEB'
  }
]
```

**Student Impact Metrics**:
```jsx
{
  id: 'pass-rate',
  label: 'Board Exam Pass Rate',
  value: 98,
  suffix: '%',
  color: '#3B82F6'
},
{
  id: 'analytical',
  label: 'Analytical Thinking',
  value: 94,
  suffix: '%',
  color: '#8B5CF6'
},
{
  id: 'confidence',
  label: 'Confidence Boost',
  value: 91,
  suffix: '%',
  color: '#10B981'
}
```

---

### PreUniversity Page
**File**: `src/pages/PreUniversity.jsx`

**Structure**:
```jsx
<div style={{ paddingTop: '96px' }}>
  <PUCHeroSection />
  <StackingSection>
    <PUCStreamsSection />  {/* 3 streams: Science, Commerce, Arts */}
  </StackingSection>
  <StackingSection>
    <PUCNeuroSection />  {/* Social proof cards */}
  </StackingSection>
  <StackingSection>
    <PUCContactSection />
  </StackingSection>
</div>
```

**PUC Streams** (`src/data/preUniversityData.jsx`):
```jsx
[
  {
    id: 'science',
    title: 'Science',
    tagline: 'PCMB · PCMC',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'English', 'Kannada'],
    careerPaths: ['Engineering', 'Medicine', 'Research', 'Data Science'],
    accentColor: '#3B82F6',
    accentBg: '#EFF6FF',
    gradientFrom: '#3B82F6',
    gradientTo: '#6366F1'
  },
  {
    id: 'commerce',
    title: 'Commerce',
    tagline: 'Accounts · Business · Economics',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Statistics', 'English', 'Kannada'],
    careerPaths: ['CA/CS', 'Banking', 'MBA', 'Entrepreneurship'],
    accentColor: '#10B981',
    accentBg: '#ECFDF5',
    gradientFrom: '#10B981',
    gradientTo: '#14B8A6'
  },
  {
    id: 'arts',
    title: 'Arts',
    tagline: 'Humanities · Social Sciences',
    subjects: ['History', 'Political Science', 'Sociology', 'Psychology', 'English', 'Kannada'],
    careerPaths: ['Law', 'Civil Services', 'Journalism', 'Academia'],
    accentColor: '#A855F7',
    accentBg: '#FAF5FF',
    gradientFrom: '#A855F7',
    gradientTo: '#EC4899'
  }
]
```

**PUC Neuro Section** - Floating cards with stats:
```jsx
/* Main stats card */
position: top: 0, left: 2%
width: 54%
min-height: 440px

/* Faculty card */
position: top: 60px, right: 2%
width: 38%
min-height: 500px

/* Testimonial card */
position: top: 500px, left: 4%
width: 65%
min-height: 420px

/* Mobile: stacked vertically */
position: relative
width: 100%
```

**Social Proof Data**:
```jsx
[
  { value: '1200+', label: 'Students Enrolled This Year' },
  { value: '92%', label: 'Score Above 80% in Boards' },
  { value: '45+', label: 'Board Toppers Produced' }
]
```

---

## 🎬 Animations & Interactions

### Animation System

#### Framer Motion Settings

**Standard Page Transition**:
```jsx
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: "easeOut" }
exit: { opacity: 0, y: -20 }
```

**Stagger Children**:
```jsx
containerVariants: {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

itemVariants: {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
}
```

**Scroll-Based Animations**:
```jsx
initial: { opacity: 0, y: 50 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true, margin: "-50px" }
transition: { duration: 0.6, ease: "easeOut" }
```

### Keyframe Animations

#### Blob Morph
```css
@keyframes blob-morph {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 50%;
  }
  75% {
    border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%;
  }
}

/* Usage */
animation: blob-morph 20s ease-in-out infinite alternate;
```

#### Shine Effect
```css
@keyframes shine {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Usage on button */
::after {
  background: linear-gradient(
    110deg,
    transparent 40%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: shine 8s linear infinite;
}
```

#### Plasma Flow (Gradient Text)
```css
@keyframes plasma-flow {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: -200% center;
  }
}

/* Usage */
background: linear-gradient(120deg, ...colors);
background-size: 200% auto;
animation: plasma-flow 4s linear infinite;
```

#### Glow Pulse
```css
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(58, 141, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(58, 141, 255, 0.6),
                0 0 60px rgba(123, 211, 137, 0.3);
  }
}

/* Usage */
animation: glow-pulse 3s ease-in-out infinite;
```

#### WhatsApp Pulse Ring
```css
@keyframes wa-pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}

/* Usage */
animation: wa-pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

#### Infinite Scroll (Results Slider)
```css
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Usage */
animation: infinite-scroll 60s linear infinite;

/* Pause on hover */
&:hover {
  animation-play-state: paused;
}
```

### Spring Physics

**Standard Spring**:
```jsx
transition: {
  type: "spring",
  stiffness: 300,
  damping: 20
}
```

**Soft Spring** (gentle bounce):
```jsx
transition: {
  type: "spring",
  stiffness: 100,
  damping: 15
}
```

**Tight Spring** (quick snap):
```jsx
transition: {
  type: "spring",
  stiffness: 500,
  damping: 30
}
```

**Magnetic Button Spring**:
```jsx
const mouseXSpring = useSpring(x, {
  stiffness: 150,
  damping: 15,
  mass: 0.1
});
```

**Card Tilt Spring**:
```jsx
const mouseXSpring = useSpring(x, {
  stiffness: 300,
  damping: 30
});
```

### Hover Interactions

#### Button Hover States
```css
/* Primary button */
hover: {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px -3px rgba(58, 141, 255, 0.4);
  /* Shine sweep */
  ::after { transform: translateX(100%); }
}

/* Magnetic effect */
onMouseMove: calculate offset from center
x.set((clientX - centerX) * 0.3);
y.set((clientY - centerY) * 0.3);
```

#### Card Hover States
```css
/* ActivityCard */
whileHover: {
  y: -12,  /* Lift */
  scale: 1  /* Optional subtle scale */
}
spring: { stiffness: 300, damping: 20 }

/* ProgramCard 3D tilt */
onMouseMove: calculate normalized position
rotateX: transform Y position to degrees
rotateY: transform X position to degrees
spotlightGradient: follow mouse position
```

#### Link Hover States
```css
/* Footer link */
hover: {
  color: #E2E8F0;
  /* Underline scales in */
  transform: scaleX(1);
}

/* Header nav */
hover: {
  color: #4F46E5;
  /* Bottom border grows */
  width: 100%;
}
```

#### Image Hover States
```css
/* Standard image zoom */
whileHover: { scale: 1.05 }
transition: { duration: 0.5 }

/* Program card image */
whileHover: { scale: 1.15 }
transition: { duration: 0.8 }

/* Activity card image */
whileHover: { scale: 1.12, rotate: 1 }
transition: { duration: 0.8, ease: "easeOut" }
```

### Scroll Animations

#### useInView Hook (Framer Motion)
```jsx
const ref = useRef(null);
const isInView = useInView(ref, {
  once: true,        // Animate only once
  margin: "-60px"    // Trigger 60px before entering viewport
});

// Apply animation
animate={isInView ? "visible" : "hidden"}
```

#### Stacking Section Effect
```jsx
/* Each section stacks on top while scrolling */
position: sticky;
top: 0;
z-index: calculated based on index;
margin-top: -100vh;  /* Overlap previous section */

/* Creates parallax stacking effect */
```

### Number Counter Animation
```jsx
const count = useMotionValue(0);
const rounded = useTransform(count, Math.round);

useEffect(() => {
  if (isInView) {
    animate(count, targetValue, {
      duration: 2.5,
      ease: "circOut"
    });
  }
}, [isInView]);

// Display: <motion.span>{rounded}</motion.span>
```

---

## 📱 Responsive Design

### Breakpoint System

#### Tailwind Breakpoints
```css
/* Mobile first approach */
/* Base: 0-639px (mobile) */

sm: 640px   /* Small tablets, large phones */
md: 768px   /* Tablets, landscape phones */
lg: 1024px  /* Small laptops, large tablets */
xl: 1280px  /* Desktops, laptops */
2xl: 1536px /* Large desktops */
```

#### Common Media Queries
```css
/* Mobile only */
@media (max-width: 640px) { }

/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1024px) { }

/* Large desktop */
@media (min-width: 1280px) { }
```

### Responsive Typography

#### Fluid Typography (clamp)
```css
/* H1 */
font-size: clamp(2.5rem, 5vw, 3.5rem);
/* Mobile: 40px, scales with viewport, max: 56px */

/* H2 */
font-size: clamp(2rem, 4vw, 3rem);
/* Mobile: 32px, max: 48px */

/* Body */
font-size: clamp(0.9rem, 2vw, 1rem);
/* Mobile: 14.4px, max: 16px */

/* Buttons */
font-size: clamp(0.875rem, 1.5vw, 1rem);
/* Mobile: 14px, max: 16px */
```

### Responsive Spacing

#### Fluid Padding
```css
/* Section padding */
padding: clamp(48px, 8vw, 100px) clamp(16px, 4vw, 24px);
/* Top/Bottom: 48px → 100px */
/* Left/Right: 16px → 24px */

/* Hero padding */
padding-top: clamp(96px, 15vh, 120px);
padding-bottom: clamp(40px, 8vh, 60px);

/* Card padding */
padding: clamp(16px, 3vw, 32px);
```

#### Fluid Gaps
```css
/* Grid gap */
gap: clamp(24px, 3vw, 32px);

/* Button group gap */
gap: clamp(12px, 2vw, 20px);

/* Element gap */
gap: clamp(8px, 2vw, 16px);
```

### Responsive Layouts

#### Grid Responsive Patterns
```css
/* Auto-fit minmax */
grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
/* Creates responsive columns that never break layout */

/* Mobile: 1 column */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media (min-width: 768px) and (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Desktop: 3+ columns */
@media (min-width: 1024px) {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
```

#### Flex Responsive Patterns
```css
/* Wrapping flex */
display: flex;
flex-wrap: wrap;
gap: 24px;

/* Children auto-size */
flex: 1 1 280px;  /* Grow, shrink, base 280px */
```

### Component Responsiveness

#### Header
```css
/* Desktop: horizontal nav */
.nav { display: flex; }
.mobile-menu { display: none; }

/* Mobile: hamburger menu */
@media (max-width: 768px) {
  .nav { display: none; }
  .mobile-menu { display: block; }
}

/* Logo scales */
height: clamp(48px, 10vw, 64px);
```

#### Hero
```css
/* Desktop: founders visible */
.founder-image { display: block; }

/* Mobile: founders hidden */
@media (max-width: 1024px) {
  .founder-image { display: none; }
}

/* Heading scales */
font-size: clamp(3rem, 7vw, 5rem);
```

#### Cards
```css
/* Desktop: grid with multiple columns */
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

/* Tablet: 2 columns */
@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Mobile: 1 column */
@media (max-width: 640px) {
  grid-template-columns: 1fr;
}

/* Border radius scales */
border-radius: clamp(20px, 3vw, 40px);
```

#### Form Inputs
```css
/* Mobile: prevent zoom on focus */
@media (max-width: 640px) {
  input, select, textarea {
    font-size: 16px;  /* Minimum to prevent iOS zoom */
  }
}

/* Full width on mobile */
width: 100%;

/* Padding adjusts */
padding: clamp(12px, 2vw, 16px);
```

### Mobile-Specific Optimizations

#### Touch Targets
```css
/* Minimum 44x44px for touch */
min-width: 44px;
min-height: 44px;
padding: 12px;
```

#### Mobile Menu
```css
/* Full viewport height minus header */
max-height: calc(100vh - 96px);
overflow-y: auto;

/* Smooth scrolling */
-webkit-overflow-scrolling: touch;

/* Active state highlighting */
.active {
  background: #4F46E5;
  color: white;
  border-left: 4px solid #4338CA;
}
```

#### Images
```css
/* Prevent overflow */
max-width: 100%;
height: auto;

/* Lazy loading */
loading="lazy"
decoding="async"

/* Reduced size on mobile */
@media (max-width: 640px) {
  height: clamp(200px, 40vw, 300px);
}
```

#### Animations
```css
/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔧 Technical Stack

### Core Technologies

#### Frontend Framework
```json
"react": "19.2.4"
```
- **Latest stable React** with concurrent features
- **Hooks-based architecture** (useState, useEffect, useRef, custom hooks)
- **Function components only** (no class components)

#### Build Tool
```json
"vite": "7.3.1"
```
- **Lightning-fast HMR** (Hot Module Replacement)
- **Optimized builds**: 820KB JS + 67KB CSS
- **ES modules** native support
- **Code splitting** automatic

#### Routing
```json
"react-router-dom": "^7.2.0"
```
- **Client-side routing** with `<BrowserRouter>`
- **Routes**: Home, About, PreSchool, PrimarySchool, PreUniversity, Contact
- **useLocation()** hook for active page detection
- **Link** components for navigation

### Styling

#### CSS Framework
```json
"tailwindcss": "^3.4.18"
```
- **Utility-first CSS**
- **Custom config**: `tailwind.config.js`
- **JIT mode**: On-demand class generation
- **Custom colors, animations, keyframes**

#### SCSS Preprocessor
```json
"sass": "^2.3.0"
```
- **SCSS modules** for component-specific styles
- **Variables, nesting, mixins**
- **Files**: `main.scss`, `PUCHero.module.scss`, `PrimarySchoolHero.module.scss`, etc.

#### PostCSS
```json
"postcss": "^8.5.2"
"autoprefixer": "^10.4.21"
```
- **Vendor prefix automation**
- **CSS optimization**

### Animation Libraries

#### Framer Motion
```json
"framer-motion": "^12.5.0"
```
- **Declarative animations**
- **Variants & orchestration**
- **Scroll-based animations** (`useInView`)
- **Spring physics**
- **Gesture handling**

**Key Hooks**:
```jsx
useMotionValue()      // Track values
useSpring()           // Spring physics
useTransform()        // Transform values
useInView()           // Scroll detection
animate()             // Imperative animations
```

#### 3D Graphics
```json
"three": "^0.171.0"
"@react-three/fiber": "^6.0.0"  
"@react-three/drei": "^8.19.8"
```
- **Three.js integration** for React
- **Components**: Canvas, Environment, Float, Sparkles
- **Optimized rendering** with performance hints

**Hero 3D Elements**:
```jsx
<Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
  <Sparkles count={60} />
  <Float>
    <mesh>
      <MeshDistortMaterial />
    </mesh>
  </Float>
</Canvas>
```

### Development Tools

#### Linting
```json
"eslint": "^9.20.0"
"eslint-plugin-react": "^7.37.3"
"eslint-plugin-react-hooks": "^5.1.0"
```
- **React-specific rules**
- **Hooks linting**
- **Code quality enforcement**

#### Type Checking
```json
"prop-types": "^15.8.1"
```
- **Runtime type validation**
- **Component prop documentation**

**Example**:
```jsx
ProgramCard.propTypes = {
  title: PropTypes.string.isRequired,
  age: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  color: PropTypes.string,
  enrollment: PropTypes.number,
  className: PropTypes.string
};
```

### Build Configuration

#### Vite Config (`vite.config.js`)
```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animation': ['framer-motion'],
          'three': ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
});
```

#### Tailwind Config (`tailwind.config.js`)
```javascript
module.exports = {
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { /* Custom colors */ },
      borderRadius: { /* Custom radii */ },
      keyframes: { /* Custom animations */ },
      animation: { /* Animation utilities */ }
    }
  }
};
```

### Performance Optimizations

#### Code Splitting
```jsx
// Dynamic imports for routes
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
// ... etc
```

#### Image Optimization
```jsx
// Lazy loading
<img loading="lazy" decoding="async" />

// Optimized formats
// All images in /public/images/ (45 files, organized)
// JPEG for photos, PNG for logos, SVG for icons
```

#### 3D Performance
```jsx
// Reduced particle counts
<Sparkles count={60} />  // Down from 100+

// Performance hints
<Canvas performance={{ min: 0.5 }} dpr={[1, 1.5]} />

// Disable unused features
gl={{ stencil: false, depth: false }}
```

#### Bundle Size
```
Build output:
├── dist/assets/main-[hash].js    820.82 KB
├── dist/assets/main-[hash].css   67.38 KB
└── dist/images/                  45 files (optimized)

Gzipped:
├── main.js    250.57 KB
└── main.css   14.87 KB
```

### Browser Support

```json
"browserslist": [
  "last 2 versions",
  "> 1%",
  "not dead"
]
```

**Supported**:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome Android 90+

### Scripts

```json
"scripts": {
  "dev": "vite",                    // Start dev server
  "build": "vite build",            // Production build
  "preview": "vite preview",        // Preview build locally
  "lint": "eslint .",               // Run linter
  "format": "prettier --write ."    // Format code
}
```

### Environment

#### Development Server
```
npm run dev
→ http://localhost:5173/
```
- **HMR enabled**
- **Fast refresh**
- **Source maps**

#### Production Build
```
npm run build
→ dist/
```
- **Minified**
- **Tree-shaken**
- **Optimized assets**
- **Chunked vendor code**

---

## 🎯 Key Features Summary

### Design Features
- ✅ **Neuro-optimized color palette** for educational trust
- ✅ **8-point spacing grid** for consistent rhythm
- ✅ **Fluid typography** (clamp functions)
- ✅ **12-column responsive grid**
- ✅ **Glassmorphism effects** (backdrop blur)
- ✅ **3D interactive elements** (Three.js)

### UX Features
- ✅ **Mobile-first responsive design**
- ✅ **Active page highlighting** (mobile & desktop)
- ✅ **Smooth scroll animations** (Framer Motion)
- ✅ **3D card tilt effects** (magnetic interaction)
- ✅ **Loading states & success feedback**
- ✅ **Accessible navigation** (keyboard support)

### Performance Features
- ✅ **Optimized build** (820KB JS, gzipped 250KB)
- ✅ **Lazy loading images**
- ✅ **Code splitting** (vendor chunks)
- ✅ **Reduced motion support** (accessibility)
- ✅ **Fast dev server** (Vite HMR)

### Interaction Features
- ✅ **WhatsApp integration** (+91 90080 09830)
- ✅ **Floating contact widget**
- ✅ **Form validation**
- ✅ **Animated counters**
- ✅ **Hover effects** (cards, buttons, links)
- ✅ **3D parallax scrolling**

---

## 📞 Contact Integration

### WhatsApp Numbers

#### Primary Contact
```
Display: +91 9606555118
Link: tel:+919606555118
```

#### WhatsApp Contact
```
Display: +91 90080 09830
Format: 919008009830 (no spaces, no +)
Link: https://wa.me/919008009830
Message: "Hi! I would like to know more about London Kids Pre-School admissions."
```

### Integration Points

1. **Footer Contact Section**
   - Phone call link: +91 9606555118
   - WhatsApp link: +91 90080 09830

2. **Floating WhatsApp Widget**
   - Phone: 919008009830
   - Auto-show after 2.2s
   - Tooltip appears at 3.5s

3. **Contact Form Sections**
   - PreSchool, Primary, PUC pages
   - Direct WhatsApp button option

### Email Contact
```
Email: londonkidshoskote@gmail.com
Link: mailto:londonkidshoskote@gmail.com
```

### Location
```
Address: Hoskote, Bangalore Rural District
(Map integration available)
```

---

## 📊 Performance Metrics

### Build Performance
```
Build time: ~16 seconds
Total files: ~2700 modules
Output size: 
  - HTML: 1.20 KB
  - CSS: 67.38 KB (14.87 KB gzipped)
  - JS: 820.82 KB (250.57 KB gzipped)
  - Images: 45 files (optimized)
```

### Runtime Performance
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **3D Scene Load**: < 2s
- **Animation FPS**: 60fps (smooth)

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## 🔄 Future Enhancements

### Planned Features
- [ ] **Blog section** for educational content
- [ ] **Online admission forms** with payment gateway
- [ ] **Student portal** login
- [ ] **Gallery page** with lightbox
- [ ] **Events calendar**
- [ ] **Testimonials carousel**
- [ ] **Multi-language support** (Kannada, Hindi)
- [ ] **Dark mode toggle**

### Technical Improvements
- [ ] **PWA support** (offline capability)
- [ ] **Image optimization** (WebP format)
- [ ] **Font optimization** (variable fonts)
- [ ] **Service worker** caching
- [ ] **Analytics integration** (Google Analytics 4)
- [ ] **A/B testing** framework

---

## 📝 Developer Notes

### Code Style Guidelines
1. **Use functional components** with hooks
2. **PropTypes** for type validation
3. **Consistent naming**: camelCase for variables, PascalCase for components
4. **Comments** for complex logic
5. **File organization**: components, pages, data, styles separation

### Naming Conventions
```jsx
// Components: PascalCase
const ProgramCard = () => { };

// Functions: camelCase
const handleSubmit = () => { };

// Constants: UPPER_SNAKE_CASE
const PHONE_NUMBER = '919008009830';

// Files: PascalCase.jsx or kebab-case.scss
ProgramCard.jsx
program-card.module.scss
```

### Import Order
```jsx
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 3. Local components
import Header from './components/layout/Header';
import ProgramCard from './components/common/ProgramCard';

// 4. Data/utilities
import { PROGRAMS } from './data/homeData';

// 5. Styles
import './styles/main.scss';

// 6. Assets
const logo = '/images/logos/main_logo.jpg';
```

---

## 🚀 Deployment

### Build Command
```bash
npm run build
```

### Deployment Platforms
- **Vercel** (recommended): Auto-deploy from GitHub
- **Netlify**: Drag-and-drop or Git integration
- **Firebase Hosting**: `firebase deploy`
- **GitHub Pages**: `gh-pages` branch

### Environment Variables
```env
# Currently not used, but reserved for:
VITE_API_URL=https://api.example.com
VITE_RECAPTCHA_KEY=your_key_here
VITE_GA_ID=G-XXXXXXXXXX
```

---

## 📄 License & Credits

### Credits
- **Design & Development**: TDK Group of Institutions Team
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Heroicons, Custom SVG
- **Fonts**: Google Fonts (Nunito, Inter)

### Image Sources
- **Staff Photos**: TDK Group of Institutions
- **Program Images**: Licensed stock + original
- **Logo**: TDK Group of Institutions brand assets

---

## 📞 Support

For technical issues or questions:
- **Email**: londonkidshoskote@gmail.com
- **WhatsApp**: +91 90080 09830

---

**Last Updated**: February 16, 2026
**Version**: 1.0.0
**Documentation Compiled**: February 16, 2026

---

*This documentation covers every micro and macro detail of the TDK Group of Institutions website, from pixel-perfect measurements to animation timings. Use this as a complete reference for design, development, and maintenance.*
