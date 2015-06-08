<?php
include_once('local.php');
//include_once('web.php');

$connectionStr = 'mysql:host='.$hostname.';dbname='.$databasename.'';   
$driverOptions = array();    

     $dbh = new PDO($connectionStr, $username, $password, $driverOptions);              
     $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);     

     $query  =  $dbh->prepare("SELECT * FROM $tablename");
     $query->execute();

     $bookings = $query->fetchAll();

//print_r( json_encode( $bookings ) );
     echo json_encode($bookings);



?>
