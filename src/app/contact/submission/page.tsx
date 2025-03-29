import Container from '@/ui/container'
import Section from '@/ui/section'
import Title from '@/ui/title'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Submission() {
    const headersList = await headers()
    const referer = headersList.get('referer')
    if (!referer || !referer.match(/\/contact(\/?)$/g)) {
        redirect('/contact')
    }
    return (
        <Section aria-labelledby="contact-submission">
            <Container>
                <Title id="contact-submission" as="h1">
                    Message generated on the server
                </Title>
            </Container>
        </Section>
    )
}
