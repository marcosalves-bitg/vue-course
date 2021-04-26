new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertButton() {
            alert("Button pressionado")
        },
        firstInputKeydown(event) {
            console.log(event.target.value)
            this.valor = event.target.value
        }
    }
})