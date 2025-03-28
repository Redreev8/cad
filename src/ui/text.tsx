import { AreaHTMLAttributes, FC } from 'react'
import { css } from '../../styled-system/css'
import classNames from 'classnames'

const styles = css({
    maxW: '540px',
    textStyle: 'text',
})

const Text: FC<AreaHTMLAttributes<HTMLParagraphElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p className={classNames(styles, className)} {...props}>
            {children}
        </p>
    )
}

export default Text
