const habitsReducerDefaultStart = [];

const habitsReducer = (state=habitsReducerDefaultStart, action)=> {
    switch (action.type) {
        case 'ADD_HABIT':
            return [
                ...state, 
                action.habit
            ]
        default:
            return state
    }
}

export default habitsReducer;