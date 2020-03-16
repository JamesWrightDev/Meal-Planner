import { takeLatest, put, select } from "redux-saga/effects";
import { CREATE_SHOPPING_LIST } from "../constants/index";
import { saveShoppingList } from "./actions";

const getRecipes = state => state.recipes;
const getMealPlan = state => state.mealPlan;

const generateShoppingList = function*() {
  const mealPlan = yield select(getMealPlan);
  if (mealPlan.recipes.length < 0) return;

  const recipes = yield select(getRecipes);
  const shoppingList = [];

  mealPlan.recipes.forEach(mealPlanItem => {
    const matchingRecipe = recipes.find(item => item.id === mealPlanItem.id);
    const { ingredients } = matchingRecipe;

    ingredients.forEach(item => {
      const duplicateIngredient = shoppingList.find(
        listItem => listItem.name === item.name.Ingredient_Name
      );
      if (duplicateIngredient) {
        duplicateIngredient.quantity += item.Quantity;
      } else {
        const ingredient = {
          id: item.id,
          name: item.name.Ingredient_Name,
          quantity: item.Quantity * mealPlanItem.quantity,
          metric: item.Metric
        };
        shoppingList.push(ingredient);
      }
    });
  });

  yield put(saveShoppingList(shoppingList));
};

export default function* mealPlanWatcher() {
  yield takeLatest(CREATE_SHOPPING_LIST, generateShoppingList);
}
