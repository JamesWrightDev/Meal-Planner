import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
  ADD_RECIPE_MEAL_PLAN
  } from '../constants/index';

export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
  }
}

export function fetchRecipesSuccess(response) {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: response
  }
}

export function fetchRecipesFail(error) {
  return {
    type: FETCH_RECIPES_FAIL,
    payload: error
  }
}

export function addRecipeMealplan(id) {
  return {
    type: ADD_RECIPE_MEAL_PLAN,
    payload: id
  }
}