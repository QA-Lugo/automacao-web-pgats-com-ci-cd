class Utils{

    gerarDados(){

        const timestamp = new Date().getTime()

        const signUpName = 'Lugo QA Engineer'
        Cypress.env('signUpName', signUpName)

        const signUpEmail = `lugo-${timestamp}@mail.com`
        Cypress.env('signUpEmail', signUpEmail)

        const signUpPassword = '12345'
        Cypress.env('signUpPassword', signUpPassword)
    }

}

export default new Utils()