interface ErrorMensagem {
    [msg: number]: string
    apiId: number
}

const errorMensagem: ErrorMensagem = {
    400: 'bad request',
    401: 'nao tem autorizacao',
    403: 'forbidden', apiId: 123456,
}

const errorCodes: number[] = [
    400, 401, 403
]

errorCodes.forEach((codigo: number) => {
    console.log(
        errorMensagem[codigo]
    )
}
)