<template>
    <div class="citacao">
        <!-- <p>{{ citacao.texto }}</p>
        <p>{{ citacao.fonte }}</p>
        <p>{{ citacao.autor }}</p> -->
        <slot name="fonte"></slot>
        <slot></slot>
        <div class="autor"><slot name="autor"></slot></div>
    </div>
</template>

<script>
export default {
    props: {
        citacao: {
            type: Object,
        }
    },
    created() {
        console.log('Created')
    },
    destroyed() {
        console.log('Destroyed')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },


}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .autor {
        float: right;
    }
</style>
