import { useDispatch, useSelector } from "react-redux";
import { addUser, changeUsername, getUser } from "../../features/users/usersSlice";
import './home.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export const Home = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const users = useSelector(getUser)
    const [userList, setUserList] = useState(users)

    const loginSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value
        const password = event.target.password.value

        let usernameValid = false;

        if(username === '' || password === ''){
            Swal.fire('You must fill all the fields')
        }else{
            for (let i = 0; i < userList.length; i++) {

                if( username === userList[i].username &&  password === userList[i].password){
                    usernameValid = true
                    dispatch(changeUsername({usernameLog: username}))
                    console.log(`Welcome ${username} your password is ${password}`)
                    navigator('/userpage')
                    return
                    
                }else{
                    usernameValid = false
                }
                 
             }
             
             if(!usernameValid){
                Swal.fire('Username or password incorrect')
             }
            
        }
        
        console.log(users)
        
    }

    const handleRegister = () =>{
        (async () => {

            const { value: formValues } = await Swal.fire({
              title: 'Insert your username and password',
              html:
                '<input id="swal-input1" class="swal2-input" placeholder="Username">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Password" type="password">',
              focusConfirm: false,
              showCancelButton: true,
              confirmButtonText: "Register",
              preConfirm: () => {
                return [
                  document.getElementById('swal-input1').value,
                  document.getElementById('swal-input2').value
                ]
              }
            })
                    if (document.getElementById('swal-input1').value == '' || document.getElementById('swal-input2').value == '') {
                        Swal.fire("Please fill all the fields in order to complete the registration");
                    }else{
                        Swal.fire("User registration completed!");
                        dispatch(changeUsername({usernameLog: formValues[0]}))
                        dispatch(addUser({username: formValues[0], password: formValues[1]}))
                        navigator('/userpage')
                    }  
        })()
    }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={loginSubmit} className="loginForm">
                <input placeholder="Username" name="username" className="loginInput" />
                <input placeholder="Password" name="password" type="password" className="loginInput" />
                <input type="submit" className="inputSubmit" />
            </form>
            <h2>Don't have an account?</h2>
            <button onClick={handleRegister}>REGISTER</button>
        </>
    )
}