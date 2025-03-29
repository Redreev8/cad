import { Metadata } from 'next'
import ContactForm from './components/contact-form'

const title = 'contacts page tacks'
const description = 'contacts page written in next js, scss, radix form'

export const metadata: Metadata = {
    title: 'Contacts Some Company',
    description:
        'Contacts Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    openGraph: {
        title,
        description,
    },
    twitter: {
        title,
        description,
    },
}

export default function Contact() {
    return <ContactForm />
}
