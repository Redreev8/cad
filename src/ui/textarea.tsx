import { FC, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'
import { css } from '../../styled-system/css'

export const style = css({
    rounded: '20px',
    color: 'text',
    transition: 'background-color .6s 0s',
    py: 4,
    px: 5,
    resize: 'none',
    textStyle: 'text',
    minH: '400px',
    '&::placeholder': {
        color: 'placeholder',
        textStyle: 'text',
    },
})

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    isLoading?: boolean
}

const Textarea: FC<TextareaProps> = ({
    className,
    isLoading,
    disabled,
    ...props
}) => {
    const cl = classNames(className, style, {
        [css({
            bgColor: {
                base: 'card',
                _hover: 'actionHover',
                _focus: 'actionHover',
            },
        })]: !isLoading && !disabled,
        [css({
            animation: 'bounce 1s infinite',
        })]: isLoading && !disabled,
        [css({
            bgColor: 'disabledInput',
        })]: isLoading || disabled,
    })
    return (
        <textarea className={cl} disabled={isLoading || disabled} {...props} />
    )
}

export default Textarea
