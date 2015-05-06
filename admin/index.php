<?php

include('login.php'); // Includes Login Script

if(isset($_SESSION['login_user'])){
  header("location: profile.php");
}

$pageID = "Profile Page";
include_once('../templates/headerAdmin.php');

?>

  <title><?php echo $pageID ?></title>

</head>

<!DOCTYPE html>
<html>

  <body>
    <div id="main">
      <h1>Login for booking system</h1>
      <div id="login">
        <h2>Oliwood</h2>
        <form action="" method="post">
          <label>UserName :</label>
          <input id="name" name="username" placeholder="username" type="text">
          <label>Password :</label>
          <input id="password" name="password" placeholder="**********" type="password">
          <input name="submit" type="submit" value=" Login ">
          <span><?php echo $error; ?></span>
        </form>
      </div>
    </div>
  </body>
</html>