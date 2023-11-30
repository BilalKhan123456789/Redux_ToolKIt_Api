import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Store/Features/Todo/Todo'


function AddTodo() {

const [inp,setinp] = useState()

const dispatch = useDispatch()

const handleSubmitTodo =()=>{

  dispatch(addTodo(inp))
  
  setinp("")
}
  



  return (
    <>

<input type="text" value={inp} onChange={(e)=>setinp(e.target.value)} name="" id="" />      
<button onClick={handleSubmitTodo}>Add Data</button>

    </>
  )
}

export default AddTodo
