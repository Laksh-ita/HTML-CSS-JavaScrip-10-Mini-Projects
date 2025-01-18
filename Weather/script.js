let city='';
let wpic= document.getElementById("cloud");

let text= document.getElementById("text");

    
   
document.getElementById("search").addEventListener('click',async()=>{

    if(text.value==''){
        document.getElementById("cname").innerHTML='City name'
       }
   else{city=text.value;
   text.value='';

   await checkweather(city);
   }
  
})

async function checkweather(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce24b6b46f78e9081478f75b771f9ccb`;
    const response= await fetch(url);
    var data=await response.json();
    console.log(data);
    document.getElementById("cname").innerHTML=data.name;
    document.getElementById("tem").innerHTML=temperature(data.main.temp)+'°C';
    document.getElementById("wind").innerHTML=data.wind.speed+"km/h";
    document.getElementById("humidity").innerHTML=data.main.
    humidity+"%"
    weatherPic(data)
    document.getElementById("weather").innerHTML=data.weather[0].main;
   
   console.log(data.weather[0].main);
    
}
checkweather()

function temperature(d){
    let k=d;
    let c=k - 273.15;
    return c.toFixed(2);
}
function weatherPic(data){
    if(data.weather[0].main=='Clouds'){
        wpic.src="images/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
        wpic.src="images/clear.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        wpic.src="images/drizzle.png";
    }
    else if(data.weather[0].main=='Haze'|| data.weather[0].main=='Mist'){
        wpic.src="images/mist.png";
    }
    else if(data.weather[0].main=='Rain'){
        wpic.src="images/rain.png";
    }
    // else if(data.weather[0].main=='Snow'){
    else{
        wpic.src="images/snow.png";
    }

}
