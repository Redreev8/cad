import { FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { css } from '../../styled-system/css'

export const style = css({
    rounded: '888px',
    color: 'text',
    transition: 'background-color .6s 0s, opacity .6s 0s',
    py: 4,
    px: 5,
    textStyle: 'text',
    '&::placeholder': {
        color: 'placeholder',
        textStyle: 'text',
    },
})

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isLoading?: boolean
}

const Input: FC<InputProps> = ({ className, isLoading, ...props }) => {
    const cl = classNames(className, style, {
        [css({
            bgColor: {
                base: 'card',
                _hover: 'actionHover',
                _focus: 'actionHover',
            },
        })]: !isLoading,
        [css({
            bgColor: 'disabledInput',
            animation: 'bounce 1s infinite',
        })]: isLoading,
    })

    return <input className={cl} {...props} disabled={isLoading} />
}

export default Input
