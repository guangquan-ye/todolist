<?php 

CLass User{

    private $pdo;
    public $login;
    public $pass;


    public function __construct()
    {
        // $this->pdo = new pdo("mysql:host=localhost;dbname=todolist", "root", "root");
        $this->pdo = new pdo("mysql:host=localhost;dbname=todolist", "todolister", "todoList1");
    }

    public function register($login, $pass){

        $select = $this->pdo->prepare("SELECT login From utilisateurs WHERE login=? limit 1");
        $select -> execute(array($login));
        $tab = $select->fetchAll();

        if(count($tab) > 0){
            echo "login existe deja";
        }else {
            $ins = $this->pdo->prepare("INSERT INTO utilisateurs(login, password) VALUE (?, ?)");
            if($ins->execute(array($login, $pass))){
                echo "compte crée" ;
            }
        }

    }
    public function connect($login, $pass){
        
        $sel = $this->pdo->prepare("SELECT * FROM utilisateurs WHERE login=? limit 1");
        $sel->execute(array($login));
        $result = $sel->fetchAll();

        if(count($result) == 0){
            echo "login inexistant";
        }else if($result[0]["password"] != $pass){
            echo "MDP Invalide";
        }else if($result[0]["password"] = $pass){
            $_SESSION["userId"] = $result[0][0];
            $_SESSION["user"] = $result[0][1];

            echo "Connexion reussie";

        }
    }
        
        
       
}
?>