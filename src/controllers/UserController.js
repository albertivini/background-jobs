import Queue from "../lib/Queue"

export async function store (req, res) {
    const { name, email, password } = req.body

    const user = {
        name, 
        email, 
        password
    }

    await Queue.add('registrationMail', { user })

    await Queue.add('UserReport', { user })

    return res.json(user)
}

