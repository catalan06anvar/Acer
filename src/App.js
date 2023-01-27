import { useEffect, useState } from "react";
import "./App.css";
import { AddForm } from "./components/addForm/AddForm";
import { Header } from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";

function App() {
  // const [plus, setPlus] = useState(0);
  // console.log(state);
  const [inputText, setInputText] = useState("");
  const [listsItem, setListsItem] = useState(JSON.parse(localStorage.getItem('todoItems')) || []);
 
  useEffect(()=>{
    localStorage.setItem('todoItems', JSON.stringify(listsItem))
  })
 
  let result = listsItem.reduce((acc, curStatus)=>{
    return acc + curStatus.status
  }, 0)
 
  //  ([ // { id: 1, status:false, text: "выучить базу js" },
  //   // { id: 2, status:false, text: "выучить базу html" },
  //   // // { id: 3, text: "выучить базу css" },
  // // ]);

  // let result = 0

  

  const onSubmitForm = (e) =>{
    e.preventDefault();
    if (inputText === ''){
      alert('Добавьте задачу')
      return inputText
    }
    
    let newTodo = {
      id: Date.now(),
      status: false,
      text: inputText,
    }
    setListsItem([...listsItem, newTodo]);
    setInputText('');
  }
  return (
    <div className='app-wrapper'>
      <Header result={result} listsItem={listsItem}/>



      <AddForm setInputText={setInputText} inputText={inputText} onSubmitForm={onSubmitForm} />
      

      {
       listsItem.length ?
      listsItem.map((element, index) => (
        <TodoList listsItem={listsItem} setListsItem={setListsItem} number={index} key={element.id} element={element} />
      )):
      <h1>Нет задач!</h1>
      }
      {/*TodoList()*/}
      </div>
    
  )
}

export default App;
