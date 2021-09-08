import { transportMail } from "../lib/mail";


export const registrationMail = {
    key: 'registrationMail',
    async handle({ data }) {

        const { user } = data
        await transportMail.sendMail({
            from: 'Vinicius Alberti <paralvlup2.cal@gmail.com>',
            to:`${user.name} <${user.email}>`,
            subject: "Cadastro de usuário",
            html: `Olá ${user.name}, testando o sistema de filas.`
        })
    }
}