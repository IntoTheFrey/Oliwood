<?php

// Establishing Connection with Server by passing server_name, user_id and password as a parameter
/* local */    
    $connection = new mysqli('localhost', 'root', '', 'oliwood');
/* web */    
    //$connection = new mysqli('localhost', 'obfiscco_oliwood', 'LKwacl)qn)z9wc6a', 'obfiscco_oliwood');
    


// Selecting Database
/* local */
$db = mysqli_select_db ( $connection , "oliwood" );
/* web */
//$db = mysqli_select_db ( $connection , "obfiscco_oliwood" );


session_start();// Starting Session

// Storing Session
$user_check=$_SESSION['login_user'];

// SQL Query To Fetch Complete Information Of User
$ses_sql=mysqli_query( $connection, "select username from login where username='$user_check'");
$row = mysqli_fetch_assoc($ses_sql);
$login_session =$row['username'];
if(!isset($login_session)){
  mysqli_close($connection); // Closing Connection
  header('Location: index.php'); // Redirecting To Home Page
}
?>