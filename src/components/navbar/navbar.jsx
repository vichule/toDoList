import { NavLink } from "react-router-dom"
import './navbar.css'
import { useSelector } from "react-redux"
import { getUser } from "../../features/users/usersSlice"


export const NavBarComponent = () => {
    const user = useSelector(getUser)

    return(
        <>
            <nav>
                <div className="userNav">
                    <img src="src\assets\notes.png"/>
                    <p>{user[0].username}</p>
                </div>
                <div className="linkContainer">
                <NavLink className={({ isActive }) => (isActive ? 'NavBarActive' : 'NavBar')} to='/userpage'> TODO</NavLink> 
                <NavLink className={({ isActive }) => (isActive ? 'NavBarActive' : 'NavBar')} to='/userprojects'>PROJECTS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'NavBarActive' : 'NavBar')} to='/'>LOGOUT</NavLink>
                </div>
            </nav>
        </>
    )
}