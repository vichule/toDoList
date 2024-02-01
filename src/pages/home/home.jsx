import { useDispatch } from "react-redux";
import { addUser } from "../../features/users/usersSlice";
import './home.css'
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const loginSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value
        const password = event.target.password.value

        console.log(`Welcome ${username} your password is ${password}`)
        dispatch(addUser({username: username, password: password}))
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