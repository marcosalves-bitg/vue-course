<template>
    <v-flex class="pr-2 mt-4" xs12 md6 lg4>
        <v-card class="blue darken-4 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(Price: {{ stock.price | currency }} ({{ stock.quantity }}))</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Qty" type="number" v-model.number="quantity" :error="insufficientQuantity || quantity < 0 || !Number.isInteger(quantity)"/>
                <v-btn class="blue darken-4 white--text ml-1" 
                      @click="sellStock"
                      :disabled="insufficientQuantity || quantity<=0 || !Number.isInteger(quantity)">
                        <v-icon class="mr-1">mdi-cart-arrow-up</v-icon>{{ insufficientQuantity ? 'Not Enough' : 'Sell'}}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        ...mapActions({ sellStockAction: 'sellStock' }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.sellStockAction(order)
            // this.$store.dispatch('sellStock', order)
            this.quantity = 0
        },
    }

}
</script>

<style>

</style>