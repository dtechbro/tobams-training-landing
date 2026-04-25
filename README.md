# Tobams Training Landing Page

A modern, responsive landing page for Tobams Training - a leading training provider in Nigeria and the UK.

## 🌐 Live URL

[https://tobams-training-landing.vercel.app/](https://tobams-training-landing.vercel.app/)

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Key Features

- **Responsive Design** - Mobile-first approach with breakpoints
- **Component Architecture** - Reusable React components
- **Google Fonts Integration** - Nunito font family
- **Image Optimization** - Next.js Image component
- **Interactive Elements** - Testimonial slider, navigation

### Development Tools

- **ESLint** - Code linting and formatting
- **Turbopack** - Fast bundler for development

## 🎨 Design Decisions

### Color Scheme

- **Primary**: `#571244` - Brand purple for CTAs and accents
- **Secondary**: `#EF4353` - Accent color for highlights
- **Background**: `#F9F9F9` - Light gray for main content
- **Text**: `#151515` - Dark gray for readability

### Typography

- **Font**: Nunito (Google Fonts)
- **Headings**: 40px desktop, 20px mobile with tracking
- **Body**: System font stack with responsive sizing

### Layout System

- **Max Width**: 1312px for content containers
- **Spacing**: Consistent padding/margin scale
- **Grid**: Flexbox and CSS Grid for layouts
- **Components**: Modular, reusable components

### Responsive Strategy

- **Mobile First**: Base styles for mobile, enhanced for desktop
- **Breakpoints**:
  - `lg`: 1024px+ (desktop layouts)
  - `md`: 768px+ (tablet layouts)
- **Adaptive Components**: Different layouts per screen size

### Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Font Loading**: Google Fonts with display=swap
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Purging**: Tailwind CSS removes unused styles

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Hero.tsx        # Hero section with overlay
│   ├── Navbar.tsx      # Navigation with responsive menu
│   ├── Button.tsx      # Custom button component
│   ├── Testimonials.tsx # Interactive testimonial slider
│   └── ...             # Other section components
├── globals.css         # Global styles and Tailwind
├── layout.tsx          # Root layout with font setup
└── page.tsx           # Home page composition
```

## 🧩 Key Components

### Interactive Testimonial Slider

- Shows 1 testimonial on mobile, 3 on desktop
- Smooth transitions with preview effect
- Arrow navigation with infinite loop
- Responsive scaling and opacity effects

### Responsive Navigation

- Desktop: Full navigation with dropdowns
- Mobile: Hamburger menu (ready for implementation)
- Consistent styling across breakpoints

### Custom Button System

- Primary brand color with hover states
- Flexible className prop for variations
- Consistent sizing and spacing

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
