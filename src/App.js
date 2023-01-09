import { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList/TodoList";

function App() {
  let [plus,setPlus] = useState(0)
  // console.log(state);
  let [inputText, setInputText] = useState('hello')

  const listsItem = [
    {id:1,text:'выучить базу js'},
    {id:2,text:'выучить базу html'},
    {id:3,text:'выучить базу css'},
  ]

// let result = 0

const onAdd = () =>{
  setPlus(plus + 1)
  // result += 1
  // console.log(result);
}

const onMinus = () =>{
  setPlus(plus - 1)
}
const onInputChange =(event) =>{
setInputText(event.target.value)
console.log(event);
}
  return (
    <div>
      <h1>{inputText}</h1>
      <input type='text' value={inputText} onChange={onInputChange}/>
      <h1>{plus}</h1>
      <button onClick={onAdd}> + increment</button>
      <button onClick={onMinus}> - decrement</button>
      {
        listsItem.map(element =>
          <TodoList element={element}/>
          )
      }
      
      {/*TodoList()*/}
    </div>
  );
}

export default App;
