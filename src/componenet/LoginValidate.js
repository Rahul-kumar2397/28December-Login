import React from 'react';

const LoginValidate = () => {










const email=document.getElementById('email').value;
let pattern=/^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/; 
if(pattern.test(email))
{
    document.getElementById('showmsg').innerHTML="";
return undefined;
}else {
    document.getElementById('showmsg').innerHTML="Email id is not correct";
    
}






// const  password=document.getElementryByid('password');


// email.addEventListener("",()=>
// {

//     if (!/^([\w\.]+)@([\w\-]+)((\.(\w){2,3})+)$/i == 1) {
//         alert("Please Enter Valid Email ID.")

//   }else{
//      
//   }
  
// password.addEventListener("",()=>{
//     let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") == -1)/$
//     let str=regex.value;
//     if(regex.test(str))
//     {
//         alert("this is valid password");
//     }
//     else{
//         alert("password is not valid");
//     }
// });
 
    // let submit=document.getElementById('submit');
    // submit.addEventListener('click', ()=>{

    // })




    
}

export default LoginValidate;
