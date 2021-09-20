import { CATEGORIES } from '../../data/dummy-data';

const initialState = {
    categories: CATEGORIES
}

const CategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
} 

export default CategoryReducer;