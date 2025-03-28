import { AreaHTMLAttributes, FC } from 'react'
import { css } from '../../styled-system/css'
import classNames from 'classnames'

const styles = css({
    '&:last-child': {
        mb: '80px',
    },
    mt: '80px',
    '&:first-child': {
        mt: '110px',
    },
    lg: {
        mt: '140px',
        '&:first-child': {
            mt: '140px',
        },
    },
})

const Section: FC<AreaHTMLAttributes<HTMLElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, styles)

    return (
        <section className={cl} {...props}>
            {children}
        </section>
    )
}

export default Section
