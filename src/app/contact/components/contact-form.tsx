import Container from '@/ui/container'
import Title from '@/ui/title'
import { css } from '../../../../styled-system/css'
import Section from '@/ui/section'
import FormContact from '@/components/form-contact'

export const idTitleHomeIntro = 'contact-form'

const ContactForm = () => {
    return (
        <Section aria-labelledby={idTitleHomeIntro}>
            <Container
                className={css({
                    display: 'flex',
                    flexDir: 'column',
                    gap: 10,
                })}
            >
                <Title>Most important title on the page</Title>
                <FormContact />
            </Container>
        </Section>
    )
}

export default ContactForm
