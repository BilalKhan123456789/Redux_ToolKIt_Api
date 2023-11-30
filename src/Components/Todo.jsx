import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, fetchTodoApi } from "../Store/Features/Todo/Todo";

function Todo() {
  const selector = useSelector((state) => state.todo);

  const fetch_data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  console.log(fetch_data);

  useEffect(()=>{
    dispatch(fetchTodoApi())

  },[dispatch])





  return (
    <>
      <h1>Todo List</h1>

      <button >Get data</button>

      {selector.map((v, i) => (
        <ul key={i}>  
          <li>
            {v.text}
            <button onClick={() => dispatch(removeTodo(v.id))}>delete</button>
          </li>
        </ul>
      ))}

  
    </>
  );
}

export default Todo;
