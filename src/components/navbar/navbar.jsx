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
                    <img src="src/assets/react.svg"/>
                    <p>{user[0].username}</p>
                </div>
                <div className="linkContainer">
                <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/userpage'> ToDo List </NavLink> 
                <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/userprojects'>Projects</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/'>Log Out</NavLink>
                </div>
            </nav>
        </>
    )
}