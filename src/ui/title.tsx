import { AreaHTMLAttributes, createElement, FC } from 'react'
import { css } from '../../styled-system/css'
import classNames from 'classnames'

const styles = {
    h1: css({
        textStyle: 'title',
    }),
    h2: css({
        textStyle: 'heading',
    }),
    h3: css({
        textStyle: 'subtitle',
    }),
}

interface TitleProps extends AreaHTMLAttributes<HTMLParagraphElement> {
    as?: 'h1' | 'h2' | 'h3'
    size?: 'h1' | 'h2' | 'h3'
}

const Title: FC<TitleProps> = ({
    children,
    as = 'h2',
    size = as,
    className,
    ...props
}) => {
    return createElement(
        as,
        {
            className: classNames(className, styles[size]),
            ...props,
        },
        children,
    )
}

export default Title
