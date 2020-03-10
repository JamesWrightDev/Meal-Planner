import { ADD_RECIPE_MEAL_PLAN, CREATE_SHOPPING_LIST } from "../constants/index";

const initalState = {
  recipes: [],
  ingredients: [],
  shoppingList: []
};

const list = [];

const mealPlanReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_RECIPE_MEAL_PLAN:
      return {
        ...state,
        recipes: [...state.recipes, {name: action.payload.name, id: action.payload.id}],
        ingredients: [...state.ingredients, ...action.payload.ingredients]
      };
    case CREATE_SHOPPING_LIST:

      state.ingredients.forEach(item => {
        const duplicate = list.find(element => element.id === item.id);
        if (duplicate) {
          duplicate.Quantity += item.Quantity;
        } else {
          list.push(item);
        }
      });

      return {
        ...state,
        shoppingList: list
      };

    default:
      return state;
  }
};

export default mealPlanReducer;
