import { takeLatest, put, select } from "redux-saga/effects";
import { CREATE_SHOPPING_LIST } from "../constants/index";
import { saveShoppingList } from "../mealplan/actions";

const getRecipes = state => state.recipes;
const getMealPlan = state => state.mealPlan;

const generateShoppingList = function*() {
  const mealPlan = yield select(getMealPlan);
  if (mealPlan.recipes.length < 0) return;

  const recipes = yield select(getRecipes);
  const shoppingList = [];

  mealPlan.recipes.map(mealPlanItem => {
    const matches = recipes.filter(item => item.id === mealPlanItem.id);
    const { quantity } = mealPlanItem;
    const { ingredients } = matches[0];

    ingredients.map(item => {
      const duplicateIngredient = shoppingList.filter(
        listItem => listItem.name === item.name["Ingredient_Name"]
      );
      if (duplicateIngredient.length > 0) {
        duplicateIngredient[0].quantity += item.Quantity;
      } else {
        const ingredient = {
          id: item.id,
          name: item.name["Ingredient_Name"],
          quantity: item.Quantity * quantity,
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
