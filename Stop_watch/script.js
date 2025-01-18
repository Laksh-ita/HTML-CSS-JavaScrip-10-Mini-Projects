let hours=document.getElementById("hrs");
let minutes=document.getElementById("mins");
let seconds=document.getElementById("sec");
let play=document.getElementById("fa-circle-play");
let pause=document.getElementById("square");
let replay=document.getElementById("replay");
let s=0;
let m=0;
let h=0;

function timeIncrease(){
    interval = setInterval(() => {
    s++;
    if(s==60){
        s=0;
        m++;
    }

    if(m==60){
        m=0;
        h++;
    }

    hours.innerText=h < 10 ? '0' + h : h;;
    minutes.innerText= m<10?":"+'0' + m+":":":"+ m+":";
    seconds.innerText=s<10?'0'+s:s;
},1000);
}

function stopInterval() {
    // Clear the interval using the stored ID
    clearInterval(interval);
    console.log('Interval cleared');
  }


play.addEventListener('click', () => {
   timeIncrease();
     // Delay of 1 second
});

replay.addEventListener('click',()=>{
    hours.innerText="00";
    minutes.innerText=":"+"00"+":";
    seconds.innerText="00";
    stopInterval() 
    s=m=h=0;
    
})

pause.addEventListener('click',(timeIncrease)=>{
    // console.log(1);
    
    stopInterval();
});



