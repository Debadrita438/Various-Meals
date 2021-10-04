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

export const USERS = [
  {
    id: 1,
    name: 'Test A',
    age: 22,
    imageUrl: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    profession: 'Trainee Software Developer',
    phoneNo: '+91 9876124539',
    streetAddress: 'Ghosh Para Road',
    city: 'Bhatpara',
    state: 'West Bengal',
    country: 'India',
    lat: 22.5748,
    lng: 	88.39825
  },
  {
    id: 2,
    name: 'Test B',
    age: 24,
    imageUrl: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    profession: 'App Developer',
    phoneNo: '+91 9736128720',
    streetAddress: 'Daskhin Para Main Road',
    city: 'Bansberia',
    state: 'West Bengal',
    country: 'India',
    lat: 22.9665,
    lng: 88.3893
  },
  {
    id: 3,
    name: 'Test C',
    age: 35,
    imageUrl: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    profession: 'Senior Developer',
    phoneNo: '+91 9123458769',
    streetAddress: 'Boro Mitro Bagan',
    city: 'Chandannagar',
    state: 'West Bengal',
    country: 'India',
    lat: 22.6871,
    lng: 88.3674
  },
  {
    id: 4,
    name: 'A',
    age: 30,
    imageUrl: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    profession: 'Doctor',
    phoneNo: '+91 9645781203',
    streetAddress: '613, Grand Trunk Road',
    city: 'Serampore',
    state: 'West Bengal',
    country: 'India',
    lat: 22.7493,
    lng: 88.3472
  },
  {
    id: 5,
    name: 'B',
    age: 26,
    imageUrl: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    profession: 'Civil Engineer',
    phoneNo: '+91 9432156987',
    streetAddress: '68 Jessore Road',
    city: 'Dum Dum',
    state: 'West Bengal',
    country: 'India',
    lat: 22.6420,
    lng: 88.4312
  }, 
  {
    id: 6,
    name: 'C',
    age: 29,
    imageUrl: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    profession: 'Researcher',
    phoneNo: '+91 9945783612',
    streetAddress: '21 Bondel Road',
    city: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    lat: 22.929,
    lng: 88.361
  }
]