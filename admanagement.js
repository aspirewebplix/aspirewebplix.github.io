
let x = document.querySelector(".ad-zone");
   let x_height = x.offsetHeight;
   let msg = document.getElementById("msg")
     
   if(x_height){
     msg.innerText = "No Adblocker detected"
   } else{
     msg.innerText = "Adblocker detected"
     alert("Oops! Adblocker detected, please disable adblocker to use our service");
     location.reload();
}