import { useState } from "react";
import style from './TodoList.module.css'

const TodoList = ({element,listsItem,setListsItem,number}) => {
  const [isInputShow, setInputShow] = useState(false);
  const [inputData, setInputData] = useState(element.text)

  const onDeleteTask = () => {
    let deletedItem = listsItem.filter((item) => {
      if (item.id !== element.id) {
        return item;
      }
    });

    setListsItem(deletedItem);
    console.log(deletedItem);
  };

  const onEditMode = () => {
    console.log("edit");
    setInputShow(!isInputShow);
  };

  const onChecked =()=>{
    let checkedItem = listsItem.map(item =>{
      if(item.id === element.id){
        return {...item, status: !item.status }
      }
      return item
    }) 
    setListsItem(checkedItem)
  }

  const onEditSaveMode = (newText) =>{
    let edited = listsItem.map(el=>{
      if(el.id === element.id){
        return{...el, text: newText}
      }
      return el
    })
    setListsItem(edited)
  }

  const onSubmitEditForm = (e) =>{
    e.preventDefault()
    onEditSaveMode(inputData)
    setInputShow (false)
   
  }

  return (
    <div className="app">
      {isInputShow ? (
        <form onSubmit={onSubmitEditForm}>
          <input type="text" autoFocus value={inputData} onChange={e => setInputData(e.target.value)}/>
          <button>Сохранить</button>
        </form>
      ) : (
        <div className="todo-list">
          <strong>{number + 1}.</strong>
          <input type="checkbox" checked={element.status} onChange={onChecked}/>
          <span className={element.status === true ? 'line' : ''}>{element.text}</span>
        </div>
      )}
      <div className="todo-btn">
        <button className={style.btn} onClick={onEditMode}>редактировать</button>
        <button onClick={onDeleteTask}>удалить</button>
      </div>
    </div>
  );
};
export default TodoList;
