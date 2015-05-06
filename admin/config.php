<?php
$hostname = "localhost"; //hostname
$username = "root"; //mysql username
$password = ""; //mysql password
$databasename = 'oliwood'; //databasename
$tablename = 'bookings';

$connectionStr = 'mysql:host='.$hostname.';dbname='.$databasename.'';   
$driverOptions = array();    

     $dbh = new PDO($connectionStr, $username, $password, $driverOptions);              
     $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);     

     //$query  =  $dbh->prepare("SELECT * FROM $tablename");
     //$query->execute();

?>
