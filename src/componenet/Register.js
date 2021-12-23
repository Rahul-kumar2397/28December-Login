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




        //     const baseurl=[];
        //   let url="/componenet/setpassword";
        // axios.get("").then(res => {
        //     console.log(res);
        //     for(const dataobj res.data.data){
        //         url.push (parseInt(dataobj.baseurl))
        //     }
        // })   




        let result = await fetch(`${baseUrl}`, {

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


            if (data.status === "success") {
                alert(data.message)
                alert("Please check you email")
            } else if (data.status === "error") {
                alert(data.message);
            }
        })



        console.log(Response);
        localStorage.setItem("user-info", JSON.stringify(result))
        console.log(result);






    }
    return (
        <>


           
                <h1>Registration</h1>
                <div className="logincss"> <label>Email Id</label>

                    <input type="text" class="form-control-label" name="email" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    <br />

                    <button className="form-input-btn btn btn-primary" type="submit" onClick={otpsnd}>Submit</button>

                    <Link id="thisid" to="/">go to login</Link>
                </div>

        



</>
    )
}

export default Register;
