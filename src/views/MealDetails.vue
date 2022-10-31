<template>
  <div class="mx-4">
    <h1 class="text-4xl font-bold my-4">{{ meal.strMeal }}</h1>
    <img class="w-auto h-80 rounded-2xl mb-4" :src="meal.strMealThumb" :alt="meal.strMeal">
    <div class="flex justify-between">
      <div>
        <b>Area</b> : {{meal.strArea}}
      </div>
      <div>
        <b>Category</b> : {{meal.strCategory}}
      </div>
      <div>
        <b>Tags</b> : {{meal.strTags}}
      </div>
    </div>
    <div class="mt-4">
      <h1 class="text-2xl font-semibold">Ingredients</h1>
      <div class="grid grid-cols-2">
        <div v-for="index in counter" :key="index">
          {{ meal[`strIngredient${index}`] }} - {{ meal[`strMeasure${index}`] }}
        </div>
      </div>
    </div>
    <div class="mt-4">
      <h1 class="text-2xl font-semibold">Instructions</h1>
      <div v-for="(instruction, index) in instructionsArray[0]" :key="instruction">
        {{index+1}}. {{ instruction }}
      </div>
    </div>
    <div class="py-6">
      <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border border-red-600 hover:bg-red-600 hover:text-white">
        Youtube
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'

const route = useRoute()
const meal = ref({})
const counter = ref(0)
const instructionsArray = ref([])

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0]
      instructionsArray.value.push(meal.value.strInstructions.split("."))
      instructionsArray.value[0].pop()
      getNumberOfIngredient()
    })
})

function getNumberOfIngredient() {
  for (let index = 1; index < 20; index++) {
    if (meal.value[`strIngredient${index}`] !== null && meal.value[`strIngredient${index}`] !== '') {
      counter.value += 1
    } else {
      break
    }
  }
}
</script>