var emaillog=document.getElementById('email');
var passwordlog=document.getElementById('password');
var link=document.getElementById('welcome');
var Nameup=document.getElementById('Name');
var emailup=document.getElementById('email');
var passwordup=document.getElementById('password');
var btn=document.getElementById('btn2');
var exist=document.getElementById('exist');
var demo=document.getElementById('demo');
var btn=document.getElementsByClassName('btn');
var welcomeUserLog=document.getElementById('welcomeUserLog');


 function add2(){
         
       var email=emaillog.value;
        var password=passwordlog.value;
        logArr=JSON.parse(localStorage.getItem('user'))||[];
        if(isEmpty()==true){
            document.getElementById('exist').innerHTML='<span class="text-danger m-3"> Please Enter All Input </span>';
        }
        else if(logArr.length==0){
            document.getElementById('exist').innerHTML="incorrect email or password";
        }
        else{
        for(var i=0; i<logArr.length;i++){
           
            if(logArr[i].password.toLowerCase()==password.toLowerCase() &&logArr[i].email.toLowerCase()==email.toLowerCase()){
                localStorage.setItem('userNames', logArr[i].Name);
               document.getElementById('exist').innerHTML="Success";
               window.open('./page/welcome.html');
             
                return true;
            }
            else{
                document.getElementById('exist').innerHTML="incorrect email or password";
            }
          
        }
    }
    
 }



 function isEmpty(){
    if(passwordlog.value==''||emaillog.value==""){
        return true;
      
    }};


/*btn.addEventListener('click',function(){
    add2();
})*/
