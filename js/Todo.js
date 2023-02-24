let addtaskBtn = document.querySelector("#addtaskBtn");
let taskInput = document.querySelector("#taskInput");
let addtaskForm = document.querySelector("#addtaskForm");
let taskMsg = document.querySelector("#taskMsg");
let inProgressDisplay = document.querySelector("#inProgressDisplay");
let completedDisplay = document.querySelector("#completedDisplay");
let deconnexion = document.querySelector("#Deco");

function displayTask(task){
    let taskTitle = document.createElement("p");
    let taskstartDate = document.createElement("p");
    let taskendDate = document.createElement("p");
    let taskEnd = document.createElement("button");
    let taskReset = document.createElement("button");
    let taskDel = document.createElement("button");
    let taskDiv = document.createElement("div");
    let btnDiv = document.createElement("div");
    let bgColor = [
        "#00B8DE",
        "#FF69B4",
        "#FFFF00",
        "#FFA500",
        "#00FF00"
        
    ];
    let randColor = bgColor[Math.floor((Math.random()*bgColor.length))];
    let btnColor1 = bgColor[Math.floor((Math.random()*bgColor.length))];
    let btnColor2 = bgColor[Math.floor((Math.random()*bgColor.length))];
    let btnColor3 = bgColor[Math.floor((Math.random()*bgColor.length))];

    taskDiv.style.backgroundColor = randColor ;
    taskDel.style.backgroundColor= btnColor1 ;
    taskReset.style.backgroundColor= btnColor2 ;
    taskEnd.style.backgroundColor= btnColor3 ;

    taskDiv.classList.add("taskDisplay");
    btnDiv.classList.add("btnDiv");
    taskEnd.classList.add("button-55");
    taskReset.classList.add("button-55");
    taskDel.classList.add("button-55");
    
    
    taskEnd.appendChild(document.createTextNode("Done"));
    taskReset.appendChild(document.createTextNode("Reset"));
    taskDel.appendChild(document.createTextNode("Delete"));
    taskTitle.appendChild(document.createTextNode(task.todo));
    taskstartDate.appendChild(document.createTextNode(task.creation));
    taskendDate.appendChild(document.createTextNode(task.date_done));
    taskDiv.appendChild(taskTitle);
    
    
   
    if (task.state === '1') {
        taskDiv.appendChild(taskendDate);
        btnDiv.appendChild(taskReset);
        btnDiv.appendChild(taskDel);
        taskDiv.appendChild(btnDiv);
        completedDisplay.append(taskDiv);
        
    } else {
        taskDiv.appendChild(taskstartDate);
        btnDiv.appendChild(taskEnd);
        btnDiv.appendChild(taskDel);
        taskDiv.appendChild(btnDiv);
        inProgressDisplay.append(taskDiv);
    }

    taskEnd.onclick = function end() {

        let data = new FormData();
        data.append("set", "ok");
        data.append("taskId", task.id);
        fetch("verif.php", {
            method: "POST",
            body: data
        })
            .then((response) => {
                return response.text();
            })
            .then((content) => {
                taskMsg.innerHTML = content;
                btnDiv.append(taskReset);
                btnDiv.appendChild(taskDel);
                btnDiv.removeChild(taskEnd);
                taskDiv.appendChild(btnDiv);
                completedDisplay.append(taskDiv);
            }).catch((err) => {
                console.log(err);
            })
    }
    taskReset.onclick = function reset(){
        let data = new FormData();
        data.append("reset", "ok");
        data.append("taskId", task.id);
        fetch("verif.php", {
            method:"POST",
            body : data
        })
            .then((response) => {
                return response.text();
            })
            .then((content) =>{
                taskMsg.innerHTML = content;
                btnDiv.appendChild(taskEnd);
                btnDiv.appendChild(taskDel);
                btnDiv.removeChild(taskReset);
                taskDiv.appendChild(btnDiv);
                inProgressDisplay.append(taskDiv);
            })
    }

    taskDel.onclick = function del() {

        let data = new FormData();
        data.append("delete", "ok");
        data.append("taskId", task.id);
        fetch("verif.php", {
            method: "POST",
            body: data
        })
            .then((response) => {
                return response.text();
            })
            .then((content) => {
                taskMsg.innerHTML = content;
                taskDiv.parentNode.removeChild(taskDiv);
            }).catch((err) => {
                console.log(err);
            })
    }
    

    addtaskBtn.onclick = function add() {

        if (taskInput.value.length === 0) {

            taskMsg.innerHTML = "Vide";
            return;
            }

        let data = new FormData(addtaskForm);
        data.append("addTask", "ok");
        fetch("verif.php", {
            method: "POST",
            body : data
        })
        .then((response) => {
            return response.text();
        })
            .then((response)=>{
                taskMsg.innerHTML = content;
                inProgressDisplay.append(taskDiv);
                console.log(selColor);
            }).catch((err) => {
                console.log(err);
            })
    }
}

fetch("verif.php?getTask=ok", {
    method: "GET",
})
    .then((response) => {
       
        return response.json();
    })
    .then((content) => {

        for (let j = 0; j < content.length; j++) {

            displayTask(content[j]);
        }
    })
    .catch((err) => {
        console.log(err);
    })

deconnexion.onclick = function deco(){
    
    let data = new FormData();
    data.append("deco", "ok");
    fetch("verif.php", {
        method: "POST",
        body : data
    })
    .then((response) => {
        return response.text();
    })
        .then((response)=>{
            console.log(deconnexion)
            window.location.href="index.php";
        }).catch((err) => {
            console.log(err);
        })
}
