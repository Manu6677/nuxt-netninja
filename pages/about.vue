<template>
<h2>This is a About section</h2>
<div>
    {{ data }}
</div>
</template>

<script setup>
// const { data } = await useFetch("/api/ninja?name=mario", {
//     method: 'post',
//     body: {age: 30}
// })
// const { data } = await useFetch('/api/ninja')
const {data} = await useFetch('/api/currency/ADA')
console.log(data)
</script>