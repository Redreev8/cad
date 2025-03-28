import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
    title: {
        value: {
            fontFamily: 'var(--font-mono)',
            fontWeight: '600',
            fontSize: '48px',
            lineHeight: '48px',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
            lg: {
                fontSize: '60px',
                lineHeight: '60px',
            },
            xl: {
                fontSize: '100px',
                lineHeight: '100px',
            },
        },
    },
    heading: {
        value: {
            fontFamily: 'var(--font-mono)',
            fontWeight: '500',
            fontSize: '48px',
            lineHeight: '48px',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
        },
    },
    subtitle: {
        value: {
            fontFamily: 'var(--font-mono)',
            fontWeight: '500',
            fontSize: '28px',
            lineHeight: '32px',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
        },
    },
    text: {
        value: {
            fontFamily: 'var(--font-mono)',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None',
        },
    },
    btnText: {
        value: {
            fontFamily: 'var(--font-mono)',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '20px',
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'uppercase',
        },
    },
})
