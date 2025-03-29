import Container from '@/ui/container'
import Title from '@/ui/title'
import { css } from '../../../../styled-system/css'
import Section from '@/ui/section'
import FormContact from '@/components/form-contact'

export const idTitleSectionContactForm = 'contact-form'

const ContactForm = () => {
    return (
        <Section aria-labelledby={idTitleSectionContactForm}>
            <Container
                className={css({
                    display: 'flex',
                    flexDir: 'column',
                    gap: 10,
                })}
            >
                <Title id={idTitleSectionContactForm} as="h1">
                    Most important title on the page
                </Title>
                <FormContact />
            </Container>
        </Section>
    )
}

export default ContactForm
