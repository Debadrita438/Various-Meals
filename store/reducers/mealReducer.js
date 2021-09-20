import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS
}

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}