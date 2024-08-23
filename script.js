const hours=document.getElementsByClassName("hrs");
const minutes=document.getElementsByClassName("mins");
const seconds=document.getElementsByClassName("sec");

function updateClock(){
  let h=new Date().getHours();
   let m=new Date().getMinutes();
   let s= new Date().getSeconds();

hours.innerText=h;
minutes.innerText=m;
seconds.innerText=s;
setTimeout(()=>{

},1000)
}

updateClock()