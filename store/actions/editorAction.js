export const SAVE_DATA = 'SAVE_DATA';

export const saveData = text => {
    return {
        type: SAVE_DATA,
        payload: text
    }
}