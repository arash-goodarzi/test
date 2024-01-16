import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'sans':['Helvetica'],
      'serif':['Georgia'],
      'mono':['Calibri']
    },
    extend: {
      colors:{
        primaryPale: "#a5f3fc",
        primary: "#67e8f9",
        primaryStrong: "#06b6d4",
        primaryTooStrong: "#0891b2",

        secondaryPale:"#f87171",
        secondary: "#dc2626",
        secondaryStrong:"#991b1b",

        neutralTooPale: "#e2e8f0",		
        neutralPale: "#cbd5e1",			
        neutral: "#94a3b8",				
        neutralStrong: "#334155",
        neutralTooStrong: "#0f172a",
      },
      keyframes: {
        progress: {
          '0%': { left: '0%' },
          '100%': { left: '110%' },
          },
        },
      animation: {
          progress: 'progress 3s linear infinite',
      },      
    },
  },
  plugins: [],
}
export default config
