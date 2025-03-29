import { Metadata } from 'next'
import HomeAlso from './components/home-also'
import HomeIntro from './components/home-intro'
import HomeLess from './components/home-less'

const title = 'home page tacks'
const description = 'home page written in next js, scss, radix form'

export const metadata: Metadata = {
    title: 'Some Company',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    openGraph: {
        title,
        description,
    },
    twitter: {
        title,
        description,
    },
}

export default function Home() {
    return (
        <>
            <HomeIntro />
            <HomeAlso />
            <HomeLess />
        </>
    )
}
