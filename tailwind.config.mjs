/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#101114',
          800: '#24262b',
          700: '#383b42',
          600: '#5c6068',
          500: '#747985',
          400: '#9297a1',
          300: '#c4c8d0',
          200: '#dfe2e8',
          100: '#eef0f4',
          50: '#f8f9fb'
        },
        accent: {
          600: '#2563eb',
          500: '#3b82f6',
          100: '#dbeafe'
        }
      },
      boxShadow: {
        soft: '0 18px 60px rgba(16, 17, 20, 0.08)',
        line: '0 0 0 1px rgba(16, 17, 20, 0.08)'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Microsoft YaHei',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};
