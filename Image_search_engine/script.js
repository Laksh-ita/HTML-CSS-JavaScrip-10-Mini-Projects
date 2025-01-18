let input=document.getElementById("text");
let button=document.getElementById("search");
let photos=document.getElementById("photos")
let show=document.getElementById("show");

let page=1;


async function searchPhoto(page){
    let word=input.value;
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${word}&client_id=AItl_3OxweRR8nrIFKvNB0y6QbcoCEa--V6bbI6dtio&per_page=12`
    let response= await fetch(url);
    let data= await response.json();
    console.log(data);

    const results =data.results;
    
    results.map((result)=>{

        let image=document.createElement("img");
        image.src=result.urls.small;
        // if(result.urls.small===undefined){
        //     photos.innerText="no result found";
        // }
        let a=document.createElement("a");
        a.href=result.links.html;

        a.appendChild(image);
        photos.appendChild(a);


    })
    show.style.display="block";

}


button.addEventListener('click',()=>{
    photos.innerHTML="";
    
//    e.preventDefault()
    page=1;
    searchPhoto(page);
})

show.addEventListener('click',()=>{
    page++;
    searchPhoto(page);
})

