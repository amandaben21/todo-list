import React from 'react'

const Display = ({addTodoList}) => {
  return (
    <div>
        <div className='container'>
            {
                addTodoList.map((todoList, idx) =>(
                    <div key={idx}>
                        <label>{todoList.name}</label>
                        <input type='checkbox'></input>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default Display;