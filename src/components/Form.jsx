import React from 'react'
import { useState } from 'react';

const Form = ({addTodoList, setAddTodoList}) => {
    const [todoList, setTodoList] = useState({
        name: ""
    })

    const todoHandler = (e) => {
        setTodoList({...todoList, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        setAddTodoList([...addTodoList, todoList])

        setTodoList({
            name: ""
        })
    }
  return (
    <div>
        <div className='container'>
            <form onSubmit={submitHandler}>
                <div className='mb-3'>
                    <label className='fw-bold'>Enter List:</label>
                    <input type='text' className='form-control' name='name' value={todoList.name} onChange={todoHandler}></input>
                    <button type='submit'>Add List</button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Form;