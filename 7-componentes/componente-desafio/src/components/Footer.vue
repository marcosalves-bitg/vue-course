<template>
    <v-footer class="pa-3" app>
        <v-spacer></v-spacer>
        <div>Curso Vue &copy; {{ anoAtual }}</div>
    </v-footer>
</template>

<script>
export default {
    data() {
        return {
            anoAtual: new Date().getFullYear()
        }
    }
}
</script>

<style>

</style>