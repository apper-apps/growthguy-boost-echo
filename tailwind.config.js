/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
        neon: {
          green: '#a9fb50',
          green2: '#87d93c',
          lime: '#39FF14',
          yellow: '#FFD700',
          red: '#FF0040',
          blue: '#00E5FF',
        },
        dark: {
          bg: '#0A0A0A',
          card: '#1A1A1A',
          border: '#333333',
        }
      },
      fontFamily: {
        'display': ['Bebas Neue', 'cursive'],
        'body': ['SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
keyframes: {
        'pulse-neon': {
          '0%': { boxShadow: '0 0 20px #a9fb50' },
          '100%': { boxShadow: '0 0 40px #a9fb50, 0 0 60px #a9fb50' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'counter': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      clipPath: {
        'arrow-right': 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
        'arrow-left': 'polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)',
        'slant': 'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)',
      }
    },
  },
  plugins: [],
}