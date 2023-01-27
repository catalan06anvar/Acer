import React from 'react'

export const AddForm = ({inputText, onSubmitForm, setInputText}) => {
  return (
    <form className='addForm' onSubmit={onSubmitForm}>
        <input type="text" value={inputText} onChange={e=>setInputText(e.target.value)} />
        <input type="submit" />
      </form>
  )
}
