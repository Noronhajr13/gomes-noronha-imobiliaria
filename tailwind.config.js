/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				light: '#374151',
  				dark: '#000000',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: '#9CA3AF',
  				dark: '#4B5563',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				light: '#10B981',
  				dark: '#047857',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			crm: {
  				bg: {
  					primary: 'rgb(var(--crm-bg-primary) / <alpha-value>)',
  					secondary: 'rgb(var(--crm-bg-secondary) / <alpha-value>)',
  					surface: 'rgb(var(--crm-bg-surface) / <alpha-value>)',
  					elevated: 'rgb(var(--crm-bg-elevated) / <alpha-value>)',
  					hover: 'rgb(var(--crm-bg-hover) / <alpha-value>)'
  				},
  				text: {
  					primary: 'rgb(var(--crm-text-primary) / <alpha-value>)',
  					secondary: 'rgb(var(--crm-text-secondary) / <alpha-value>)',
  					muted: 'rgb(var(--crm-text-muted) / <alpha-value>)',
  					disabled: 'rgb(var(--crm-text-disabled) / <alpha-value>)'
  				},
  				border: {
  					DEFAULT: 'rgb(var(--crm-border-default) / <alpha-value>)',
  					hover: 'rgb(var(--crm-border-hover) / <alpha-value>)',
  					focus: 'rgb(var(--crm-border-focus) / <alpha-value>)'
  				}
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}