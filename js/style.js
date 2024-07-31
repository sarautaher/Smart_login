let email=document.getElementById('email');
let Name=document.getElementById('name');
let password=document.getElementById('password');
let rePassword=document.getElementById('rePassword');
let phone=document.getElementById('phone');
let exist=document.getElementById('exist');
let btn=document.getElementById('btn');
async function add(){
let emaillog=email.value.trim() ;
let namelog=Name.value.trim();
let passwordlog=password.value.trim();
let rePasswordlog=rePassword.value.trim();
let phonelog=phone.value.trim()
let data = {
    email:emaillog,
    password:passwordlog,
    name:namelog,
    rePassword:rePasswordlog,
    phone:phonelog
};
function isEmpty(){
    return emaillog.length===0 || namelog.length===0|| passwordlog.length===0||rePasswordlog.length===0||phonelog.length===0
}
function Validators(){
   const namePattern=/^[A-Z][a-z]{3,8}$/
   const emailPattern = /^[a-zA-Z0-9]+@gmail\.com$/;
  const passwordPattern = /^[A-Za-z0-9]{6,}$/;
   const phonePattern=/^01[0125][0-9]{8}$/
    if(!namePattern.test(Name.value)){
        exist.innerHTML="Name min Length 3 chars and  max Length 8 chars";
        return false;
    }
    if(!phonePattern.test(phone.value)){
        exist.innerHTML="Invalid phone format";
        return false;
    }
    if(!emailPattern.test(email.value)){
        exist.innerHTML="Invalid email format";
        return false;
    }
    if(!passwordPattern.test(password.value)){
        exist.innerHTML="Password must contain at least 6 characters"
        return false ;
    }
    if(passwordlog !== rePasswordlog){
        exist.innerHTML="Re-entered repassword does not match the password"
        return false ;
    }
    else{
        return true;
     }
}
if(isEmpty()){
       exist.innerHTML='Please Enter All Input'
    return;
}
if(!Validators()){
    return;
}
const requestOptions = {
    method: "POST", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  };
  let response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', requestOptions);
  let result = await response.json();
  console.log(result.message)
  if (result.message =='success') {
    exist.innerHTML = result.message;
} else {
    exist.innerHTML = result.message
} 
}
btn.addEventListener('click', function(){
    add()
})
