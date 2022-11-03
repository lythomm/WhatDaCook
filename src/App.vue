<template>
  <div class="h-full">
    <div>
      <header
        class="max-w-[1200px] mx-auto h-16 flex justify-center items-stretch pt-4"
      >
        <div>
          <router-link
            :to="{ name: 'home' }"
            class="inline-flex items-center px-4 h-full transition-colors font-semibold navbar__link"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'byName' }"
            class="inline-flex items-center px-4 h-full transition-colors font-semibold navbar__link"
          >
            Search Meals
          </router-link>
          <!-- <router-link
            :to="{ name: 'byLetter' }"
            class="inline-flex items-center px-4 h-full transition-colors font-semibold navbar__link"
          >
            Meals by Letter
          </router-link> -->
          <router-link
            :to="{ name: 'ingredients' }"
            class="inline-flex items-center px-4 h-full transition-colors font-semibold navbar__link"
          >
            By Ingredients
          </router-link>
        </div>
      </header>
    </div>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.navbar__link {
  position: relative;
  top: 0;
  transition: all ease 0.5s;
}

.navbar__link:hover {
  top: -5px;
  opacity: 0.6;
}
</style>
