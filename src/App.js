import "./App.css";
import React,{useState} from "react";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setAddTodoForm]=useState(false);
  const [todos,setTodos]=useState( [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Go for a run", rowAssigned: "User Two" },
    {
      rowNumber: 3,
      rowDescription: "Buy groceries",
      rowAssigned: "User Three",
    },
    { rowNumber: 4, rowDescription: "Read a book", rowAssigned: "User One" },
    { rowNumber: 5, rowDescription: "Write a report", rowAssigned: "User Two" },
  ]);

  const addTodo=(description,assigned)=>{
    let rowNumber=0;
    if(todos.length>0){
      rowNumber= todos[todos.length-1].rowNumber+1;}
      else{rowNumber=1;}

      const newTodo={
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      }
      setTodos(todos=> [...todos,newTodo]);
      console.log(todos);
  }

  const deleteTodo=(deleteTodoRowNumber)=>{
    let filtered=todos.filter(function(value){
      return value.rowNumber!==deleteTodoRowNumber;
    });
    setTodos(filtered);
  }
  return (
    <div className="mt-5 card">
      <div className="card-header">You Todo's</div>
      <div className=" card-body">
        <TodoTable todos={todos} deleteTodo={deleteTodo}/> 
        <button className="btn btn-primary" onClick={()=> setAddTodoForm(!showAddTodoForm)}>
          {showAddTodoForm ? 'Close Form' : 'Show Form'}</button>  
        {showAddTodoForm &&
        <NewTodoForm addTodo={addTodo}/> }
      </div>
    </div>
  );
}

export default App;
