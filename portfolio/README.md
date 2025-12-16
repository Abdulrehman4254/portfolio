# Abdulrehman Khan - Portfolio

A modern, dark-themed portfolio website built with Next.js 14 and Tailwind CSS.

![Portfolio Preview](preview.png)

## Features

- ✨ Modern dark theme with neon accents
- 🎨 Custom animations and transitions
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎯 Clean, modular code structure

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion (optional enhancements)
- **Fonts:** Clash Display, Satoshi, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Extract the zip file** and navigate to the project directory:

```bash
cd abdulrehman-portfolio
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This will generate a static export in the `out` directory that you can deploy to any static hosting service.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Run `npm run build`
2. Deploy the `out` folder to Netlify

### cPanel
1. Run `npm run build`
2. Upload the contents of the `out` folder to your public_html directory

## Customization

### Update Personal Information
Edit the data in `app/page.tsx`:
- Contact details in `ContactSection`
- Projects in `ProjectsSection`
- Skills in `SkillsSection`
- Education in `EducationSection`

### Change Colors
Edit the color palette in `tailwind.config.js`:
```js
colors: {
  accent: {
    primary: '#00ff88',   // Main accent (green)
    secondary: '#00d4ff', // Secondary (cyan)
    tertiary: '#ff6b35',  // Tertiary (orange)
  }
}
```

### Add Social Links
Update the GitHub and LinkedIn URLs in `ContactSection` component.

## Project Structure

```
abdulrehman-portfolio/
├── app/
│   ├── globals.css    # Global styles and animations
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page with all sections
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── package.json       # Dependencies
└── README.md          # This file
```

## License

This project is open source and available for personal use.

---

**Designed & Developed by Abdulrehman Khan**
