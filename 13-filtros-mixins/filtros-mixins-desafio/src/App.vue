<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<div>
			<input type="text" v-model="texto" @keydown.enter="add">
		</div>
		<hr>
		<div class="exercicios">
			<!-- Exercício 1 -->
			<!-- Construir um filtro local que troca espaços por vírgula -->
			<div class="exercicio">
				<h4>Ex 1</h4>
				<div>
					{{ texto | spaceToComma }}
				</div>
			</div>
		

		
			<!-- Exercício 2 -->
			<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
				valor na string final -->
			<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
			<div class="exercicio">
				<h4>Ex 2</h4>
				<div>
					{{ texto | countLetters }}
				</div>
			</div>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<div class="exercicio">
			<h4>Ex 3</h4>
			<div>
				{{ textoModificado | countLetters }}
			</div>
		</div>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<div class="exercicio">
			<h4>Ex 4</h4>
			<div>
				{{ textoInvertido | countLetters | spaceToComma }}
			</div>
		</div>
		</div>
	</div>
</template>

<script>
import computedMixin from '@/computedMixin'
export default {
	filters: {
		spaceToComma(value) {
			return value.replace(/ /g, ",")
		}
	},
	data() {
		return {
			texto: ''
		}
	},
	methods: {
		add() {
			console.log(this.texto)
		}
	},
	mixins: [computedMixin],
	computed: {
		textoModificado() {
			return this.texto.split('').reverse().join('')
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
	display: flex;	
	flex-direction: column;
}

.exercicios {
	display: flex;
	align-content: center;
	/* flex-direction: column; */
}

.exercicio {
	display: flex;
	border: 1px solid #000;
	border-radius: 10px;
	align-content: center;
	flex-direction: column;
	align-content: space-evenly;
	min-width: 200px;
	max-width: 100%;
}

input {
	font-size: 1.5rem;
	border-radius: 10px;
}
</style>
