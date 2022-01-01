//  tipagem no produto
type Produto1 = {
    nome: string,
    preco: number,
    descricao: string
}

// tipagem na compra
type Compra = {
    compraId: string,
    quantidade: number,
    desconto?: number
}

// tipagem do carrinho junto com compra e produto
type Carrinho = Produto1 & Compra

// carrinho da tipagem carrinho
const carrinho: Carrinho = {
    nome: "Camiseta de frio Manga Longa",
    preco: 400,
    compraId: 'x123456',
    quantidade: 4,
    descricao: "grande camiseta boa para epocas de frio !!!"
}

console.log(carrinho)
