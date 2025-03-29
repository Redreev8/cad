import Container from '@/ui/container'
import Title from '@/ui/title'
import { css } from '../../../styled-system/css'
import Section from '@/ui/section'
import Card from '@/ui/card'
import Btn from '@/ui/btn'

export const idTitleHomeLess = 'home-less'

const HomeLess = () => {
    return (
        <Section aria-labelledby={idTitleHomeLess}>
            <Container className={css({ mb: '200px' })}>
                <Card
                    className={css({
                        w: '100%',
                        minH: '140px',
                        pos: 'relative',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    })}
                >
                    <Title id={idTitleHomeLess} as="h2">
                        Less important title
                    </Title>
                    <Btn
                        className={css({
                            pos: 'absolute',
                            bottom: {
                                base: '-160px',
                                lg: '-140px',
                            },
                            right: {
                                base: '2vw',
                                lg: '10vw',
                            },
                        })}
                        isCircle
                    >
                        Contact us
                    </Btn>
                </Card>
            </Container>
        </Section>
    )
}

export default HomeLess
