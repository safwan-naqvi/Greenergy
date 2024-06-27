import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      backgroundImage: {
        "hero-background":
          "url('https://cdn.dribbble.com/userupload/4270087/file/original-dd685e687e629f85a09d662b41578434.png?resize=1024x1024')",
      },
      gridTemplateColumns: {},
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      inset: {},
      padding: {},
      height: {},
      margin: {},
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
        hero: "clamp(4.77rem, 7.48vw + 2.9rem, 6rem)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'primary': {
          '50': '#f6fee7',
          '100': '#eafccb',
          '200': '#d7f99d',
          '300': '#bef264',
          '400': '#a5e635',
          '500': '#89cc16',
          '600': '#6ca30d',
          '700': '#547c0f',
          '800': '#456212',
          '900': '#3c5314',
          '950': '#1f2e05',
        },
        'secondary': {
          '50': '#ecfdf9',
          '100': '#d1faf0',
          '200': '#a7f3e1',
          '300': '#6ee7ca',
          '400': '#34d3ad',
          '500': '#10b991',
          '600': '#059673',
          '700': '#04785c',
          '800': '#065f4a',
          '900': '#064e3d',
          '950': '#022c22',
        },
        'neutral': {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        beige: "#FFF7ed",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        '800': '800ms',
        '900': '900ms',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config