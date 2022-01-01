//  tipos primitivo
type Count = number

// tipos em objeto
type Produto = {
    nome: string,
    contador: Count,
    preco: number,
    quantidade: number,
}

const produtoLista: Produto[] = []

function adicionarProduto(produto: Produto) {
    produtoLista.push(produto)
}

for (let indice = 0; indice < 5; indice++) {
    let produto: Produto = {
        nome: `Produto Novo - ${indice}`,
        contador: indice,
        preco: 100,
        quantidade: 15
    }

    adicionarProduto(produto)
}
console.log(produtoLista)