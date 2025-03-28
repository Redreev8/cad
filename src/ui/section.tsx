import { AreaHTMLAttributes, FC } from 'react'
import { css } from '../../styled-system/css'
import classNames from 'classnames'

const styles = css({
    mt: {
        base: '80px',
        lg: '140px',
    },
    mb: '80px',
    '&:first-child': {
        mt: {
            base: '120px',
            lg: '200px',
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
