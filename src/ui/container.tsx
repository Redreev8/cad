import { css } from '../../styled-system/css'
import classNames from 'classnames'
import { AreaHTMLAttributes, FC } from 'react'

const styles = css({
    maxW: { base: '100vw', xl: '1200px' },
    w: '100%',
    mx: 'auto',
    px: {
        base: 5,
        lg: 10,
    },
    boxSizing: 'border-box',
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
