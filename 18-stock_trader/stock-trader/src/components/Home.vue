<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4 ">Trade Stocks!</h1>
        <v-sheet :elevation="6" class="pa-2 blue darken-2 mt-3">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">You can Save and Load Data</span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 teal darken-1 mt-3">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">Click in "End Day" to start a new Trade Day</span>
        </v-sheet>
        <v-divider class="my-4"></v-divider>
        <p class="display-1"><strong>Funds:</strong> {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>