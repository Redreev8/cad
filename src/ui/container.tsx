import { css } from '../../styled-system/css'
import classNames from 'classnames'
import { AreaHTMLAttributes, FC } from 'react'

const styles = css({
    maxW: '1200px',
    w: '100vw',
    ml: 'auto',
    mr: 'auto',
    pl: 5,
    pr: 5,
    lg: {
        pl: 10,
        pr: 10,
    },
})

const Container: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, styles)

    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default Container
