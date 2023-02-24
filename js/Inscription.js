let regContainer = document.querySelector("#regContainer");
let regformDisplay = document.querySelector("#regformDisplay");
let regLogin = document.querySelector("#regLogin");
let regPass = document.querySelector("#regPass");
let regRepass = document.querySelector("#regRepass");
let regBtn = document.querySelector("#regBtn");
let regForm = document.querySelector("#regForm");



regformDisplay.addEventListener("click", function(){
    regContainer.style.display = "flex";
    coContainer.style.display = "none";
})

regBtn.addEventListener("click", function(ev){
    ev.preventDefault()
    
    if(regLogin.value.length===0){
        regMsg.innerHTML = "Login vide";
        return;
    }
    if(regPass.value.length===0){
        regMsg.innerHTML = "Mdp vide";
        return;
    }
    if(regPass.value!==regRepass.value){
        regMsg.innerHTML = "Mdp different";
        return;
    }
    let data = new FormData(regForm)
    data.append("signup", "ok");
    fetch("verif.php", {
        method:"POST",
        body : data
    })
    .then((response)=>{
        return response.text();
    })
    .then((content) =>{
        regMsg.innerHTML = content;
    }).catch((err) => {
        console.log(err);
    })
})
