'use server'
import { redirect } from 'next/navigation'

interface Body {
    name: string
    email: string
    message: string
}

const consoleAction = async ({ name }: Body) => {
    console.log(`Thank you for your interest, ${name}`)
    redirect('/contact/submission')
    return true
}

export default consoleAction
