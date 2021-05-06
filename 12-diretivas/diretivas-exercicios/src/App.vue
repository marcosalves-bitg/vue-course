<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="cor">Usando diretiva customizada</p>
		<p v-destaque="cor">Usando diretiva customizada</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="objetoDiretiva">Usando diretiva customizada</p>
		<p v-destaque-local="objetoDiretiva">Usando diretiva customizada</p>


		<!-- Anatomia de uma diretiva:
		<p v-nomeDiretiva:argumento.mod1.mod2.mod3="valor"></p> -->
	</div>
</template>

<script>
export default {
	components: {},
	directives: {
		'destaque-local': {
			bind(el, binding, vnode) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}				

				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1
				
				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							console.log(corAtual)
							aplicarCor(corAtual)
						}, binding.value.intervalo)
					} else {
						aplicarCor(binding.value)
					}
				}, binding.value.atraso)
			}
		}
	},
	data() {
		return {
			cor: 'lightgreen',
			corLocal: 'lightblue',
			objetoDiretiva: {
				cor1: '#6596c7',
				cor2: '#91e46b',
				atraso: '2000',
				intervalo: '200',
			}
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
}
</style>
