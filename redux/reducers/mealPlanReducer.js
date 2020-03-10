import { ADD_RECIPE_MEAL_PLAN, CREATE_SHOPPING_LIST } from "../constants/index";

const initalState = {
  recipes: [],
  ingredients: [],
  shoppingList: []
};

const mealPlanReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_RECIPE_MEAL_PLAN:
      const data = action.payload;

      return {
        ...state,
        recipes: [...state.recipes, data.name],
        ingredients: [...state.ingredients, ...data.ingredients]
      };
    case CREATE_SHOPPING_LIST:
      let list = [];

      state.ingredients.forEach(item => {
        let duplicate = list.find(element => element.id === item.id);
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
