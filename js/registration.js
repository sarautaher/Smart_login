var Nameup=document.getElementById('Name');
var emailup=document.getElementById('email2');
var passwordup=document.getElementById('password2');
var btn=document.getElementById('btn2');
var exist=document.getElementById('exist');

var logArr=[];
if(localStorage.getItem('user')!=null){
    logArr=JSON.parse(localStorage.getItem('user'));
}
function add(){
    var user={
    Name:Nameup.value,
    email:emailup.value,
    password:passwordup.value,}
    if(Nameup.value==""||emailup.value==""||passwordup.value==""){
      
        exist.innerHTML='<span class="text-danger m-3"> Please Enter All Input </span>';
    }
    else if( checkEmail()==false){
      //  alert(' This  mail is not exist')
        document.getElementById('exist').innerHTML='This  mail is not exist ';
    }
    else if (regxvalid()==false){
       // alert(' This  mail is not valid  ')
        document.getElementById('exist').innerHTML='This  mail is not valid ';
    }
    else{
        logArr.push(user);
        //alert(' success');
        document.getElementById('exist').innerHTML='<span class="text-success m-3"> success </span>';
    }
    localStorage.setItem('user', JSON.stringify(logArr));
}
//btn.onclick=add

 function checkEmail(){
    for(var i=0; i<logArr.length;i++)
        if(logArr[i].email.toLowerCase()==emailup.value.toLowerCase()){
            return false
        }
    
 }
 function regxvalid(){
    var regxvalid=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])/;
   // var regxvalid=/^[a-zA-Z]{1,}(@)(yahoo|gmail|outlook)(.)(c)(o)(m)$/;
    var emailvalid=emailup.value;
    if(regxvalid.test(emailvalid)==true){
        return true;
    }
    else{
        return false;
    }
 }