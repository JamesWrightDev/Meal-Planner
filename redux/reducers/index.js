import { FETCH_RECIPES_SUCCESS } from '../constants/index';
const initalState = {
  "recipeCollection": [
    {
      'id': "1",
      "name": "Pie and Mash",
      "imageUrl": ["https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&dpr=2&      w=500.jpeg"],
      "ingredients": [
        {
          "name": "olive oil",
          "quantity": 1,
          "metric": 'tbsp',
        },
        {
          "name": "bacon",
          "quantity": 5,
          "metric": 'slices',
        },
        {
          "name": "carrot",
          "quantity": 2,
          "metric": 'quantity',
        },
        {
          "name": "celery",
          "quantity": 2,
          "metric": 'quantity',
        },
        {
          "name": "garlic cloves",
          "quantity": 2,
          "metric": 'quantity',
        },
      ],
      "method": [
        "Put a large saucepan on a medium heat and add 1 tbsp olive oil.",
        "Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.",
        "Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens."
      ],
      "time":"2 hrs",
      "tags": ['italian', 'spagetti']
    },
    {
      'id': "9",
      "name": "Spaghetti Bolognese",
      "imageUrl": ["https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&dpr=2&      w=500.jpeg"],
      "ingredients": [
        {
          "name": "olive oil",
          "quantity": 1,
          "metric": 'tbsp',
        },
        {
          "name": "bacon",
          "quantity": 5,
          "metric": 'slices',
        },
        {
          "name": "carrot",
          "quantity": 2,
          "metric": 'quantity',
        },
        {
          "name": "celery",
          "quantity": 2,
          "metric": 'quantity',
        },
        {
          "name": "garlic cloves",
          "quantity": 2,
          "metric": 'quantity',
        },
      ],
      "method": [
        "Put a large saucepan on a medium heat and add 1 tbsp olive oil.",
        "Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.",
        "Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens."
      ],
      "time":"2 hrs",
      "tags": ['italian', 'spagetti']
    },
    {
      'id': "12314234",
      "name": "Spaghetti Bolognese",
      "imageUrl": ["https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&dpr=2&      w=500.jpeg"],
      "ingredients": [
        {
          "name": "olive oil",
          "quantity": 1,
          "metric": 'tbsp',
        },
        {
          "name": "bacon",
          "quantity": 5,
          "metric": 'slices',
        },
        {
          "name": "carrot",
          "quantity": 2,
          "metric": 'quantity',
        },
        {
          "name": "celery",
          "quantity": 2,
          "metric": 'quantity',
        },
        {
          "name": "garlic cloves",
          "quantity": 2,
          "metric": 'quantity',
        },
      ],
      "method": [
        "Put a large saucepan on a medium heat and add 1 tbsp olive oil.",
        "Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.",
        "Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens."
      ],
      "time":"2 hrs",
      "tags": ['italian', 'spagetti']
    },
  ],
};

export const recipeReducer = (state = initalState, action) => {


  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      const data = action.payload;
      return {
        ...data
      }

    default:
      return state
  }
};