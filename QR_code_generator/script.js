
let qrtext =document.getElementById("qrtext");
let qr=document.getElementById("qr");
let button=document.getElementById("generate")
function generateQR(){
  
    qr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value;


}
button.addEventListener('click',()=>{
    if(qrtext.value==''){
        alert("Invalid!Enter text or url")
    }
    generateQR()
})
