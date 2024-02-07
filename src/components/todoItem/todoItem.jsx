import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { editNote, removeToDo } from '../../features/userlist/userlistSlice';
import './todoItem.css'
import Swal from 'sweetalert2';
import { addNote, editProjectNote, getProjectList, removeNote } from '../../features/userprojects/userProjectsSlice';


export const ToDoItem = (item) => {
    const dispatch = useDispatch();
    const projects = useSelector(getProjectList)

    const handleRemove = () => {
        console.log(item.item)
        dispatch(removeToDo(item.item))
        dispatch(removeNote(item.item))
    }

    const handleEdit = () => {
        Swal.fire({
            title: "Change to new text note",
            input: "text",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Confirm",
            showLoaderOnConfirm: true,
            
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(editNote({ id: item.item.id, newText: result.value}))
                dispatch(editProjectNote({ id: item.item.id, newText: result.value}))
              Swal.fire("Done!", "Note has been edited.", "success");
            }
          });
    }

    const withinProject = projects.some((note) => note.id === item.item.id)

    const handleAddNote = () =>{
        if(withinProject){
            Swal.fire({
                title: "This will remove the note from the project",
                text: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
              }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(removeNote(item.item))
                  Swal.fire("Done!", "The note has been removed.", "success");
                }
              })
            
        }else{
            dispatch(addNote(item.item))
        }
        
    }

    return(
        <>
            <div className='itemContainer'>
                <p className='itemP'>{item.text}</p>
                <div>
                    <button onClick={handleRemove} className='btnItem'>&times;</button>
                    <button onClick={handleAddNote} className='btnItem'><img src="src\assets\project.png"/></button>
                    <button onClick={handleEdit} className='btnItem'><img src="src\assets\edit.png"/></button>
                </div>
                
            </div>
        </>
    )
}