import { useDispatch } from "react-redux";
import { markComplatedTodo, markIncompleteTodo, removeTodo, toggleTodo } from "../redux/action/actions";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";


const TodoItemsList = ({ todo, index }) => {
    // console.log(todo, index);
    const dispatch = useDispatch();




    return (
        <div>
            <li className="flex flex-col md:flex-row sm:items-center justify-between border-b-4 py-2 gap-4 ">
                <div className="flex items-center flex-wrap ">
                    <span className="mr-4 text-blue-500 ">{index + 1}</span>
                    <span className={`mr-4 text-blue-500 ${todo.completed ? "line-through text-blue-500 " : ""}`
                    }>{
                            todo.text
                        }</span>
                </div>
                {/*  */}
                <div className="flex space-x-3 ml-6">
                    <button
                        onClick={() => dispatch(toggleTodo(index))}
                        className="mr-2 bg-slate-400 rounded px-2 py-1">
                        {
                            todo.completed ? <BsToggle2Off /> : <BsToggle2On />
                        }
                    </button>
                    {/*  */}
                    <button
                        onClick={() => dispatch(removeTodo(index))}
                        className="mr-2 bg-red-400 rounded px-2 py-1"
                    >
                        <FaTrash />
                    </button>

                    {/*  */}
                    {
                        !todo.completed && (
                            <button
                                onClick={() => dispatch(markComplatedTodo(index))}
                                className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded "
                            >
                                <ImCross />
                            </button>
                        )
                    }
                    {/* ----------- */}
                    {
                        todo.completed && (
                            <button
                                onClick={() => dispatch(markIncompleteTodo(index))}
                                className="mr-2 text-sm bg-green-500 text-white sm:px-2 py-1 px-1 rounded "
                            >
                                <FaCheck />
                            </button>
                        )
                    }
                </div>
            </li>
        </div>
    );
};

export default TodoItemsList;