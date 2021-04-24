new Vue({
    el: '#desafio',
    data: {
        nome: 'Marcos',
        idade: 32,
        imgSrc: './download.jpeg'
    },
    methods: {
        idadeMultiplicada() {
            return this.idade * 3
        },

        randomNum() {
            return Math.random()
        }
    }
})