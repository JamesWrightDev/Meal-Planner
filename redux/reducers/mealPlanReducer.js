import {
  ADD_RECIPE_MEAL_PLAN,
  REMOVE_RECIPE_MEAL_PLAN,
  SAVE_SHOPPING_LIST,
 } from "../constants/index";

const initalState = {
  recipes: [
  ],
  shoppingList: []
};

const list = [];

const updateMealplan = (state, action, add) => {
  const itemExists = state.recipes.filter(
    item => item.id === action.payload.id
  );

  if (itemExists.length === 0) {
    return [...state.recipes, { id: action.payload.id, quantity: 1, name: action.payload.name }];
  }

  if(itemExists[0].quantity < 2 && !add) {
    return state.recipes.filter(item => item.id !== action.payload.id);
  }

  return state.recipes.map(item => {
    if (item.id !== action.payload.id) {
      return item;
    }

    let { quantity } = item;
    if(add){
      quantity += 1;
    } else {
      quantity -= 1;
    }

    return {
      id: item.id,
      name: item.name,
      quantity
    };
  });
};

const mealPlanReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_RECIPE_MEAL_PLAN:
      return {
        ...state,
        recipes: updateMealplan(state, action, true)
      };

    case REMOVE_RECIPE_MEAL_PLAN:
      return {
        ...state,
        recipes: updateMealplan(state, action, false)
      };

    case SAVE_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: action.payload,
      };

    default:
      return state;
  }
};

export default mealPlanReducer;
