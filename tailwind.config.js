/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0F19',
          card: '#0D1117',
          glass: 'rgba(22, 27, 34, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          cyan: '#00F5D4',
          violet: '#9D4EDD',
        },
        text: {
          primary: '#E6EDF2',
          secondary: '#8B949E',
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
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 12px rgba(0, 245, 212, 0.5))' },
        }
      }
    },
  },
  plugins: [],
}
