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
    <nav>
        <div class="buttonContainer">
            <button class="button-52" role="button" id="regformDisplay">Inscription</button>
            <button class="button-52" role="button" id="loginformDisplay">Connexion</button>
        </div>
    </nav>
    <div class="main">
        
        <div class="regContainer" id="regContainer">
            <div class="group"></div>
            <form method="post" id="regForm">
                <h1>Inscription</h1>

                <center><p id="regMsg"></p></center>
                <input type="text" id="regLogin" name="regLogin" placeholder="Login" required></input>

                <input type="password" id="regPass" name="regPass" placeholder="Mot de passe" required></input>

                <input type="password" id="regRepass" name="regRepass" placeholder="Confirmation" required></input>

                <button type="submit" id="regBtn" class="button-52">Inscription</button>
            </form>
        </div>
    </div>

    <div class="coContainer" id="coContainer">
        <div class="group"></div>
        <form method="post" id="coForm">
            <h1>Connexion</h1>

            <center><p id="coMsg"></p></center>

            <input type="text" id="coLogin" name="coLogin" placeholder="Login" required></input>
            <input type="password" id="coPass" name="coPass" placeholder="Mot de passe" required></input>
            
            <button type="submit" id="coBtn" class="button-52">Login</button>
        </form>
    </div>
    </div>
    </div>
    <script src="./js/Inscription.js"></script>
    <script src="./js/Connexion.js"></script>
</body>

</html>