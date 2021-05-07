<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="(mensagem, i) in mensagens" :key="i" :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe seu nome" />
			</b-form-group>
			<b-form-group label="E-mail">
				<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe seu email" />
			</b-form-group>
			<hr>
			<b-button @click.prevent="salvar" size="lg" variant="primary" class="mr-2">Salvar</b-button>
			<b-button @click.prevent="carregarUsuarios" size="lg" variant="success" class="ml-2">Carregar Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<p>Nome: <strong>{{ usuario.nome }}</strong></p>
				<p>E-Mail: <strong>{{ usuario.email }}</strong></p>
				<p>ID: <strong>{{ id }}</strong> </p>
				<p>
					<b-button variant="warning" size="lg" @click="carregar(id)" class="ml-2">Carregar</b-button>
					<b-button variant="danger"  size="lg" @click="excluir(id)" class="ml-2">Excluir</b-button>
				</p>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
// import axios from 'axios'

export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar() {
			// this.$http.post('usuarios.json', this.usuario)
			// 	.then(() => this.limparCampos())
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(res => {
					this.limparCampos()
					this.carregarUsuarios()
					this.mensagens.push({
						texto: 'Item Salvo!',
						tipo: 'success'
					})
				})
		},
		carregarUsuarios() {
			this.$http.get('usuarios.json')
				.then(res => {
					this.usuarios = res.data
				})
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => {
					this.limparCampos()
					this.carregarUsuarios()
					this.mensagens.push({
						texto: 'Item Excluido!',
						tipo: 'success'
					})
				})
				.catch(_ => {
					this.mensagens.push({
						texto: 'Erro ao Excluir',
						tipo: 'danger'
					})
				})
				
		},
		limparCampos() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		}
	},
	// created: {
	// 	this.
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>

