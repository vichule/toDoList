import { useDispatch, useSelector } from 'react-redux'
import './projectItem.css'
import { editTitle, getProjectList, removeProject } from '../../features/userprojects/userProjectsSlice'
import { ToDoItem } from '../todoItem/todoItem'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export const ProjectItemComponent = (item) =>{
    const dispatch = useDispatch()

    const projects = useSelector(getProjectList)
    const [projectList, setProjectList] = useState(projects)

    useEffect(()=>{
        setProjectList(projects)

    },[projects])

    const handleRemove = () =>{
        Swal.fire({
            title: "This will delete the project and his content",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeProject(item.item))
              Swal.fire("Done!", "The project has been deleted.", "success");
            }
          })

    }

    const handleEditTitle = () => {
        Swal.fire({
            title: "Change new title",
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
                dispatch(editTitle({ id: item.item.id, newTitle: result.value}))
              Swal.fire("Done!", "Project has been edited.", "success");
            }
          });
    }


    return(
        <>
            <section className="projectContainer">
                <div>
                    <h2>{item.title}</h2>
                    {item.title === 'DEFAULT' ? '' : 
                    <div>
                        <button onClick={handleEditTitle} style={{marginRight: '2em'}}>EDIT NAME</button>
                        <button onClick={handleRemove}>DELETE</button>
                    </div> 
                    }
                    
                </div>
                
                <div>
                {projectList.length == 0 || projectList === undefined ? 'No ToDo saved' : 
                <div className="listContainer">
                    {projectList.map((todo) => <ToDoItem
                                        text = {todo.text}
                                        key= {todo.id}
                                        item = {todo}
                    
                                            />)}
                </div>}
                </div>
            </section>
        </>
    )
}