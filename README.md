# Foodah 🍽️

[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat&logo=vercel)](https://foodah.vercel.app/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat&logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

> High-performance food ordering platform with real-time Swiggy API integration and custom React hooks.

[🌐 Live Demo](https://foodah.vercel.app) • [📖 Technical Docs](docs/FOODAH-TECHNICAL-DOCUMENTATION.md) • [👨‍💻 Portfolio](https://www.amansuryavanshi.me)

---

## Key Metrics

| Metric | Value | Description |
|--------|-------|-------------|
| 🚀 **Load Reduction** | 40% | Route-level code splitting |
| ⚡ **Performance** | 60fps | Smooth scrolling |
| 📊 **Data Size** | 14,000+ lines | Live Swiggy JSON data |

---

## Overview

Foodah is a restaurant discovery platform demonstrating advanced React patterns. Fetches live data from Swiggy API, implements custom hooks for network detection and image fallbacks, and uses Redux Toolkit for cart management.

**[📖 Read Full Technical Documentation →](docs/FOODAH-TECHNICAL-DOCUMENTATION.md)**

---

## Features

| Feature | Description |
|---------|-------------|
| 🍕 **Restaurant Discovery** | Live Swiggy data with 14K+ JSON lines |
| 🔍 **Smart Search** | Real-time filtering by restaurant name |
| ⭐ **Rating Filter** | Show top-rated restaurants (4.5+) |
| � **Shopping Cart** | Redux-powered add/remove/clear |
| 📱 **Responsive Design** | Mobile-first with Tailwind CSS |
| ⚡ **Shimmer UI** | Skeleton loading for perceived performance |
| 🌐 **Offline Detection** | Clear feedback when network is lost |

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, JavaScript ES6+, Tailwind CSS |
| **State** | Redux Toolkit, React Context |
| **Routing** | React Router DOM 6 |
| **Build** | Parcel 2.12, PostCSS |
| **APIs** | Swiggy API, GitHub API, EmailJS |
| **Deploy** | Vercel |

---

## Quick Start

```bash
# Clone repository
git clone https://github.com/AmanSuryavanshi-1/Foodah.git
cd Foodah

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## Project Structure

```
Foodah/
├── App.js              # Root with router config
├── src/
│   ├── components/     # Navbar, Footer, Cards
│   ├── pages/          # Body, Menu, Cart, Contact
│   └── utils/          # Custom hooks, Redux, Constants
├── Assets/             # Images and fallbacks
└── docs/               # Technical documentation
```

---

## Custom Hooks

| Hook | Purpose |
|------|---------|
| `useOnlineStatus` | Network connectivity detection |
| `useRestaurantMenu` | Menu data fetching with transformation |
| `useFallbackImage` | Broken image handling with alternatives |

**[See Implementation Details →](docs/FOODAH-TECHNICAL-DOCUMENTATION.md#key-features)**

---

## Deployment

```json
// vercel.json - SPA routing fix
{
    "rewrites": [
        { "source": "/(.*)", "destination": "/" }
    ]
}
```

---

## Contributing

Contributions welcome! Check the [issues page](https://github.com/AmanSuryavanshi-1/Foodah/issues).

---

## License

[MIT License](LICENSE)

---

<div align="center">

**Built by [Aman Suryavanshi](https://www.amansuryavanshi.me)**

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-4285F4?style=flat&logo=google-chrome)](https://www.amansuryavanshi.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/amansuryavanshi-ai/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github)](https://github.com/AmanSuryavanshi-1)

</div>
