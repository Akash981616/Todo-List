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
      <div>
        <div className="todolist">
          <h1>to do list</h1>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Add tasks"
            ref={itemsRef}
            value={items}
            onChange={(e) => setItem(itemsRef.current.value)}
          ></input>
          <i
            className="fa fa-plus"
            aria-hidden="true"
            onClick={() => dispatch(addTodo(items), setItem(""))}
          ></i>
        </div>
        {tasks.map((ele) => {
          return (
            <div key={ele.id}>
              <h1>{ele.data}</h1>
              <i
                className="fas fa-trash-alt"
                onClick={() => dispatch(deleteTodo(ele.id))}
              >
                {" "}
              </i>
            </div>
          );
        })}
        <div><button onClick={()=>{
          dispatch(removeTodo())
        }}>Remove All</button></div>
      </div>
    </>
  );
};

export default Todo;
