import { FC, ReactNode } from 'react'
import {
    Control,
    Field,
    FormMessageProps,
    Label,
    Message,
} from '@radix-ui/react-form'
import classNames from 'classnames'
import { sva } from '../../styled-system/css'

interface FieldWapProps {
    name: string
    label: ReactNode
    className?: string
    children: ReactNode
    messages: {
        children: ReactNode
        match: FormMessageProps['match']
    }[]
}

const fields = sva({
    slots: ['field', 'message', 'label'],
    base: {
        field: { display: 'flex', flexDir: 'column', gap: 2 },
        message: { color: 'red' },
        label: {},
    },
})

const FieldWap: FC<FieldWapProps> = ({
    children,
    className,
    name,
    label,
    messages,
}) => {
    const classes = fields()
    return (
        <Field className={classNames(className, classes.field)} name={name}>
            <Label className={classes.label}>{label!}</Label>
            <Control asChild>{children}</Control>
            {messages.map((el, i) => (
                <Message className={classes.message} key={i} match={el.match}>
                    {el.children}
                </Message>
            ))}
        </Field>
    )
}

export default FieldWap
