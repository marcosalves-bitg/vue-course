<template>
  <v-app>
    <Menu />
		<Header />

		<v-content>
			<Carousel />
		</v-content>

    <Footer />
  </v-app>
</template>

<script>
import Menu from './components/Menu'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

export default {
    components: { Menu, Header, Carousel, Footer }
}
</script>
