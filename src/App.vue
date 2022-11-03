<template>
  <div class="h-full">
      <header
        class="bg-pale-yellow mx-auto h-16 flex justify-center items-stretch pt-4 fixed shadow pb-4"
        style="z-index: 999; top:0; width: 100%"
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
          <router-link
            :to="{ name: 'ingredients' }"
            class="inline-flex items-center px-4 h-full transition-colors font-semibold navbar__link"
          >
            By Ingredients
          </router-link>
        </div>
        <router-link :to="{ name: 'selectedMeals' }" class="bg-green-leaf text-pale-yellow rounded-md inline-flex items-center px-4 h-full transition-colors">
          Number of meals : {{ nbMeals }}
        </router-link>
      </header>
    <div class="max-w-[1200px] mx-auto" style="padding-top: 3rem">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { watch, ref, computed } from "vue";
import store from './store'

let nbMeals = ref(0)
let selectedMeals = []

watch(store.state.selectedMeals, () => {
  selectedMeals = store.state.selectedMeals
  nbMeals.value = 0
  for (let meal of selectedMeals) {
    nbMeals.value += 1
  }
})
</script>

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
