import { useDispatch, useSelector } from "react-redux";
import { filterTodo, mark_all_completed_todo } from "../redux/action/actions";


const FilterButton = () => {
    const dispatch = useDispatch();
    const currentFilture = useSelector(state => state.filter);

    const handleFilter = (filter) => {
        dispatch(filterTodo(filter))
    }

    return (
        <div className="flex space-x-4 items-center">
            <select
                className="text-sm px-2 py-1 border-blue-200 focus:outline-none"
                name=""
                id=""
                value={currentFilture}
                onChange={(e)=>handleFilter(e.target.value)}
            >
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

            <button 
            onClick={()=> dispatch(mark_all_completed_todo())}
            className="text-sm px-2 py-1 bg-slate-400 rounded text-black font-semibold hover:font-semibold hover:text-white hover:bg-blue-900"
            >Mark All Completed </button>
        </div>
    );
};

export default FilterButton;