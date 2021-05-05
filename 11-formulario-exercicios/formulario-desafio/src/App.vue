<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<div class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.lazy.trim="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model.lazy.trim="usuario.senha">
				</Rotulo>
				<Rotulo nome="Nome e Sobrenome">
					<input type="text" v-model.lazy.trim="usuario.nome">
					<input type="text" v-model.lazy.trim="usuario.sobrenome">
				</Rotulo>
				<Rotulo nome="Armazenar Dados">
					<span><input type="checkbox" v-model="armazenarDados">Sim</span>
				</Rotulo>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<button @click="toggleShow">Enviar</button>
			</div>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Nome Completo">
					<NomeCompleto :pessoa="usuario"/>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Armazenar os dados enviados?">
					<span>{{ tipoEnvio }}</span>
				</Rotulo>
				<button @click="toggleShow">Voltar</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from '@/components/NomeCompleto'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data() {
		return {
			usuario: {
				nome: '',
				sobrenome: '',
				email: '',
				senha: '',
			},
			armazenarDados: false,
			enviado: false,
		}
	},
	methods: {
		toggleShow() {
			this.enviado = !this.enviado
		}
	},
	computed: {
		tipoEnvio() {
			return this.armazenarDados ? 'Sim' : 'Não'
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

.painel button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
