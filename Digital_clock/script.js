const hours = document.getElementById('hrs')
const minutes=document.getElementById("mins");
const seconds=document.getElementById("sec");
const ampm = document.getElementById("ampm");

function updateClock(){
  let h=new Date().getHours();
   let m=new Date().getMinutes();
   let s= new Date().getSeconds();

// hours.innerText=h;
minutes.innerText=m.toString().padStart(2, '0');
seconds.innerText=s.toString().padStart(2, '0');
if(h>=12){
  ampm.innerText="PM";
  hours.innerText=(h-12).toString().padStart(2, '0');
}
else{
  ampm.innerText="AM";
}

if(h==12&&ampm.innerText=="PM"){
  hours.innerText=(12).toString().padStart(2, '0');
}
setTimeout(updateClock, 1000);
//setTimeout excutes only onces but here its calling updateClocks() again and again after 1sec so it has created a loop
}

updateClock()