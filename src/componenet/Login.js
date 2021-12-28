import React, { useState } from 'react'
import validate from './LoginValidate';
import { Link, useHistory } from 'react-router-dom';
import './newColor.css';



function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();




    async function login() {
        console.log(email, password);
        let item = { email, password };



        let pattern = /^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

        if (pattern.test(email)) {

            document.getElementById('showmsg').innerHTML = ""
        } 
         else   if (email == "") {
            document.getElementById('showmsg').innerHTML = "Email is required"
        }
        else if (email != pattern) {
            document.getElementById('showmsg').innerHTML = "Enter valid email"
        }
         if (password == "") {
         

            document.getElementById('showError').innerHTML = "password is Required"
        }   else if (password) {
            document.getElementById('showError').innerHTML = ""
        }

       else {
           alert("api call")
            // let result = await fetch('http://192.168.1.116:3000/users/login', {

            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'

            //     },

            //     body: JSON.stringify(item)

            // }).catch(rejected => {
            //     console.log(rejected);
            //     window.location.href = "/ServerError";

            // });

            // result.json().then(data => {

            //     console.log(data)
            //     if (data.status === "success") {
            //         alert(data.message);
            //         console.log(data);
            //         history.push("/Enter your new page here.")
            //     } else if (data.status === "error") {
            //         alert(data.message);

            //     } else {

            //         return console.log(data);

            //     }

            // })


            // console.log(Response);
            // localStorage.setItem("user-info", JSON.stringify(result))
            // console.log(result);




        }
    }
    return (

        <div>

            {/* <div className="logincss"> 
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
</div> */}



            <body>

                <form  >
                    <div class="main">
                        <h1 class="sign" align="center">Login Page</h1>
                        <form class="form1" />
                        <input type="email" name="email" id="email" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} className="pass" />
                        <div id="showmsg" className="msg" />
                        <br />
                        <input type="password" name="password" id="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="pass" />
                        <div id="showError" className="msg" />
                        <br />


                        <span id="showmsg"></span>
                        <a class="submit" align="center" id="submit" onClick={login}>Login</a>

                        <p class="forgot" align="center"><Link to="/register"> Not Register? Visit</Link></p>


                    </div>
                </form>
            </body>




        </div>

    )
}

export default Login;
