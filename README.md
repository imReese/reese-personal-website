# Reese's Personal Website

A modern, responsive personal portfolio website built with Next.js 14, featuring PWA support, optimized performance, and a beautiful design.

## ✨ Features

- **🎨 Beautiful Design**: Clean UI using TailwindCSS, MagicUI, and Shadcn/UI
- **📱 Responsive Layout**: Seamless experience across all devices
- **🌙 Dark/Light Mode**: Automatic theme switching
- **📊 GitHub Integration**: Calendar and contribution snake visualization
- **☁️ Tech Icon Cloud**: Interactive technology stack showcase
- **🐦 Tweet Integration**: Embedded Twitter content
- **📈 Analytics**: Google Analytics, OpenPanel, Plausible support
- **📝 Blog System**: Full MDX and Markdown support
- **📡 RSS Feed**: Automatic content syndication
- **⚡ PWA Support**: Installable app with offline capabilities
- **🖼️ Optimized Images**: Modern formats and lazy loading
- **🎯 Performance**: Built-in optimizations for fast loading

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/UI](https://ui.shadcn.com/)** - Reusable UI components
- **[MagicUI](https://magicui.design/)** - Advanced UI components and animations
- **[Phosphor Icons](https://phosphoricons.com/)** - Beautiful icon library
- **[PWA Support](https://web.dev/progressive-web-apps/)** - Progressive Web App capabilities

## ⚙️ Configuration

- `.env.local` - Environment variables
- `src/config/siteConfig.ts` - Site-wide configuration
- `src/config/infoConfig.ts` - Personal information
- `src/config/*.ts` - Section-specific configurations
- `src/content/blog/**.mdx` - Blog content (MDX format)
- `public/github-contribution-snake/*.svg` - GitHub contribution visualization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/imReese/reese-personal-website.git
cd reese-personal-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Or use the one-liner:

```bash
npm create next-app@latest --example https://github.com/imReese/reese-personal-website reese-personal-website
cd reese-personal-website && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📦 Deployment

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/imReese/reese-personal-website&project-name=reese-personal-website&repository-name=reese-personal-website)

### Manual Deployment

Deploy to any platform supporting Next.js:

- [Vercel](https://vercel.com/templates) (Recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Or any static hosting service

## 📖 Usage

### Personalization

1. Edit `src/config/infoConfig.ts` with your personal information
2. Modify `src/config/siteConfig.ts` for site-wide settings
3. Update images in `public/` and `src/images/` directories
4. Add blog posts in `src/content/blog/` as `.mdx` files

### Analytics Setup

Set the following environment variables in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=your_openpanel_id
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by clean portfolio designs
- Optimized for performance and user experience

---
⭐ Star this repository if you find it helpful!
