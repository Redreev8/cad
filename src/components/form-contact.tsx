'use client'
import { Root, Submit } from '@radix-ui/react-form'
import { sva } from '../../styled-system/css'
import { FC, FormEvent, useState } from 'react'
import Btn from '@/ui/btn'
import FieldWap from './field-wrap'
import Input from '@/ui/input'
import Textarea from '@/ui/textarea'
import consoleAction from '@/actions/console.action'
import { redirect } from 'next/navigation'

const classes = sva({
    slots: ['root', 'textareae', 'btn'],
    base: {
        root: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'min-content min-content min-content min-content',
            gap: 5,
            lg: {
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'min-content min-content min-content',
            },
        },
        textareae: {
            lg: {
                gridColumn: '2/3',
                gridRow: '1/4',
            },
        },
        btn: {
            w: '100%',
            lg: {
                gridColumn: '1/2',
                gridRow: '3/4',
                alignSelf: 'self-end',
            },
        },
    },
})

interface Elemets extends HTMLFormControlsCollection {
    name: HTMLInputElement
    email: HTMLInputElement
    message: HTMLTextAreaElement
}

interface Form extends HTMLFormElement {
    readonly elements: Elemets
}

const FormContact: FC = () => {
    const { root, textareae, btn } = classes()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handlerSubmit = async (e: FormEvent<Form>) => {
        e.preventDefault()
        const elements = e.currentTarget.elements
        setIsLoading(true)

        const is = await consoleAction({
            name: elements.name.value,
            email: elements.email.value,
            message: elements.message.textContent!,
        })
        setIsLoading(false)
        if (!is) return
        redirect('/login')
    }
    return (
        <Root className={root} onSubmit={handlerSubmit}>
            <FieldWap
                label="Name"
                name="name"
                messages={[
                    {
                        children: 'enter your name',
                        match: 'valueMissing',
                    },
                    {
                        children: 'max 20 characters',
                        match: 'tooLong',
                    },
                ]}
            >
                <Input
                    type="text"
                    isLoading={isLoading}
                    maxLength={20}
                    placeholder="Alex"
                    required
                />
            </FieldWap>
            <FieldWap
                label="Email"
                name="email"
                messages={[
                    {
                        children: 'enter your email',
                        match: 'valueMissing',
                    },
                    {
                        children: 'Please provide a valid email',
                        match: 'typeMismatch',
                    },
                ]}
            >
                <Input
                    type="email"
                    isLoading={isLoading}
                    placeholder="insunus@mail.ru"
                    required
                />
            </FieldWap>
            <FieldWap
                className={textareae}
                label="Message"
                name="message"
                messages={[
                    {
                        children: 'enter your message',
                        match: 'valueMissing',
                    },
                ]}
            >
                <Textarea isLoading={isLoading} required />
            </FieldWap>
            <Submit className={btn} asChild>
                <Btn isLoading={isLoading}>Post question</Btn>
            </Submit>
        </Root>
    )
}

export default FormContact
