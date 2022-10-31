<template>
  <div class="p-8">
    <h1 class="mb-4 text-4xl font-bold">Random meals</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient'
import MealItem from '../components/MealItem.vue'

const meals = ref([])

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get('random.php')
      .then(({ data }) => meals.value.push(data.meals[0]))
  }
})
</script>