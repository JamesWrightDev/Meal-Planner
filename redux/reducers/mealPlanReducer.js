import { ADD_RECIPE_MEAL_PLAN } from '../constants/index';
const initalState = {
  recipes: [],
  ingredients: []
};

export const mealPlanReducer = (state = initalState , action) => {

  switch (action.type) {
    case ADD_RECIPE_MEAL_PLAN:
      const data = action.payload;

      return {
        ...state,
        recipes: [...state.recipes, data.name],
        ingredients: [...state.ingredients, ...data.ingredients]
      }

    default:
      return state
  }
};