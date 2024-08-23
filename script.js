const hours = document.getElementById('hrs')
const minutes=document.getElementById("mins");
const seconds=document.getElementById("sec");
const ampm = document.getElementById("ampm");

function updateClock(){
  let h=new Date().getHours();
   let m=new Date().getMinutes();
   let s= new Date().getSeconds();

// hours.innerText=h;
minutes.innerText=m;
seconds.innerText=s;
if(h>=12){
  ampm.innerText="PM";
  hours.innerText=h-12;
}
else{
  ampm.innerText="AM";
}
setTimeout(updateClock, 1000);
}

updateClock()