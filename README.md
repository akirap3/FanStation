# Fan's Port

This is the repository for my high-end, premium portfolio website built around the design language—characterized by low-saturation cyber-minimalism, low-gravity floating motion, glassmorphism UI elements, and deep console interactions.

The site is designed to demonstrate technical proficiency in web applications, Generative AI APIs, and systems routing infrastructure.

---

## 🚀 Key Features

*   **Phase 1 Splash Preloader:** An animated boot sequence displaying typewriter CLI telemetry logs alongside technical stack nodes drifting upwards to assemble a glowing engine core.
*   **Reactive Canvas Mesh Hero:** An asymmetrical editorial layout featuring a background particle network that connects dynamically and moves relative to the visitor's cursor.
*   **IDE-Style Skills Matrix:** A simulation of a code editor (running typescript, json, and yaml tabs) where visitors can hover over code structures to dynamically inspect business value metrics parsed on the console screen below.
*   **Case Study Dialogs:** A responsive, alternating grid layout of architectural projects utilizing native HTML5 `<dialog>` elements styled with modern top-layer entry transitions.
*   **Interactive Terminal Footer:** A simulated guest command shell that processes visitor queries (`help`, `about`, `contact`, `clear`) in real-time. Includes clipboard copy triggers that fire confetti particles.

---

## 🛠️ Technology Stack

*   **Core:** React 19, TypeScript, Vite 5
*   **Styling & FX:** Tailwind CSS v3, PostCSS, Custom Web Animations
*   **Icons:** Lucide React, Custom SVG brand paths
*   **Motion & Interaction:** Framer Motion, Canvas Confetti

---

## 💻 Local Development Setup

Follow these instructions to run or build the project on your machine:

### Prerequisites
*   **Node.js:** version `^20.19.0` or `>=22.12.0` (compatible with `v22.9.0`)
*   **npm:** version `^10.0.0`

### 1. Clone & Install Dependencies
Navigate to your project directory and run:
```bash
npm install
```

### 2. Run the Development Server
Launch the local server:
```bash
npm run dev
```
Open your browser to the URL displayed in your terminal (usually `http://localhost:5173`).

### 3. Compile Production Bundle
Test the compiler and build the optimized production package:
```bash
npm run build
```
The static output files will be built inside the `/dist` directory.

### 4. Preview the Production Build
Review the compiled bundle locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```bash
├── public/                     # Static files (Resume PDF, icons)
├── src/
│   ├── components/
│   │   ├── Hero.tsx            # Floating grid canvas & metrics
│   │   ├── Skills.tsx          # IDE simulator & Value Parser
│   │   ├── Projects.tsx        # Alternating cards & Dialog modals
│   │   └── Footer.tsx          # Contact console shell footer
│   ├── App.tsx                 # Preloader & main section coordinator
│   ├── index.css               # Core styling tokens & animations
│   └── main.tsx                # React root bootstrap
├── tailwind.config.js          # Antigravity visual theme configurations
├── tsconfig.json               # TypeScript rules
└── vite.config.ts              # Vite configurations
```
