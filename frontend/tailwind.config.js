/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
        'soft-glow': 'soft-glow 4s ease-in-out infinite',
      },

      keyframes: {
        'ping-large': {
          '75%, 100%': { transform: 'scale(3)', opacity: '0' },
        },

        'move-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },

        'move-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        'soft-glow': {
          '0%': { boxShadow: '0 0 0px rgba(45, 212, 191, 0)', borderRadius: '44px' },
          '50%': { boxShadow: '0 0 40px 12px rgba(45, 212, 191, 0.25)', borderRadius: '44px' },
          '100%': { boxShadow: '0 0 0px rgba(45, 212, 191, 0)', borderRadius: '44px' },
        },
      },
    },
  },

  plugins: [],
}
