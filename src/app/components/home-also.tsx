import Container from '@/ui/container'
import Text from '@/ui/text'
import Title from '@/ui/title'
import { css } from '../../../styled-system/css'
import Section from '@/ui/section'
import { FC, LiHTMLAttributes } from 'react'
import Card from '@/ui/card'
import Btn from '@/ui/btn'

export const idTitleHomeAlso = 'home-also'
const HomeAlsoItem: FC<LiHTMLAttributes<HTMLLIElement>> = ({
    children,
    ...props
}) => <li {...props}>{children}</li>

const HomeAlso = () => {
    const arr = Array.from({ length: 6 }, () => ({
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    }))

    return (
        <Section aria-labelledby={idTitleHomeAlso}>
            <Container>
                <ul
                    className={css({
                        display: 'grid',
                        gap: 5,
                        lg: { gridTemplateColumns: '1fr 1fr' },
                        xl: { gridTemplateColumns: '1fr 1fr 1fr' },
                    })}
                >
                    <HomeAlsoItem>
                        <Title as="h2">Also very important title</Title>
                    </HomeAlsoItem>
                    {arr.map((el, i) => (
                        <HomeAlsoItem key={i}>
                            <Card>
                                <Title as="h3">{el.title}</Title>
                                <Text>{el.text}</Text>
                            </Card>
                        </HomeAlsoItem>
                    ))}
                    <HomeAlsoItem
                        className={css({
                            lg: {
                                alignSelf: 'self-end',
                                gridColumn: '1/2',
                                gridRow: '4/5',
                            },
                            xl: {
                                alignSelf: 'self-end',
                                gridColumn: '1/2',
                                gridRow: '3/4',
                            },
                        })}
                    >
                        <Btn className={css({ w: '100%' })} href="contact">
                            Contact us
                        </Btn>
                    </HomeAlsoItem>
                </ul>
            </Container>
        </Section>
    )
}

export default HomeAlso
