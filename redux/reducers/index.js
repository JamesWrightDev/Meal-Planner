import { FETCH_RECIPES_SUCCESS } from "../constants/index";

const initalState = null;

const recipeReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};

export default recipeReducer;
