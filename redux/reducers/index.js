import { FETCH_RECIPES_SUCCESS } from '../constants/index';
const initalState = null;

export const recipeReducer = (state = initalState, action) => {

  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      const data = action.payload;
      return [...data]

    default:
      return state
  }
};