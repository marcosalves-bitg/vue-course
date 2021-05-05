<template>
    <div>{{ pessoa.nome }} {{ pessoa.sobrenome }}</div>
</template>

<script>
export default {
    props: {
        pessoa: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>

</style>