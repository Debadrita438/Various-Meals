import { SAVE_DATA } from "../actions/editorAction"

const initialState = {
    text: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SAVE_DATA: 
            return {
                text: action.payload
            }
        default: 
            return state
    }
}