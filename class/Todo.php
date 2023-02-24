<?php
class Todo{

    private $pdo;
    private $id;
    public $task;


    public function __construct(){

        // $this->pdo = new pdo("mysql:host=localhost;dbname=todolist", "root", "root");
        $this->pdo = new pdo("mysql:host=localhost;dbname=todolist", "todolister", "todoList1");
    }

    public function addTask ($task, $id){

            $ins = $this->pdo->prepare("INSERT INTO todo (todo, id_utilisateur, creation) VALUE (?,?, NOW())");
            if($ins->execute(array($task, $id))){
                echo "Added to list" ;
            
        }

    }

    public function getTask($id){

        $sel = $this->pdo->prepare("SELECT *, DATE_FORMAT(creation, '%d/%m/%Y %H:%i') AS creation, DATE_FORMAT(date_done, '%d/%m/%Y %H:%i') AS date_done FROM todo WHERE id_utilisateur = $id ORDER BY creation  DESC");
        $sel->execute();
        $tab = $sel->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($tab);


    }
    
    public function delTask($id){
        $del=$this->pdo->prepare("DELETE todo FROM todo WHERE id = $id");
       if($del->execute()){

        echo "Task deleted";
       }

    }

    public function stateTask($id){
        $update="UPDATE todo SET date_done = NOW(), state = :bool WHERE id = :id";
        $prepare = $this->pdo->prepare($update);

        $prepare->execute(array(
            'bool' => 1,
            'id' => $id,
        ));
        
    }

    public function resetTask($id){
        $update="UPDATE todo SET date_done = null, state = :bool WHERE id = :id";
        $prepare = $this->pdo->prepare($update);

        $prepare->execute(array(
            'bool' => 0,
            'id' => $id,
        ));
    }
}
?>