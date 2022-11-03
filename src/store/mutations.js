export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
  state.searchedMeals = meals || []
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals || []
}

export function setAddMeal(state, meal) {
  state.selectedMeals.push(meal)
}