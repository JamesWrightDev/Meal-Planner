import { ADD_RECIPE_MEAL_PLAN } from '../constants/index';
const initalState = [];

export const mealPlanReducer = (state = initalState, action) => {


  switch (action.type) {
    case ADD_RECIPE_MEAL_PLAN:
      const data = action.payload;
      return [...state, data]

    default:
      return state
  }
};