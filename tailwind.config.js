/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: 'var(--bg-color)',
          card: 'var(--card-bg)',
          glass: 'var(--glass-bg)',
          border: 'var(--border-color)',
        },
        accent: {
          cyan: 'var(--accent-cyan)',
          violet: 'var(--accent-violet)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 12px var(--accent-cyan-glow))' },
        }
      }
    },
  },
  plugins: [],
}
