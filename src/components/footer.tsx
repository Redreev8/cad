import Container from '@/ui/container'
import { css } from '../../styled-system/css'
import { AreaHTMLAttributes, FC } from 'react'

const Footer: FC<AreaHTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    return (
        <footer
            className={css({
                pos: 'sticky',
                bottom: '0',
            })}
            {...props}
        >
            <Container>
                <div
                    className={css({
                        bgColor: 'card',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        py: 4,
                        px: 5,
                        roundedTopLeft: '20px',
                        roundedTopRight: '20px',
                    })}
                >
                    <span>Some Company 2024</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
