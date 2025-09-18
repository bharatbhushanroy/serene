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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 7s infinite",
      },
      backgroundImage: {
        'gradient-button-primary': 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)', // Blue gradient for primary buttons
        'gradient-card-light': 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)', // Subtle gradient for cards
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;