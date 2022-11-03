<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Selected Meals</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import MealItem from '../components/MealItem.vue'

const meals = store.state.selectedMeals;

onMounted(async () => {
});
</script>
