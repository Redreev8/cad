'use server'
interface Body {
    name: string
    email: string
    message: string
}

const consoleAction = async ({ name }: Body) => {
    console.log(`Thank you for your interest, ${name}`)

    return true
}

export default consoleAction
