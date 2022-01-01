//  basico de uniao tipos
type Idade = number | string

function minhaIdade(idade: Idade): Idade {
    if (typeof idade == 'number') {
        return `minha idade é ${idade} e um numero`
    } else if (typeof idade === 'string') {
        return `minha idade é ${idade} e é uma string`
    } else {
        return `tipo incorreto: ${typeof (idade)}`
    }
}

console.log(minhaIdade(45))
console.log(minhaIdade('45'))
// console.log(minhaIdade(true))