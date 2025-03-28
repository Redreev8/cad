import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import './globals.css'
import { css } from '../../styled-system/css'
import Footer from '@/components/footer'
import Header from '@/components/header'

const mono = Titillium_Web({
    variable: '--font-mono',
    subsets: ['latin'],
    weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const styles = css({
    bgColor: 'bg',
    color: 'text',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${mono.variable} ${styles}`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
