# 🏎️ Elite Motors — Luxury Car Dealership & Listing Platform

A modern, high-performance luxury car listing web application built with **React 19**, **Vite 6**, and **Tailwind CSS**. Designed for premium dealerships, featuring interactive 3D car showcases, dynamic filter engines, realistic engine sound effects, multi-currency financing tools, and an interactive VIP Concierge widget.

---

## ✨ Key Features

- 🚘 **Luxury Inventory Showcase**: High-resolution gallery cards with detailed specifications, key metrics, features badges, and multi-view angle previews.
- 🔊 **Interactive Engine Sound FX**: Real-time synthesized engine rev audio for featured luxury and supercar models.
- 🔍 **Advanced Search & Filtering**: Multi-parameter search by brand, body style (SUV, Sedan, Coupe, Convertible), price range, and transmission.
- 🧮 **Interactive Financing Calculator**: Calculate estimated monthly payments, down payments, interest rates, and loan terms instantly.
- 🌐 **Multi-Language Support**: Built-in translation engine supporting English, Spanish, French, and German.
- 💬 **VIP Concierge Widget**: Interactive assistant modal for instant test drive scheduling, custom requests, and client support.
- ⚖️ **Car Comparison Tool**: Side-by-side specs comparison modal allowing clients to compare multiple models effortlessly.
- 🌓 **Adaptive Dark / Light Mode**: Premium dark aesthetic paired with high-contrast light mode toggle.
- 📱 **Fully Responsive Layout**: Optimized across desktop, tablet, and mobile breakpoints (375px+).

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: [React 19](https://react.dev/), [Vite 6](https://vitejs.dev/)
- **Styling & UI**: Tailwind CSS, Vanilla CSS, Radix UI Tabs
- **Icons & Animation**: [Lucide React](https://lucide.dev/), Canvas Confetti
- **Audio Engine**: Web Audio API (Synthesized engine rev sounds)
- **Deployment Ready**: Optimized for Vercel, Netlify, and GitHub Pages

---

## 📁 Project Structure

```text
Car listing Website/
├── public/
│   ├── assets/          # High-resolution car imagery, logos, and icons
│   ├── robots.txt       # Search engine crawler configuration
│   └── sitemap.xml      # SEO XML Sitemap
├── src/
│   ├── components/      # Modular UI Components
│   │   ├── ui/          # Standardized UI Primitives (Button, Badge, etc.)
│   │   ├── CarModal.jsx         # Vehicle details & full gallery modal
│   │   ├── CompareCarsModal.jsx # Side-by-side vehicle comparison
│   │   ├── ConciergeWidget.jsx  # VIP Client Assistant widget
│   │   ├── FinancingCalculatorModal.jsx # Loan calculator
│   │   ├── ContactModal.jsx     # Lead capture & test drive booking
│   │   ├── Hero.jsx             # Hero banner & quick search bar
│   │   ├── TopCategories.jsx    # Category filter grid
│   │   ├── CarTypes.jsx         # Vehicle grid showcase
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   └── Footer.jsx           # Footer & quick links
│   ├── data/
│   │   └── cars.js              # Complete vehicle dataset & metadata
│   ├── utils/
│   │   ├── engineSound.js       # Web Audio API engine sound synthesizer
│   │   └── translations.js     # Internationalization key dictionary
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Core design tokens & global CSS
│   └── main.jsx                 # React root entry point
├── .env.example                 # Environment variables template
├── .gitignore                   # Version control file exclusions
├── index.html                   # HTML template & SEO metadata
├── package.json                 # Node dependencies and npm scripts
└── vite.config.js               # Vite compiler configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine:

### Prerequisites
Make sure you have **Node.js** (v18.0.0 or higher) and **npm** installed.
- Check Node version: `node -v`
- Check npm version: `npm -v`

### Installation

1. **Clone the Repository** (or download the repository ZIP):
   ```bash
   git clone https://github.com/YOUR_USERNAME/elitemotors-car-listing.git
   cd elitemotors-car-listing
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server with Hot Module Replacement (HMR) |
| `npm run build` | Bundles and optimizes the app for production in the `/dist` folder |
| `npm run preview` | Previews the production build locally |

---

## 🛠️ How to Customize Car Inventory

Car inventory metadata is centrally managed in `src/data/cars.js`. To add, update, or remove cars:

1. Open `src/data/cars.js`.
2. Add or update vehicle objects with the following properties:
   ```javascript
   {
     id: 12,
     name: "Porsche 911 GT3 RS",
     brand: "Porsche",
     category: "Coupe",
     price: "$241,300",
     numericPrice: 241300,
     specs: {
       engine: "4.0L Flat-6",
       hp: "518 HP",
       acceleration: "3.0s (0-60 mph)",
       topSpeed: "184 mph",
       transmission: "7-Speed PDK",
       fuelType: "Gasoline",
       mileage: "1,200 miles"
     },
     images: [
       "/assets/porsche_gt3rs_front.jpeg",
       "/assets/porsche_gt3rs_back.jpeg"
     ],
     isFeatured: true
   }
   ```
3. Save the file. The UI updates automatically.

---

## 🌐 Deploying to Production

### Deploy on Vercel (Recommended)
1. Push your code to GitHub.
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New"** -> **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect Vite. Click **"Deploy"**.

### Deploy on Netlify
1. Log into [Netlify](https://netlify.com).
2. Choose **"Import from Git"** and select your repository.
3. Set Build Command: `npm run build`
4. Set Publish Directory: `dist`
5. Click **"Deploy Site"**.

---

## 📄 License & Client Rights

This repository and source code are delivered exclusively for **Elite Motors**. All branding, assets, and source files are structured for production deployment and ongoing maintenance.
