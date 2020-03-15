import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
  ADD_RECIPE_MEAL_PLAN,
  REMOVE_RECIPE_MEAL_PLAN,
  CREATE_SHOPPING_LIST,
  SAVE_SHOPPING_LIST
} from "../constants/index";

export function fetchRecipes() {
  return {
    type: FETCH_RECIPES
  };
}

export function fetchRecipesSuccess(response) {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: response
  };
}

export function fetchRecipesFail(error) {
  return {
    type: FETCH_RECIPES_FAIL,
    payload: error
  };
}

export function addRecipeMealplan(id) {
  return {
    type: ADD_RECIPE_MEAL_PLAN,
    payload: id
  };
}

export function removeRecipeMealplan(id) {
  return {
    type: REMOVE_RECIPE_MEAL_PLAN,
    payload: id
  };
}

export function createShoppingList(mealPlan) {
  return {
    type: CREATE_SHOPPING_LIST,
    payload: mealPlan
  };
}

export function saveShoppingList(shoppingList) {
  return {
    type: SAVE_SHOPPING_LIST,
    payload: shoppingList
  };
}
