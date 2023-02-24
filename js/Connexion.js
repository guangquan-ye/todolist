let coLogin = document.querySelector("#coLogin");
let coPass = document.querySelector("#coPass");
let coContainer = document.querySelector("#coContainer")
let coBtn = document.querySelector("#coBtn");
let coForm = document.querySelector("#coForm");
let coMsg = document.querySelector("#coMsg");
let loginformDisplay = document.querySelector("#loginformDisplay");

loginformDisplay.addEventListener("click", function(){
    regContainer.style.display = "none";
    coContainer.style.display = "flex";
})

coBtn.addEventListener("click", function(ev){
    ev.preventDefault()
    
    if(coLogin.value.length===0){
        coMsg.innerHTML = "Login vide";
        return;
    }
    if(coPass.value.length===0){
        coMsg.innerHTML = "Mdp vide";
        return;
    }
    
    let data = new FormData(coForm)
    data.append("loggin", "ok");
    fetch("verif.php", {
        method:"POST",
        body : data
    })
    .then((response)=>{
        return response.text();
    })
    .then((content) =>{
        coMsg.innerHTML = content;
        if(content !=="Connexion reussie"){
            coMsg.innerHTML = content;
            return;
        } window.location.href="todolist.php";
    }).catch((err) => {
        console.log(err);
    })
        
    
    
})