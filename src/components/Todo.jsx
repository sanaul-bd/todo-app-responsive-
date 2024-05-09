import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action/actions";
import FilterButton from "./FilterButton";
import { BsSearch } from "react-icons/bs";
import List from "./List";


const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos);
    // console.log(todos);

    // 
    const [todoText, setTodoText] = useState('')
    const [searchText, setSearchText] = useState('')
    // console.log(todoText, "searchText: ", searchText);


    // 
    const handleAddTodo = (text) => {
        dispatch(addTodo(text))
    }
    // save todo function
    const saveTodo = () => {
        if (todoText.trim() !== '') {
            // console.log("save todo Clicked", todoText.trim());
            handleAddTodo(todoText.trim())
            setTodoText('')
        }
    }

    // handleSearchTodo
    const handleSearchTodo = (value) => {
        setSearchText(value.trim())
        if (searchText !== "") {
            // console.log("clicked", searchText);
        }
    }

    return (
        <div className="max-w-6xl bg-slate-300 mx-auto sm:mt-8 p-4  rounded">
            <h1 className='mt-2 mb-5 text-2xl font-semibold text-center text-blue-700 uppercase'>Todo List App</h1>

            {/* input button */}
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Enter Your Task"
                    name="text"
                    id="addTodo"
                    onChange={(e) => setTodoText(e.target.value)}
                    className="flex-grow p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
                />

                <button
                    onClick={saveTodo}
                    className="mx-2 text-orange-500 text-2xl hover:text-white hover:bg-orange-400 px-3 py-2 rounded-lg"
                ><FaArrowAltCircleRight />
                </button>
            </div>

            {/* filter || search  */}
            <div className="flex justify-between items-center flex-wrap">
                {/* make a component and call here  */}
                <FilterButton />
                {/* search section */}
                <div className="flex items-center justify-end mt-4 sm:mt-0">
                    <input
                        className="flex-grow p-1  focus:outline-none"
                        // onChange={(e) => setSearchText(e.target.value)}
                        onChange={(e) => handleSearchTodo(e.target.value)}
                        type="text"
                        // value={searchText}
                        placeholder="Search"
                    />
                    <button
                        onClick={saveTodo}
                        className="mx-2 text-orange-500 text-2xl hover:text-white hover:bg-yellow-500 px-3 py-2 rounded-lg">
                        <BsSearch />
                    </button>
                </div>
            </div>

            {/* list component  */}
            <List />
        </div>
    );
};

export default Todo;