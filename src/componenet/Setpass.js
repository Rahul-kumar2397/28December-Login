import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'




function Setpass() {


    const [password, setPassword] = useState("");
    const [passwordConfirmation, setpasswordConfirmation] = useState("");

    const history = useHistory();

    async function login() {

        let item = { password, passwordConfirmation };
        if (password === "") {
            alert("Please Enter Email Id.")
        }
        else if (passwordConfirmation === "") {
            alert("Please Enter Password.");



        }
        else {
            let result = await fetch('http://192.168.1.116:3000/user/confirm-registration', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                },

                body: JSON.stringify(item)

            }).catch(rejected => {
                console.log(rejected);
                window.location.href = "/ServerError";

            });

            result.json().then(data => {

                console.log(data)
                if (data.status === "success") {
                    sessionStorage.setItem("password", data)
                    console.log(data);
                    //localStorage.setItem("password", "token123")  

                    alert(data.message);
                    console.log(data);
                    history.push("/Enter your new page here.")
                } else if (data.status === "error") {
                    alert(data.message);

                } else {

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


{/* 
        
           <div>
                <label className="form-control-label">password</label>
                <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-control-label">comfirm password</label>
                <input type="password" name="password" placeholder="Enter Confirm Password" onChange={(e) => setpasswordConfirmation(e.target.value)} className="form-control" />
            </div>


            <div className="col-lg-6 login-btm login-button">
                <button type="submit" className="btn btn-outline-primary" onClick={login}>Setpassword</button><br />
                <br />
                <Link id="thisid " to="/register">Note register? Visit</Link>
            </div>
 */}





            <body>
                <div class="main">
                    <p class="sign" align="center">Aryavrat Payroll</p>
                    <form class="form1" />
                    <input type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} className="pass" />
                    <br />
                    <input type="password" name="cpassword"  placeholder="Enter cpassword"onChange={(e) => setpasswordConfirmation(e.target.value)} className="pass" />
                    <br />
                    <a class="submit" align="center"  onClick={login}>set pass</a>
                   
                    <p class="forgot" align="center"><Link to="/">Go to login </Link></p>


                </div>

            </body>



        </>



    )
}

export default Setpass;
