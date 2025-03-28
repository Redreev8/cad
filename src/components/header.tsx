import Container from '@/ui/container'
import { css } from '../../styled-system/css'
import { AreaHTMLAttributes, FC } from 'react'
import Btn from '@/ui/btn'
import Logo from './logo'

const Header: FC<AreaHTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    return (
        <header
            className={css({
                pos: 'fixed',
                top: 5,
                right: '0',
                pt: 5,
                w: '100%',
                pointerEvents: 'none',
                zIndex: 50,
            })}
            {...props}
        >
            <Container
                className={css({
                    display: 'flex',
                    gap: 5,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                })}
            >
                <Logo
                    className={css({
                        pointerEvents: 'all',
                    })}
                />
                <nav>
                    <Btn
                        href="/contact"
                        className={css({
                            pointerEvents: 'all',
                        })}
                        isCircle
                        isDefaultBase
                    >
                        Contact us
                    </Btn>
                </nav>
            </Container>
        </header>
    )
}

export default Header
