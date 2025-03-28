import { defineConfig } from "@pandacss/dev"
import { textStyles } from './styled-system/text-styles'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        colors: {
          bg: { value: '#D8FC50' },
          card: { value: '#FFF3E3' },
          action: { value: '#FD5E37' },
          text: { value: '#050901' },
        },
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
