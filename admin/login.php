<?php

session_start(); // Starting Session
  
$error=''; // Variable To Store Error Message

if (isset($_POST['submit'])) {
  if (empty($_POST['username']) || empty($_POST['password'])) {
    $error = "Username or Password is invalid";
  } 
  else {

    // Define $username and $password
    $username=$_POST['username'];
    $password=$_POST['password'];
    
    // Establishing Connection with Server by passing server_name, user_id and password as a parameter
    /* local */    
    $connection = new mysqli('localhost', 'root', '', 'oliwood');

/* web */    
    //$connection = new mysqli('localhost', 'obfiscco_oliwood', 'LKwacl)qn)z9wc6a', 'obfiscco_oliwood');
    
    
    // To protect MySQL injection for Security purpose
    $username = stripslashes($username);
    $password = stripslashes($password);
    $username = mysqli_real_escape_string ( $connection, $username );
    $password = mysqli_real_escape_string( $connection, $password);
    
    // Selecting Database
    $db = mysqli_select_db ( $connection , "oliwood" );
    
    // SQL query to fetch information of registerd users and finds user match.
    $query = mysqli_query( $connection, "select * from login where password='$password' AND username='$username'");
  
    $rows = mysqli_num_rows($query);

    if ($rows == 1) {
      $_SESSION['login_user']=$username; // Initializing Session
      header("location: profile.php"); // Redirecting To Other Page
    } else {
      $error = "Username or Password is invalid";
    }
    mysqli_close($connection); // Closing Connection
  }
}
?>