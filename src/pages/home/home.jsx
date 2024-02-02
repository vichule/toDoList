import { useDispatch, useSelector } from "react-redux";
import { addUser, getUser } from "../../features/users/usersSlice";
import './home.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const users = useSelector(getUser)
    const [userList, setUserList] = useState(users)
    const loginSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value
        const password = event.target.password.value

        console.log(`Welcome ${username} your password is ${password}`)
        dispatch(addUser({username: username, password: password}))
        console.log(userList)
        navigator('/userpage')
    }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={loginSubmit} className="loginForm">
                <input placeholder="Username" name="username" className="loginInput" />
                <input placeholder="Password" name="password" className="loginInput" />
                <input type="submit" className="inputSubmit" />
            </form>
            <h2>Don't have an account?</h2>
            <button>REGISTER</button>
        </>
    )
}