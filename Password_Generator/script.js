let password=document.getElementById("password");
let button=document.getElementById("button");
let copy=document.getElementById("fa-copy");
let s='';
let a;

function generate(){
    let length = getRandomIntInRange(8, 15);
    for (let i = 0; i < length; i++) {
        a=getRandomIntInRange(1, 4)
        s+=casesforPassword(a);
        
    }
    return s;
   
}

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLowercaseLetter() {
    const start = 'a'.charCodeAt(0); // ASCII code for 'a'
    const end = 'z'.charCodeAt(0);   // ASCII code for 'z'
    const randomLower= Math.floor(Math.random() * (end - start + 1)) + start;
    return String.fromCharCode(randomLower);
   
}
function getRandomUppercaseLetter() {
    const start = 'A'.charCodeAt(0); // ASCII code for 'a'
    const end = 'Z'.charCodeAt(0);   // ASCII code for 'z'
    const randomUpper= Math.floor(Math.random() * (end - start + 1)) + start;
    return String.fromCharCode(randomUpper);
}

function randomSpecialCharaters(){
    let schar='!@#$%^&*()_+=-|\/?.~'
    let index=getRandomIntInRange(0, schar.length-1);
    return schar[index];
}

function casesforPassword(j){
    switch (j){
        case 1:
             return getRandomLowercaseLetter();
           
        case 2:
            return getRandomUppercaseLetter();
          
        case 3:
           return String(getRandomIntInRange(0, 9));
        case 4:
            return randomSpecialCharaters();
          
        default:
            return '';

    }
}

button.addEventListener('click', () => {
    copy.className='fa-regular fa-copy'
    // Clear the password field
    password.value = '';
    
    // Set a new generated password
    password.value = generate();
    s='';
});

copy.addEventListener('click',()=>{
     try{
        copy.className='fa-solid fa-check'
        navigator.clipboard.writeText(password.value);

     }
     catch{
        console.error("could not copy")
     }

})

// random function
// string -charCodeAt(0),String.fromCharCode(randomLower)
//await navigator.clipboard.writeText(password.value):to copy text in clip board



