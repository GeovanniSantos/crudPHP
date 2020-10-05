<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Contato</title>
    <link rel="stylesheet" type="text/css" href="estilo/estilo.css">
    <script src="validar.js"></script>
</head>
<body>
    <div id="geral">
        <div id="container">
          <div id="logo">
            <img src="imagens/logo.png" width=300px>
        </div>
    </div>

    <h1>Trabalhe conosco</h1>
    <hr>
    <?php
    if(isset($_SESSION['msg'])){
        echo $_SESSION['msg'];
        unset($_SESSION['msg']);
    }
    ?>
    <form name="formuser" method="POST" action="proc_cad_msg.php">
        <label>Nome: </label>
        <input type="text" name="nome" placeholder="Inserir o nome completo"><br><br>

        <label>E-mail: </label>
        <input type="email" name="email" placeholder="Inserir o e-mail"><br><br>            

        <label>Cargo desejado: </label>
        <input type="text" name="assunto" placeholder="Inserir cargo"><br><br>            

        <label>Por que quer ser um Generous? </label>
        <textarea name="mensagem" rows="10" cols="83"></textarea><br><br>

        <input id="btn-cadastro" name="SendCadCont" type="submit" onsubmit="return validar();">

    </form>

    <div>
        <button><a href="listar.php">Listar</a></button>
    </div>
</div>

</body>
</html>
