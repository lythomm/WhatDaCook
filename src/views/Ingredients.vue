<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input v-model="keyword" type="text" class="rounded border-2 border-gray-200 w-full mb-3" placeholder="Search for ingredients" @change="searchMeals">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}" class="block bg-white rounded p-3 mb-3 shadow" v-for="ingredient of computedIngredients" :key="ingredient.idIngredient">
        <div class="flex justify-center">
          <img class="w-auto h-48" :src="`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`" :alt="ingredient.strIngredient">
        </div> 
        <h3>{{ ingredient.strIngredient }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import axiosClient from "../axiosClient";

const keyword = ref('')
const ingredients = ref([])
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients
  return ingredients.value.filter(i => 
    (i.strDescription || '').toLowerCase().includes(keyword.value.toLowerCase()) ||
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
})

onMounted(() => {
  axiosClient.get('list.php?i=list')
    .then(({ data }) => {
      ingredients.value = data.meals
    })
})
</script>