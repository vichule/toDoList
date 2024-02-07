import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProject } from "../../features/userprojects/userProjectsSlice"
import { generateId } from "../../utilities/utilities"


export const ProjectFormComponent = (project) =>{
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
            dispatch(addProject(item))
            setText('')
          }
          
      }


    return (
        <>
        <form onSubmit={handleSubmit} className="todoForm">
          <input
            type="text"
            placeholder="Type your new project title"
            value = {text}
            onChange = {handleTextChange}
            className='toDoInput'
          />
          <input type="submit" role="submit" value="Add" className='btnAdd' />
        </form>
        </>
    )
}