import React from 'react'

const Additem = ({newItem, setNewItem,handleSubmit}) => {
  return (
    <form className='input-area' onSubmit={handleSubmit}>
        <input id='addTask'
        autoFocus
        type='text'
        placeholder='enter task'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
         />
         <button type='submit' id='submit'>Add task</button>
    </form>
  )
}

export default Additem;