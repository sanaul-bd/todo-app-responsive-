import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLATED_TODO, MARK_COMPLATED_TODO, MARK_INCOMPLATE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./todoConstants"


export const addTodo = (text) => ({
    type: ADD_TODO,
    payLoad: { text }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payLoad: { id }
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payLoad: { id }
});

export const markComplatedTodo = (id) => ({
    type: MARK_COMPLATED_TODO,
    payLoad: { id }
});

export const mark_all_completed_todo = () => ({
    type: MARK_ALL_COMPLATED_TODO,
});

export const markIncompleteTodo = (id) => ({
    type: MARK_INCOMPLATE_TODO,
    payLoad: { id }
});

export const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payLoad: { filter }
});

export const searchTodo = (search) => ({
    type: SEARCH_TODO,
    payLoad: { search }
});
