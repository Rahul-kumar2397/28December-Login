import React, { useState, useEffect, browserHistory } from 'react'
import './newColor.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'





function Register() {


    const [email, setEmail] = useState("");

    //const localUrl = 'http://127.0.0.1:3000/setpassword' ;
    const baseUrl = "http://192.168.1.116:3000/user/signup-via-email";
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // history.push("/Logsucesspage")


        }
    }, [])
    async function otpsnd() {
        console.log(email);
        let item = { email };



        let pattern = /^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
        if (pattern.test(email)) {
        
          document.getElementById('showmsg').innerHTML = ""
        
        }
        else if (email=="")
        {
            document.getElementById('showmsg').innerHTML="Email is required"
        }

        else if (email.length > 15) {
            document.getElementById('showmsg').innerHTML = "Email id is to long";
        }
        else if (email != pattern) {
            document.getElementById('showmsg').innerHTML = "Enter Valid Email ID"
        }
        else{
            alert()
        }
    //     if (pattern.test(email)) {
        
    //         document.getElementById('showmsg').innerHTML = ""
        
          
    //         let result = await fetch(`${baseUrl}`, {

    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'

    //             },

    //             body: JSON.stringify(item)


    //         }).catch(rejected => {
    //             console.log(rejected);
    //             window.location.href = "/ServerError";
    //         });

    //         result.json().then(data => {


    //             if (data.status === "success") {
    //                 alert(data.message)
    //                 alert("Please check you email")
    //             } else if (data.status === "error") {
    //                 alert(data.message);
    //             }
    //         })
             


    //         console.log(Response);
    //         localStorage.setItem("user-info", JSON.stringify(result))
    //         console.log(result);



    //   }


    }
    return (
        <>




            {/* <h1>Registration</h1>
                <div className="logincss"> <label>Email Id</label>

                    <input type="text" class="form-control-label" name="email" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    <br />

                    <button className="form-input-btn btn btn-primary" type="submit" onClick={otpsnd}>Submit</button>

                    <Link id="thisid" to="/">go to login</Link>
                </div> */}




            <body>
                <div class="main">
                    <p class="sign" align="center">Register</p>
                    <form class="form1" />
                    <input type="text" name="email" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} className="pass" />
                    <div id="showmsg" className="msg" ></div>
                    <br />

                    <button class="submit" align="center" onClick={otpsnd} >Register</button>

                    <p class="forgot" align="center"><Link to="/"> Already Register? Visit  </Link></p>


                </div>

            </body>



        </>
    )
}

export default Register;
