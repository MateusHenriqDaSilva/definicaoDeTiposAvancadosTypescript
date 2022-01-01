type Produto = {
    nome: string,
    preco: number,
    quantidade: number,
}

type Postar = {
    cabecalho: string,
    metodo: string,
    produto: Produto
}

type Atualizar = {
    cabecalho: string,
    metodo: string,
    produto: Produto
    produtoId: number
}

type chamadaAPI = Postar | Atualizar

const produtos: Produto[] = []

function ProcessarRequisicao(requisicao: chamadaAPI) {
    if ("produtoId" in requisicao) {
        produtos.forEach((produto: Produto, contador: number) => {
            produtos[requisicao.produtoId] = {
                ...requisicao.produto
            }
        })
    } else {
        produtos.push(requisicao.produto)
    }
}

const maca: Produto = {
    nome: 'maca',
    preco: 123456,
    quantidade: 10
}

const manga: Produto = {
    nome: 'Manga',
    preco: 66666,
    quantidade: 15
}

const postarMacaRequisicao: Postar = {
    cabecalho: 'entrada no caabecalho',
    metodo: 'new',
    produto: maca,
}

const atualizarMangaRequisicao: Atualizar = {
    cabecalho: 'entrada no cabecalho',
    metodo: 'atualizar',
    produto: manga,
    produtoId: 2
}

ProcessarRequisicao(postarMacaRequisicao)
ProcessarRequisicao(atualizarMangaRequisicao)
console.log(produtos)
