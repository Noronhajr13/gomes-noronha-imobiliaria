/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#374151',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          dark: '#4B5563',
        },
        accent: {
          DEFAULT: '#059669',
          light: '#10B981',
          dark: '#047857',
        },
        crm: {
          bg: {
            primary: 'rgb(var(--crm-bg-primary) / <alpha-value>)',
            secondary: 'rgb(var(--crm-bg-secondary) / <alpha-value>)',
            surface: 'rgb(var(--crm-bg-surface) / <alpha-value>)',
            elevated: 'rgb(var(--crm-bg-elevated) / <alpha-value>)',
            hover: 'rgb(var(--crm-bg-hover) / <alpha-value>)',
          },
          text: {
            primary: 'rgb(var(--crm-text-primary) / <alpha-value>)',
            secondary: 'rgb(var(--crm-text-secondary) / <alpha-value>)',
            muted: 'rgb(var(--crm-text-muted) / <alpha-value>)',
            disabled: 'rgb(var(--crm-text-disabled) / <alpha-value>)',
          },
          border: {
            DEFAULT: 'rgb(var(--crm-border-default) / <alpha-value>)',
            hover: 'rgb(var(--crm-border-hover) / <alpha-value>)',
            focus: 'rgb(var(--crm-border-focus) / <alpha-value>)',
          }
        }
      }
    },
  },
  plugins: [],
}