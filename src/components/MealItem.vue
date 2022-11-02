<template>
  <div
    class="card__animation bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 w-full object-cover"
      />
    </router-link>
    <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
    <div class="p-3 mb-2">
      <a
        :href="meal.strYoutube"
        target="_blank"
        class="px-3 py-2 rounded border border-red-600 hover:bg-red-600 hover:text-white"
      >
        Youtube
      </a>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    require: true,
    type: Object,
  },
});
</script>

<style scoped>
.card__animation {
  animation: 0.75s ease-in-out slidedown, 0.5s ease-in-out fadein;
}
</style>
