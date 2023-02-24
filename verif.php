<?php 
session_start();
require_once "./class/User.php";
require_once "./class/Todo.php";
$user = new User();
$todo = new Todo();

if(isset($_POST["signup"])){
    
    $user->register($_POST["regLogin"], $_POST["regPass"]);

}
if(isset($_POST["loggin"])){
    $user->connect($_POST["coLogin"], $_POST["coPass"]);
    
}
if(isset($_POST["addTask"])){
    $todo->addTask($_POST["taskInput"], $_SESSION["userId"]);
}
if(isset($_GET["getTask"])){
    $todo->getTask($_SESSION["userId"]);
}
if(isset($_POST["delete"])){
    $todo->delTask($_POST["taskId"]);
}

if(isset($_POST["set"])){
    $todo->stateTask($_POST["taskId"]);
}
if(isset($_POST["reset"])){
    $todo->resetTask($_POST["taskId"]);
}
if(isset($_POST["unset"])){
    $todo->stateTask($_POST["taskId"]);
}
if(isset($_POST["deco"])){
    session_unset();
    session_destroy();
}
?>