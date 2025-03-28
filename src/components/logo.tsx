import { css } from '../../styled-system/css'
import { AnchorHTMLAttributes, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

const Logo: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
    className,
    ...props
}) => {
    const cl = classNames(
        className,
        css({
            py: 2,
            px: 3,
            bgColor: {
                base: 'card',
                _hover: 'actionHover',
                _focus: 'actionHover',
                _active: 'actionActive',
            },
            textStyle: 'btnText',
            rounded: '8px',
            transition: 'background-color .6s 0s',
        }),
    )
    return (
        <Link href="/" className={cl} {...props}>
            Some Company
        </Link>
    )
}

export default Logo
