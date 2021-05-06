<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-select v-model="typeAnimation" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<hr>
		<b-button variant="primary" class="mb-2" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<hr>

		<!-- <transition name='fade'>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name='slide' type="animation" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition 
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
			>
			<b-alert @click="exibir = false" variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition> -->

		<transition :name='typeAnimation' type="animation" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else>{{ msg }}</b-alert>
		</transition>
		
	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Uma mensagem de informações para o Usuário',
			exibir: false,
			typeAnimation: 'fade'
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
	font-size: 1.5rem;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active  {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}


@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

</style>
