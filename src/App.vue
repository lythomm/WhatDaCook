<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Search Meals
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Meals by Letter
        </router-link>
        <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Meals by Ingredients
        </router-link>
      </div>
    </header>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
