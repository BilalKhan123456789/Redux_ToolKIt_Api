import { createSlice, nanoid,createAsyncThunk } from "@reduxjs/toolkit";


// this is inital State render all data
const initialState = {
  todo: [],
  data:null,
  isLoading:false


};

// this function Fetch Api

export const fetchTodoApi = createAsyncThunk("Fetch_Todo_Api",async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json()


})



// its createSlice method this given a reducer & Function
export const TodoSlice = createSlice({
  name: "Todo List",
   initialState,

  //  its extra Reducer its working to handling api res

   extraReducers:(builder)=>{

builder.addCase(fetchTodoApi.pending,(state,action)=>{
state.isLoading = true
})

    builder.addCase(fetchTodoApi.fulfilled, (state,action)=>{
      state.isLoading = false
      state.data=action.payload
    })
  },

  // this is reducer
  reducers: { 
    // addTodo function
    addTodo: (state, action) => {
      const Todos = {
        id: nanoid(),
        text: action.payload,
      }
      state.todo.push(Todos)
    },
  // Remover Todo function
    removeTodo:(state,action)=>{
        state.todo = state.todo.filter((v)=>v.id !==action.payload)
    }

  },
});



export const {addTodo,removeTodo} = TodoSlice.actions


export default TodoSlice.reducer
