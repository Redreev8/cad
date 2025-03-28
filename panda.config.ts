import { defineConfig } from '@pandacss/dev'
import { textStyles } from './styled-system/text-styles'

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            textStyles,
            breakpoints: {
                xl: '1200px',
                lg: '820px',
            },
            tokens: {
                colors: {
                    bg: { value: '#D8FC50' },
                    card: { value: '#FFF3E3' },
                    action: { value: '#EE3202' },
                    actionHover: { value: '#FD5E37' },
                    actionActive: { value: '#FD8060' },
                    text: { value: '#050901' },
                },
            },
        },
    },

    // The output directory for your css system
    outdir: 'styled-system',
})
