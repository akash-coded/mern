import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            // return state.concat([action.text]);
            return [
                ...state,
                { id: Date.now(), text: action.text, completed: false }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}

export default todos;