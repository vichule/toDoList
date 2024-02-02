import { useSelector } from "react-redux"
import { NavBarComponent } from "../../components/navbar/navbar"
import { ToDoFormComponent } from "../../components/todoForm/todoForm"
import { getToDoList } from "../../features/userlist/userlistSlice"
import { ToDoItem } from "../../components/todoItem/todoItem"
import { useEffect, useState } from "react"
import './userpage.css'



export const UserPage = () => {
    const todos = useSelector(getToDoList)
    const [toDoList, setToDoList] = useState(todos)
    

    useEffect(()=>{
        setToDoList(todos)
        console.log(todos)

    },[todos])

    return(
        <>
            <NavBarComponent/>
            <section className="introSection">
                <div>
                    <h2>TO DO LIST</h2>
                    <ToDoFormComponent/>
                </div>
            </section>
            <section className="mainSection">
                {toDoList.length == 0 || toDoList === undefined ? 'No ToDo saved' : 
                <div className="listContainer">
                    {toDoList.map((todo) => <ToDoItem
                                        text = {todo.text}
                                        key= {todo.id}
                                        item = {todo}
                    
                                            />)}
                </div>}
            </section>
        </>
    )
}