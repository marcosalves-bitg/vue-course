new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'VALOR IGUAL' : 'VALOR DIFERENTE'
        }
    },
    watch: {
        resultado(novo, antigo) {
            console.log('Antigo: ' + antigo + ' Novo:' + novo)
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});