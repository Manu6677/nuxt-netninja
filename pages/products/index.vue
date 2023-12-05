<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="item in products.products">
      <ProductCard :product="item" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://dummyjson.com/products");

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt  3 Merch" }],
});
</script>
