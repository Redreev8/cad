import classNames from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'
import Link, { LinkProps } from 'next/link'
import { css } from '../../styled-system/css'

type HTMLProps = Omit<LinkProps, 'href'> &
    ButtonHTMLAttributes<HTMLButtonElement>

export interface BtnProps extends HTMLProps {
    href?: string
    target?: '_blank'
    isCircle?: boolean
}

const Btn: FC<BtnProps> = ({
    className,
    children,
    href,
    isCircle,
    ...props
}) => {
    const cl = classNames(
        className,
        css({
            cursor: 'pointer',
            display: 'block',
            textAlign: 'center',
            bgColor: {
                base: 'action',
                _hover: 'actionHover',
                _focus: 'actionHover',
                _active: 'actionActive',
            },
            pt: 4,
            pl: 5,
            pr: 5,
            pb: '14px',
            textStyle: 'btnText',
            transition: 'background-color .6s 0s',
            rounded: '999px',
        }),
        {
            [css({
                w: '180px',
                h: '180px',
                rotate: {
                    base: '16deg',
                    _hover: '0deg',
                    _focus: '0deg',
                    _active: '0deg',
                },
                transition: 'background-color .6s 0s, rotate .6s 0s',
            })]: isCircle,
        },
    )
    if (href) {
        return (
            <Link
                href={href}
                className={cl}
                {...(props as Omit<LinkProps, 'href'>)}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            type="button"
            className={cl}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    )
}

export default Btn
