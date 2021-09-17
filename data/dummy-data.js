import Category from '../models/category';
// import Meal from '../models/meals';

export const CATEGORIES = [
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c2', 'Quick & Easy', '#f54242'),
    new Category('c3', 'Hamburgers', '#f5a442'),
    new Category('c4', 'German', '#f5d142'),
    new Category('c5', 'Light & Lovely', '#368dff'),
    new Category('c6', 'Exotic', '#41d95d'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'Asian', '#b9ffb0'),
    new Category('c9', 'French', '#ffc7ff'),
    new Category('c10', 'Summer', '#47fced')
];

// Not working don't know why

// export const MEALS = [
//     new Meal(
//       'm1',
//       ['c1', 'c2'],
//       'Spaghetti with Tomato Sauce',
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'
//     ),
  
//     new Meal(
//       'm2',
//       ['c2'],
//       'Toast Hawaii',
//       'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'
//     ),
  
//     new Meal(
//       'm3',
//       ['c3'],
//       'Classic Hamburger',
//       'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'
//     ),
  
//     new Meal(
//       'm4',
//       ['c4'],
//       'Wiener Schnitzel',
//       'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg'
//     ),
  
//     new Meal(
//       'm5',
//       ['c2', 'c5', 'c10'],
//       'Salad with Smoked Salmon',
//       'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg'
//     ),
  
//     new Meal(
//       'm6',
//       ['c6', 'c10'],
//       'Delicious Orange Mousse',
//       'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg'
//     ),
  
//     new Meal(
//       'm7',
//       ['c7'],
//       'Pancakes',
//       'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg'
//     ),
  
//     new Meal(
//       'm8',
//       ['c8'],
//       'Creamy Indian Chicken Curry',
//       'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg'
//     ),
  
//     new Meal(
//       'm9',
//       ['c9'],
//       'Chocolate Souffle',
//       'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg'
//     ),
//     new Meal(
//       'm10',
//       ['c2', 'c5', 'c10'],
//       'Asparagus Salad with Cherry Tomatoes',
//       'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg'
//     )
// ];

export const MEALS = [
  {
    id: 'm1',
    categoryIds: ['c1', 'c2'],
    title: 'Spaghetti with Tomato Sauce',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'
  },

  {
    id: 'm2',
    categoryIds: ['c2'],
    title:'Toast Hawaii',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'
  },

  {
    id: 'm3',
    categoryIds: ['c3'],
    title: 'Classic Hamburger',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'
  },

  {
    id: 'm4',
    categoryIds: ['c4'],
    title: 'Wiener Schnitzel',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg'
  },

  {
    id: 'm5',
    categoryIds: ['c2', 'c5', 'c10'],
    title: 'Salad with Smoked Salmon',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg'
  },

  {
    id: 'm6',
    categoryIds: ['c6', 'c10'],
    title: 'Delicious Orange Mousse',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg'
  },

  {
    id: 'm7',
    categoryIds: ['c7'],
    title: 'Pancakes',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg'
  },

  {
    id: 'm8',
    categoryIds: ['c8'],
    title: 'Creamy Indian Chicken Curry',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg'
  },

  {
    id: 'm9',
    categoryIds: ['c9'],
    title: 'Chocolate Souffle',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg'
  },
  {
    id: 'm10',
    categoryIds: ['c2', 'c5', 'c10'],
    title: 'Asparagus Salad with Cherry Tomatoes',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg'
  }
];