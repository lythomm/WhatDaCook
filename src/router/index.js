import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByName from '../views/MealsByName.vue'
import SelectedMeals from '../views/SelectedMeals.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/by-name/:letter?',
    name: 'byName',
    component: MealsByName,
  },
  {
    path: '/selectedMeals/',
    name: 'selectedMeals',
    component: SelectedMeals,
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: Ingredients,
  },
  {
    path: '/by-ingredient/:ingredient',
    name: 'byIngredient',
    component: MealsByIngredient,
  },
  {
    path: '/meal/:id',
    name: 'mealDetails',
    component: MealDetails,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;