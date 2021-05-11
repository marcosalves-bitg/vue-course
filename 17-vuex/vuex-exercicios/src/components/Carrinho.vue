<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                        <!-- <th>Total</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(produto, i) in produtos" :key="i">
                        <td>{{ produto.nome }} ({{ produto.preco | dinheiro }})</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco * produto.quantidade | dinheiro }}</td>
                        <!-- <td>{{ produto.preco * produto.quantidade | dinheiro }}</td> -->
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('carrinho',{
            total: 'valorTotal'
        }),
        // total() {
        //     // return this.produtos.map(p => p.quantidade * p.preco)
        //     //     .reduce((total, atual) => total + atual, 0)
        //     // repassado para getters -> store.js
        //     return this.$store.getters.valorTotal
        // },
        produtos() {
            return this.$store.state.carrinho.produtos
        }
    },
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
