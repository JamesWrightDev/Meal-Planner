import { ADD_RECIPE_MEAL_PLAN, CREATE_SHOPPING_LIST } from "../constants/index";

const initalState = {
  recipes: [
  ],
  ingredients: [],
  shoppingList: []
};

const list = [];

const updateMealplan = (state, action) => {
  const itemExisits = state.recipes.filter(
    item => item.id === action.payload.id
  );

  if (itemExisits.length === 0) {
    return [...state.recipes, { id: action.payload.id, quantity: 1 }];
  }

  return state.recipes.map(item => {
    if (item.id !== action.payload.id) {
      return item;
    }

    let { quantity } = item;
    quantity += 1;

    return {
      id: item.id,
      quantity
    };
  });
};

const mealPlanReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_RECIPE_MEAL_PLAN:
      return {
        ...state,
        recipes: updateMealplan(state, action)
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
