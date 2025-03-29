import Container from '@/ui/container'
import Text from '@/ui/text'
import Title from '@/ui/title'
import { css } from '../../../styled-system/css'
import Section from '@/ui/section'
import Player from '@/components/player'

export const idTitleHomeIntro = 'home-intro'

const HomeIntro = () => {
    return (
        <Section aria-labelledby={idTitleHomeIntro}>
            <Container
                className={css({
                    display: 'flex',
                    flexDir: {
                        base: 'column',
                        xl: 'row',
                    },
                    gap: 10,
                })}
            >
                <div
                    className={css({
                        display: 'flex',
                        flexDir: {
                            base: 'column',
                            lg: 'row',
                            xl: 'column',
                        },
                        gap: {
                            base: 5,
                            lg: 10,
                            xl: 5,
                        },
                        zIndex: 2,
                        xl: {
                            maxW: '540px',
                        },
                    })}
                >
                    <Title
                        className={css({
                            w: {
                                base: '100%',
                                lg: '420px',
                                xl: '740px',
                            },
                            flexShrink: 0,
                        })}
                        id={idTitleHomeIntro}
                        as="h1"
                    >
                        Most important title on the page
                    </Title>
                    <Text
                        className={css({
                            mt: { lg: '30px', xl: 0 },
                        })}
                    >
                        title on the pageLorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Aliquam mattis, leo et condimentum
                        ultricies, sem urna convallis metus, vel suscipit nibh
                        lacus tincidunt ante
                    </Text>
                </div>
                <Player url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            </Container>
        </Section>
    )
}

export default HomeIntro
