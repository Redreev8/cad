import { css } from '../../styled-system/css'
import classNames from 'classnames'
import { AreaHTMLAttributes, FC } from 'react'

const styles = css({
    bgColor: 'card',
    py: 4,
    px: 5,
    borderRadius: '20px',
})

const Card: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
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

export default Card
