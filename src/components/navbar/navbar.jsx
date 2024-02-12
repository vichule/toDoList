import { NavLink } from "react-router-dom"
import './navbar.css'
import { useDispatch, useSelector } from "react-redux"
import { changeUsername, getUser, getUsername } from "../../features/users/usersSlice"


export const NavBarComponent = () => {
    const user = useSelector(getUser)
    const username = useSelector(getUsername)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(changeUsername({usernameLog: null}))
    }

    return(
        <>
            <nav>
                <div className="userNav">
                    <img src="src\assets\notes.png"/>
                    <p>{username}</p>
                </div>
                <div className="linkContainer">
                <NavLink className={({ isActive }) => (isActive ? 'NavBarActive' : 'NavBar')} to='/userpage'> TODO</NavLink> 
                <NavLink className={({ isActive }) => (isActive ? 'NavBarActive' : 'NavBar')} to='/userprojects'>PROJECTS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'NavBarActive' : 'NavBar')} to='/' onClick={handleLogOut}>LOGOUT</NavLink>
                </div>
            </nav>
        </>
    )
}