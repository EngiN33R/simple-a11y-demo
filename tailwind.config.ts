import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'top': '0px -4px 25px -3px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
} satisfies Config

