export const initialState = {
    tasks: [
        {
            "id": 1,
            "title": "Reading",
            "completed": true
        },
        {
            "id": 2,
            "title": "Play Football",
            "completed": false
        },
        {
            "id": 3,
            "title": "Drink Green Tea",
            "completed": false
        },
        {
            "id": 4,
            "title": "Workout",
            "completed": false
        }
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.payload.id) {
                        item.title = action.payload.title;
                    }
                    return item;
                })
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.id)
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'COMPLETE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.payload.id) {
                        item.completed = action.payload.completed;
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}

export default reducer;