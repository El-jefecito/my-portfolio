# Adelaja Tobiloba's Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Showcasing projects, skills, experience, and contact information with smooth animations and dark/light mode support.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS 4
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Dark/Light Mode**: System preference detection with localStorage persistence
- **Smooth Animations**: Motion library for fluid transitions and scroll-triggered animations
- **SEO Optimized**: Meta tags, structured data, schema.org markup
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Contact Form**: EmailJS integration with React Hook Form validation
- **Performance**: Image lazy loading, optimized bundle size
- **Error Handling**: Global error boundary for graceful error recovery

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (button, input, form, etc.)
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form section
│   ├── Hero.tsx        # Hero/intro section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── Profile.tsx     # Profile sidebar
│   ├── Resume.tsx      # Education & experience timeline
│   ├── Services.tsx    # Services section
│   ├── Stats.tsx       # Statistics section
│   ├── Testimonials.tsx # Client testimonials
│   ├── FloatingMenu.tsx # Floating navigation menu
│   └── ErrorBoundary.tsx # Global error handler
├── hooks/              # Custom React hooks
│   └── useTheme.ts    # Theme management hook
├── lib/
│   ├── animations.ts   # Animation variants for motion library
│   └── utils.ts        # Utility functions
├── constants/          # Data constants
│   └── index.tsx       # Navigation, projects, experience data
├── types/              # TypeScript type definitions
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

```bash
cp .env.example .env
```

Then edit `.env` with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_PORTFOLIO_URL=https://yourportfolio.com
```

**Get EmailJS credentials:**

- Visit [emailjs.com](https://emailjs.com)
- Create an account and set up a service
- Copy your Service ID, Template ID, and Public Key

4. **Start development server**

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 🎨 Customization

### Update Portfolio Data

Edit `src/constants/index.tsx` to update:

- Navigation links
- Social media links
- Project information
- Skills & technologies
- Education & experience
- Testimonials
- Statistics

### Modify Styling

- **Tailwind Config**: Customize in `tailwind.config.ts`
- **CSS Variables**: Available in `src/index.css` for theme colors
- **Component Styles**: Direct Tailwind classes in component files

### Add New Sections

1. Create a new component in `src/components/`
2. Import animations from `@/lib/animations`
3. Export data from `@/constants`
4. Add to `src/App.tsx`

## 🌙 Theme System

The portfolio includes automatic theme detection:

- Checks user's OS theme preference on first visit
- Saves preference to localStorage
- Provides toggle button in navbar
- All components react to theme changes instantly

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Alt text on all images
- Skip links for keyboard users

## 🔐 Security & Best Practices

- Environment variables for sensitive data
- Secure EmailJS integration
- No hardcoded credentials
- `.gitignore` protects `.env` files
- Error boundary catches runtime errors
- Form validation with React Hook Form + Zod

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then connect your GitHub repo to Netlify
```

### Deploy to GitHub Pages

Update `vite.config.ts`:

```ts
export default defineConfig({
  base: "/portfolio/",
  // ... rest of config
});
```

Then:

```bash
npm run build
npm run deploy
```

## 📊 Performance Optimization

- Image lazy loading on all media
- Code splitting with React
- Optimized animations with Motion
- CSS purging with Tailwind
- Lenis smooth scrolling
- Efficient re-renders with React 19

## 🐛 Known Issues & TODOs

- [ ] Add blog section
- [ ] Implement project filtering by tech stack
- [ ] Add Google Analytics integration
- [ ] Create Storybook for component documentation
- [ ] Add unit tests with Vitest
- [ ] Implement newsletter signup

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Adelaja Tobiloba**

- Portfolio: [yourportfolio.com](https://yourportfolio.com)
- Twitter: [@TobbyAdelaja](https://x.com/TobbyAdelaja)
- GitHub: [@El-jefecito](https://github.com/El-jefecito)
- LinkedIn: [Adelaja Tobiloba](https://www.linkedin.com/in/adelaja-tobiloba/)

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 Support

If you have questions or need help, feel free to open an issue or reach out via email.

---

**Last Updated**: June 2026
**Version**: 2.0.0
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
