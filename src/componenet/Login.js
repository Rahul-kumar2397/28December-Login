import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './newColor.css';



function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    async function login() {
        console.log(email, password);
        let item = { email, password };
        if (email === "") {
            alert("Please Enter Email Id.")
        }
        else if (password === "") {
            alert("Please Enter Password.");



        }
        else {
            let result = await fetch('http://192.168.1.116:3000/users/login', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                },

                body: JSON.stringify(item)

            }) .catch(rejected => {
                console.log(rejected);
                  window.location.href = "/ServerError";
                        
            });

            result.json().then(data => {

                console.log(data)
                if (data.status === "success") {
                    alert(data.message);
                    console.log(data);
                    history.push("/Enter your new page here.")
                } else if (data.status === "error") {
                    alert(data.message);
                 
                } else{

              return console.log(data);
                    
                }

            })
           

            console.log(Response);
            localStorage.setItem("user-info", JSON.stringify(result))
            console.log(result);




        }
    }
    return (
    
    <>
    
        <div className="logincss"> 
        <h2>Aryapayroll</h2>
        <label>Email Id</label>

<input type="text" name="email" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} className="form-control" />
<br />
<label>Password</label>
<input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
<br />
<button name="login" className="form-input-btn btn btn-primary" type="submit" onClick={login}>Log in</button>

<span className="form-input-login">Not Registered? Visit <a href="/setpassword">here</a></span><br />
<span className="form-input-login">Forget Password <a href="/register">here</a></span>
</div>

        


</>

    
    )
}

export default Login;
