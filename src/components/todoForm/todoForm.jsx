import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { generateId } from '../../utilities/utilities';
import { addToDo } from '../../features/userlist/userlistSlice';
import './todoForm.css'


export const ToDoFormComponent = (item) => {
    const dispatch = useDispatch()
    const [text,setText] = useState('')
    const handleTextChange = ({target})=>{
        const {value} = target
        setText(value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
          if (text.length){
            const item = {
              id : generateId(),
              text: text
              }
            console.log(item)
            dispatch(addToDo(item))
            setText('')
          }
          
      }

      return (
        <form onSubmit={handleSubmit} className="todoForm">
          <textarea
            type="text"
            role="input"
            placeholder="What to do next?"
            value = {text}
            onChange = {handleTextChange}
            className='toDoInput'
          />
          <input type="submit" role="submit" value="Add" className='btnAdd' />
        </form>
      )

}