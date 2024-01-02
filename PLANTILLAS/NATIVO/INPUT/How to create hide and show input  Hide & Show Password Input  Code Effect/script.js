const showHidePassword =()=>{
    const overlay =document.getElementById("overlay");
    const password =document.getElementById("password");
    const icon =document.getElementById("icon-eye");

    icon.addEventListener("click",()=>{
        if(password.type=="password"){
            password.type = "text";
            icon.classList.add("fa-eye-slash")
            icon.classList.remove("fa-eye")
        }else{
            password.type = "password";
            icon.classList.remove("fa-eye-slash")
            icon.classList.add("fa-eye")
        }
        overlay.classList.toggle("overlay-content")
    })
}

showHidePassword()