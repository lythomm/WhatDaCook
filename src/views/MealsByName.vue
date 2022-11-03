<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4">Search</h1>
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="example : Honey Teriyaki Salmon"
      @change="searchMeals"
    />
    <div class="flex justify-center gap-1 mt-2">
      <router-link :to="{name: 'byName', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import store from "../store";
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
