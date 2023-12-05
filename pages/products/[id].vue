<template>
  <div>

    <Head>
      <Title>Nuxt Dojo | {{product.title}}</Title>
      <Meta name="discription" :content="product.description"/>
    </Head>

  <ProductDetail :product="product"/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const route = useRoute();
const { id } = route.params;
const uri = "https://dummyjson.com/products/" + id
const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Page can not found...", fatal: true})
}

</script>
