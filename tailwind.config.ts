import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'glow-blue': '0 0 20px 0 rgba(59, 130, 246, 0.3)', // Soft blue glow
        'glow-orange': '0 0 20px 0 rgba(255, 152, 0, 0.3)', // Soft orange glow
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // New custom colors for the light, modern fintech theme
        fintech: {
          'background-light': '#FFFFFF', // Main background
          'background-offwhite': '#F9FAFB', // Slightly off-white for subtle contrast
          'text-dark': '#1F2937', // Dark grey for main text
          'text-muted': '#6B7280', // Muted grey for secondary text
          'blue-soft': '#BFDBFE', // Soft blue for highlights
          'blue-accent': '#3B82F6', // Bold blue for CTAs and primary elements
          'cyan-light': '#A7F3D0', // Light cyan for subtle accents/imagery
          'green-success': '#10B981', // Green for success states
          'border-light': '#E5E7EB', // Light grey for borders
          'card-light': '#FFFFFF', // Card background
          // New colors for the "Apply Loan in Simple Steps" section
          'peach-background': 'hsl(var(--fintech-peach-background))',
          'orange-accent': 'hsl(var(--fintech-orange-accent))',
          // New colors for the Instant Personal Loans section
          'dark-bg': '#0A0A1A', // Very dark blue/purple for section background
          'gradient-blue-start': '#4F46E5', // Indigo-600
          'gradient-blue-end': '#6366F1', // Indigo-500
          'gradient-purple-start': '#8B5CF6', // Violet-500
          'gradient-purple-end': '#A78BFA', // Violet-400
          'gradient-pink-start': '#EC4899', // Pink-500
          'gradient-pink-end': '#F472B6', // Pink-400
          'gradient-cyan-start': '#06B6D4', // Cyan-500
          'gradient-cyan-end': '#22D3EE', // Cyan-400
          'star-yellow': '#FBBF24', // Amber-400
          // New colors for the Top-Up Loans section
          'dark-purple-bg': 'hsl(var(--fintech-dark-purple-bg))',
          'topup-line': 'hsl(var(--fintech-topup-line))',
          'topup-gradient-start': 'hsl(var(--fintech-topup-gradient-start))',
          'topup-gradient-end': 'hsl(var(--fintech-topup-gradient-end))',
          'card-pink-start': 'hsl(var(--fintech-card-pink-start))',
          'card-pink-end': 'hsl(var(--fintech-card-pink-end))',
          'card-purple-start': 'hsl(var(--fintech-card-purple-start))',
          'card-purple-end': 'hsl(var(--fintech-card-purple-end))',
          'card-blue-start': 'hsl(var(--fintech-card-blue-start))',
          'card-blue-end': 'hsl(var(--fintech-card-blue-end))',
          'card-darkblue-start': 'hsl(var(--fintech-card-darkblue-start))',
          'card-darkblue-end': 'hsl(var(--fintech-card-darkblue-end))',
          'phone-bg-blue': 'hsl(var(--fintech-phone-bg-blue))',
          'phone-text-blue': 'hsl(var(--fintech-phone-text-blue))',
          'phone-star-yellow': 'hsl(var(--fintech-phone-star-yellow))',
          // New color for Interactive Loan Simulator
          'simulator-card-bg': 'hsl(var(--fintech-simulator-card-bg))',
          // New colors for Financial Freedom Section
          'card-dark-purple': 'hsl(var(--fintech-card-dark-purple))',
          'card-dark-red-purple': 'hsl(var(--fintech-card-dark-red-purple))',
          'button-gradient-start': 'hsl(var(--fintech-button-gradient-start))',
          'button-gradient-end': 'hsl(var(--fintech-button-gradient-end))',
          'dark-bg-lighter': 'hsl(var(--fintech-dark-bg-lighter))',
          // New colors for Hero Section and Header
          'header-bg': 'hsl(var(--fintech-main-bg))', // Updated to use main-bg
          'header-text': '#E0E0E0', // Light text for header
          'hero-dark-bg': 'hsl(var(--fintech-main-bg))', // Updated to use main-bg
          'card-mockup-purple': '#8A2BE2', // Blue Violet
          'card-mockup-blue': '#4169E1', // Royal Blue
          'card-mockup-pink': '#FF1493', // Deep Pink
          'card-chip-yellow': '#FFD700', // Gold
          'card-chip-light': '#E0E0E0', // Light gray for chip reflection
          'dot-pattern': 'hsl(var(--fintech-dot-pattern-new))', // Updated to use new dot pattern
          'scroll-indicator-bg': '#3B82F6', // Blue for scroll indicator
          // New dashboard colors
          dashboard: {
            'bg': '#0F172A', // Slate-900 (keeping separate for dashboard)
            'sidebar-bg': '#1E293B', // Slate-800
            'card-bg': '#1E293B', // Slate-800
            'text-primary': '#F8FAFC', // Slate-50
            'text-secondary': '#94A3B8', // Slate-400
            'accent-blue': '#3B82F6', // Blue-500
            'accent-green': '#22C55E', // Green-500
            'accent-red': '#EF4444', // Red-500
            'border': '#334155', // Slate-700
            'input-bg': '#334155', // Slate-700
            'chart-bar-1': '#3B82F6', // Blue-500
            'chart-bar-2': '#22C55E', // Green-500
            'progress-bg': '#475569', // Slate-600
            'progress-fill': '#3B82F6', // Blue-500
            'logout-button-bg': '#EF4444', // Red-500
            'logout-button-hover': '#DC2626', // Red-600
          },
          // New color for Insurance Section floating cards
          'light-blue-card': 'hsl(210 80% 85%)', // A light blue color
          // New colors for MoneyForEverythingSection
          'dark-card-bg': 'hsl(220 10% 15%)', // Dark grey for cards
          'dark-card-bg-secondary': 'hsl(220 10% 18%)', // Slightly lighter dark grey for some cards
          'dark-text-primary': 'hsl(210 40% 98%)', // White text
          'dark-text-muted': 'hsl(215 16% 65%)', // Muted text
          'icon-orange': 'hsl(36 100% 50%)', // Vibrant orange for icons
          'icon-gray-bg': 'hsl(220 10% 25%)', // Darker grey for specific icon cards
          'phone-bg': 'hsl(220 10% 10%)', // Phone frame background
          'phone-border': 'hsl(220 10% 25%)', // Phone frame border
          'phone-text': 'hsl(220 10% 10%)', // Text inside phone
          // New color for India map section
          'india-white': 'hsl(0 0% 100%)', // Pure white for the middle stripe

          // New main background and button gradient
          'main-bg': 'hsl(var(--fintech-main-bg))',
          'dot-pattern-new': 'hsl(var(--fintech-dot-pattern-new))',
          'button-primary-gradient-start': 'hsl(var(--fintech-button-primary-gradient-start))',
          'button-primary-gradient-end': 'hsl(var(--fintech-button-primary-gradient-end))',

          // New colors for Newsletter Section
          'newsletter-orange-bg': 'hsl(var(--fintech-newsletter-orange-bg))',
          'newsletter-bird-yellow': 'hsl(var(--fintech-newsletter-bird-yellow))',
          'newsletter-bird-black': 'hsl(var(--fintech-newsletter-bird-black))',
          'newsletter-envelope-blue': 'hsl(var(--fintech-newsletter-envelope-blue))',
          'newsletter-cloud-white': 'hsl(var(--fintech-newsletter-cloud-white))',
          'newsletter-cloud-lightblue': 'hsl(var(--fintech-newsletter-cloud-lightblue))',

          // New colors for LoanProductsSection
          'loan-card-purple': 'hsl(var(--fintech-loan-card-purple))',
          'loan-card-purple-darker': 'hsl(var(--fintech-loan-card-purple-darker))',
          'loan-card-purple-darkest': 'hsl(var(--fintech-loan-card-purple-darkest))',
          'loan-card-blue': 'hsl(var(--fintech-loan-card-blue))',
          'loan-card-blue-darker': 'hsl(var(--fintech-loan-card-blue-darker))',
          'loan-card-blue-darkest': 'hsl(var(--fintech-loan-card-blue-darkest))',
          'loan-card-green': 'hsl(var(--fintech-loan-card-green))',
          'loan-card-green-darker': 'hsl(var(--fintech-loan-card-green-darker))',
          'loan-card-green-darkest': 'hsl(var(--fintech-loan-card-green-darkest))',
          'popular-badge-bg': 'hsl(var(--fintech-popular-badge-bg))',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        'float-up-down': {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
          '25%': { transform: 'translateY(-10px) translateX(5px) scale(1.05)' },
          '50%': { transform: 'translateY(0px) translateX(-5px) scale(0.95)' },
          '75%': { transform: 'translateY(10px) translateX(5px) scale(1.05)' },
        },
        'float-left-right': {
          '0%, 100%': { transform: 'translateX(0) translateY(0) scale(1)' },
          '25%': { transform: 'translateX(-10px) translateY(5px) scale(1.05)' },
          '50%': { transform: 'translateX(0px) translateY(-5px) scale(0.95)' },
          '75%': { transform: 'translateX(10px) translateY(5px) scale(1.05)' },
        },
        'card-float-1': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(2deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        'card-float-2': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(10px) rotate(-2deg)' },
          '66%': { transform: 'translateY(-5px) rotate(1deg)' },
        },
        'card-float-3': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(7px) rotate(-2deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 7s infinite",
        'float-up-down': 'float-up-down 15s ease-in-out infinite',
        'float-left-right': 'float-left-right 18s ease-in-out infinite',
        'card-float-1': 'card-float-1 10s ease-in-out infinite',
        'card-float-2': 'card-float-2 12s ease-in-out infinite',
        'card-float-3': 'card-float-3 11s ease-in-out infinite',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;