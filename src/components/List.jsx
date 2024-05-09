import { useMemo } from "react";
import { useSelector } from "react-redux";
import TodoItemsList from "./TodoItemsList";


const List = () => {
    const filterTodos = useSelector(state => {
        return state.todos;
    });

    const filter = useSelector(state => {
        return state.filter;
    });

    const search = useSelector(state => {
        return state.search;
    });

    // 
    const filteredTodos = useMemo(() => {
        return filterTodos.filter((todo) => {
            const matchFilter = (filter === "COMPLETED" && todo.completed) ||
                (filter === "INCOMPLETE" && !todo.completed) ||
                (filter === "ALL");

            const matchSearch = todo.text.toLowerCase().includes(search);
            return matchFilter && matchSearch;
        });
    }, [filter, filterTodos, search]);

    // console.log("filterdTodo :", filterTodos , "search : ", search, "filter::: ", filter);
    // const todoo = filteredTodos.map((todo)=> todo.text);
    // console.log("totalFilter : >> ",todoo);


    return (
        <div>
            <ul>
                {
                    filteredTodos.map((todo, index) => (
                        <TodoItemsList
                            key={index}
                            todo={todo}
                            index={index}
                        >
                        </TodoItemsList>
                    ))
                }
            </ul>
        </div>
    );
};

export default List;