// var num=Number(window.prompt('enter num1'));
// var nam=Number(window.prompt('enter num2'));
// var avg=(nam+num)/2
// console.log(avg);
let email=document.getElementById('email');
let password=document.getElementById('password');
let exist=document.getElementById('exist');
let btn=document.getElementById('btn');
async function ADD(){
    let  emaillog=email.value.trim() ;
    let passwordlog=password.value.trim();
    let data = {
        email:emaillog,
        password:passwordlog
    };
    console.log(passwordlog)
    function isEmpty(){
        return emaillog.length === 0||passwordlog.length===0  ;  
    }
    function Validators(){
        const emailPattern = /^[a-zA-Z0-9]+@gmail\.com$/;
        const passwordPattern = /^[A-Za-z0-9]{6,}$/;
        if(!emailPattern.test(email.value)){
            exist.innerHTML="Invalid email format";
            return false;
        }
        if(!passwordPattern.test(password.value)){
            exist.innerHTML="Password must contain at least 6 characters"
            return false ;
        }
        else{
            return true;
        }
    }
    if(isEmpty()){
        exist.innerHTML='Please Enter All Input'
        return ;    
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
          let response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', requestOptions);
          let result = await response.json();
          if (result.message =='success') {
            exist.innerHTML = "Login successful!";
        } else {
            exist.innerHTML = "Login failed. " + (result.error || "Please try again.");
        } 
}
btn.addEventListener('click', function(){
    ADD()
})

