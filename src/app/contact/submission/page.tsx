import Container from '@/ui/container'
import Section from '@/ui/section'
import Title from '@/ui/title'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Submission() {
    const headersList = await headers()
    const referer = headersList.get('referer')
    console.log(referer)
    if (
        !referer ||
        !referer.includes('http://' + headersList.get('host') + '/contact')
    ) {
        redirect('/contact')
    }
    return (
        <Section>
            <Container>
                <Title as="h1">Message generated on the server</Title>
            </Container>
        </Section>
    )
}
