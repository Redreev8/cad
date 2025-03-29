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
    slots: ['field', 'wrap', 'message', 'label'],
    base: {
        field: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDir: 'column',
            gap: 2,
        },
        message: { color: 'red' },
        label: {},
        wrap: {
            display: 'flex',
            flexDir: 'column',
            gap: 2,
        },
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
            <div className={classes.wrap}>
                <Label className={classes.label}>{label!}</Label>
                <Control asChild>{children}</Control>
            </div>
            {messages.map((el, i) => (
                <Message className={classes.message} key={i} match={el.match}>
                    {el.children}
                </Message>
            ))}
        </Field>
    )
}

export default FieldWap
