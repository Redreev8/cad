import Container from '@/ui/container'
import Text from '@/ui/text'
import Title from '@/ui/title'
import { css } from '../../../styled-system/css'
import Section from '@/ui/section'

export const idTitleHomeIntro = 'home-intro'

const HomeIntro = () => {
    return (
        <Section aria-labelledby={idTitleHomeIntro}>
            <Container
                className={css({
                    display: 'flex',
                    flexDir: 'column',
                    gap: 10,
                    xl: {
                        flexDir: 'row',
                    },
                })}
            >
                <div
                    className={css({
                        display: 'flex',
                        flexDir: 'column',
                        gap: 5,
                        zIndex: 1,
                        lg: { flexDir: 'row', gap: 10 },
                        xl: {
                            maxW: '540px',
                            gap: 5,
                            flexDir: 'column',
                        },
                    })}
                >
                    <Title
                        className={css({
                            w: '100%',
                            flexShrink: 0,
                            lg: { w: '420px' },
                            xl: { w: '740px' },
                        })}
                        id={idTitleHomeIntro}
                        as="h1"
                    >
                        Most important title on the page
                    </Title>
                    <Text
                        className={css({
                            lg: { marginTop: '30px' },
                            xl: { marginTop: 0 },
                        })}
                    >
                        title on the pageLorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Aliquam mattis, leo et condimentum
                        ultricies, sem urna convallis metus, vel suscipit nibh
                        lacus tincidunt ante
                    </Text>
                </div>
                <div
                    className={css({
                        bgColor: 'card',
                        borderRadius: '20px',
                        w: '100%',
                        h: '330px',
                        xl: {
                            maxW: '540px',
                        },
                    })}
                ></div>
            </Container>
        </Section>
    )
}

export default HomeIntro
