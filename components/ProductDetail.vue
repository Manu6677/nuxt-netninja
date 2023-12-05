<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.images[0]" class="mx-auto my-7 rounded-md" />
      </div>

      <div class="p-7">
        <h2 class="text-4xl">{{ product.title }}</h2>
        <h2 class="text-xl my-7">Price - ${{ product.price }}</h2>
        <p class="font-bold border-b-2 pb-2 mb-4">Product Discription -</p>
        <h2 class="my-7">{{ product.description }}</h2>
        <button class="btn my-7 flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
// const imgArr = product.images.map((imag)=> imag)
// // console.log(product.images)
// console.log(imgArr)
// console.log(imgArr[1])
</script>

<style scoped>
img {
  max-width: 450px;
}
</style>
