var demo=document.querySelector('#demo');
(function dataInfo(){
    var username=localStorage.getItem('userNames');
if(username){
demo.innerHTML="welcome"+"   "+username;}
})();


    
 