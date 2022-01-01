// criando usuario objeto tipo
type Usuario = {
    _id: number
    email: string
    token: string
}

type Admin = {
    acessoAPaginas: string[]
    ultimoLogin: Date
}

type Backup = {
    ultimoBackup: Date,
    BackupLocalizacao: string
}

// criando um super usuario 
const superUsuario: Usuario & Admin = {
    _id: 1,
    email: 'mateus_silva@hotmail.com',
    token: '123456',
    acessoAPaginas: [
        'perfil', 'adminConsole', 'usuarioResetar'
    ],
    ultimoLogin: new Date()
}

// criando um backuo de usuario
type BackupUsuario = Usuario & Backup
// criando backup Usuario
const backupUsuario: BackupUsuario = {
    _id: 2,
    email: 'mateus_silva@hotmail.com',
    token: '123456',
    ultimoBackup: new Date(),
    BackupLocalizacao: '~/backup'
}
// console do super usuario
console.log(superUsuario)
// console do backup usuario
console.log(backupUsuario)
