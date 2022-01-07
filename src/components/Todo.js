import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/TodoActions";

const Todo = () => {
  const [items, setItem] = useState([]);
  const itemsRef = useRef(null);
  const { tasks } = useSelector((state) => state.todoreducer);
  const dispatch = useDispatch();
  // const forInput = useEffect(() => {}, []);
  return (
    <>
      <div className="my-56 px-0">
        <div className="">
          <h1 className="text-6xl  font-bold text-cyan-500">Create Daily Tasks</h1>
        </div > 
        <div className="text-2xl  mx-9 font-bold bg-white 810 my-20 min w-96 rounded-md  border-solid border-2 border-light-blue-900">
          <input className="focus:outline-none focus-visible:ring  active:bg-none  placeholder-shown:border-gray-500 required:border-red-500  py-2 px-4 text-orange-500 w-90 focus:border-none "
            type="text"
           
            placeholder="Add tasks"
            ref={itemsRef}
            value={items}
            onChange={(e) => setItem(itemsRef.current.value)}
          ></input>
          <i
            className="fa fa-plus text-3.5xl px-6  text-sky-400/100 font-extrabold"
            aria-hidden="true"

            onClick={() => dispatch(addTodo(items), setItem(""))}
          ></i>
        </div>
        {tasks.map((ele) => {
          return (
            <div key={ele.id} className="flex my-8 mx-14">
            
              <h1 className= " text-5xl text-sky-400/100">{ele.data}</h1>
              <i 
                className="mx-10 fas fa-trash-alt text-5xl text-rose-500"
                onClick={() => dispatch(deleteTodo(ele.id))}
              >
                {" "}
              </i>
              
            </div>
          );
        })}
        <div className="text-3xl my-20 flex items-center  mx-20"><button className="px-20 py-3 font bg-teal-400 text-pink-600 rounded-md" onClick={()=>{
          dispatch(removeTodo())
        }}>Remove All</button></div>
      </div>
    </>
  );
};

export default Todo;
