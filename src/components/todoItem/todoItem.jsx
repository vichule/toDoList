import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { removeToDo } from '../../features/userlist/userlistSlice';
import './todoItem.css'


export const ToDoItem = (item) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        console.log(item.item)
        dispatch(removeToDo(item.item))
    }

    return(
        <>
            <div className='itemContainer'>
                <p className='itemP'>{item.text}</p>
                <div>
                    <button onClick={handleRemove} className='btnItem'>&times;</button>
                    <button className='btnItem'><img src="src\assets\project.png"/></button>
                    <button className='btnItem'><img src="src\assets\edit.png"/></button>
                </div>
                
            </div>
        </>
    )
}