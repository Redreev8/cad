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
    title: 'Some Company',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    keywords: ['Lorem ipsum', 'Lorem', 'ipsum'],
    openGraph: {
        url: 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'website',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        site: 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        card: 'summary_large_image',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                width: 1200,
                height: 630,
                alt: 'Your alt text',
            },
        ],
    },
}

const styles = css({
    bgColor: 'bg',
    color: 'text',
    display: 'flex',
    minH: '100vh',
    flexDir: 'column',
    justifyContent: 'space-between',
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
