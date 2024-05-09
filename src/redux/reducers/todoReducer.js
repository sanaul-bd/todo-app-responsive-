import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLATED_TODO, MARK_COMPLATED_TODO, MARK_INCOMPLATE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "../action/todoConstants";


const initialState = {
    todos: [],
    filter: "ALL",
    search: "",
};


const todoReducer = (state = initialState, action) => {
    switch (action.type)  {
        case ADD_TODO:
            return {
                todos: [...state.todos, {
                    text: action.payLoad.text, completed: false
                }],
                filter: state.filter,
                search: state.search
            }

        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo, i) => i === action.payLoad.id ?
                    { ...todo, completed: !todo.completed } : todo),
                filter: state.filter,
                search: state.search
            }

        case REMOVE_TODO:
            return {
                todos: state.todos.filter((todo, i) => i !== action.payLoad.id),
                filter: state.filter,
                search: state.search
            }

        case MARK_COMPLATED_TODO:
            return {
                todos: state.todos.map((todo, i) =>
                    i === action.payLoad.id ?
                        { ...todo, completed: true } : todo
                ),
                filter: state.filter,
                search: state.search
            }

        case MARK_INCOMPLATE_TODO:
            return {
                todos: state.todos.map((todo, i) =>
                    i === action.payLoad.id ?
                        { ...todo, completed: false } : todo
                ),
                filter: state.filter,
                search: state.search
            }

        case FILTER_TODO:
            return {
                todos: state.todos,
                filter: action.payLoad.filter,
                search: state.search
            }

        case SEARCH_TODO:
            return {
                todos: state.todos,
                filter: state.filter,
                search: action.payLoad.search
            }

        case MARK_ALL_COMPLATED_TODO:
            return {
                todos: state.todos.map((todo) =>
                ({
                    ...todo, completed: true,
                })
                ),
                filter: state.filter,
                search: state.search
            }

        default:
            return state;
    }
};

export default todoReducer; 