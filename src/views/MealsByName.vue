<template>
  <div class="p-8 pb-0">
    <input v-model="keyword" type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals" @change="searchMeals">

    <div class="grid grid-cols-1 md:grid-cols-6 gap-5 p-8">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
          <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl h-48 w-full object-cover"> 
        </router-link>
        <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
        <div class="p-3">
          <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border border-red-600">
            Youtube
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from '../store'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>