export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                        .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        mutateProdutos(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        // adicionarProduto: {
        //     root: true,
        //     handler({ commit }, payload) {
        //         setTimeout(() => {
        //             commit('mutateProdutos', payload)
        //         }, 1000)
        //     }
        // } //quando quiser deixar disponivel no root
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('mutateProdutos', payload)
            }, 1000)
        }
    }
}