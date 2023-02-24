<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Todolist</title>
</head>

<body>
    <div class="decoContainer">
        <button id="Deco" class="button-52">Deconnexion</button>
    </div>
    <div class="todoContainer">

        <h1>Todolist</h1>
        <p id="taskMsg"></p>
        <div class="group">
                <form id="addtaskForm" class="inputDiv">
                    <input id="taskInput" name="taskInput" placeholder="Ajouter une tache">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                <div class="button52div">
                    <button id="addtaskBtn" class="button-52">Ajouter</button>
                </form>
                </div>
            </div>
        <div class="taskGrid">
            
            <h2>Tâches en cours</h2>
            <div class="inProgress" id="inProgress">

                <div class="inProgressDisplay" id="inProgressDisplay">

                </div>
            </div>
            <h2>Taches accomplies</h2>
            <div class="completed" id="completed">

                <div class="completedDisplay" id="completedDisplay">

                </div>

            </div>
        </div>
    </div>
    <script src="./js/Todo.js"></script>
</body>

</html>