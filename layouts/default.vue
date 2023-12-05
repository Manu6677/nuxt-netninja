<template>
  <div>
    <header class="shadow-sm bg-whites">
      <nav class="container mx-auto flex p-4 justify-between">
        <NuxtLink to="/" class="font-semibold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- out put the page component -->
    <!-- Basically it wraps all the pages and apply the common layout to all and that pages output by slots -->
    <div class="mx-auto p-4 container">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
