<?php
//include db configuration file
include_once("config.php");

function valid($thisVar)
{
  if(isset($thisVar) && strlen($thisVar)>0) {
    return true;
  } else {
    return false;
    //echo "Header validation error.";
    //die(); 
  }
}


if( valid($_POST["startDate"]) && valid($_POST["endDate"]) && valid($_POST["colour"]) ) 
{	//check $_POST["content_txt"] is not empty

	//sanitize post value, PHP filter FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH Strip tags, encode special characters.
	$newStartDate = filter_var($_POST["startDate"],FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH); 
	$newEndDate = filter_var($_POST["endDate"],FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH); 
	$colour = filter_var($_POST["colour"],FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH); 

    $my_id = $dbh->lastInsertId();
  
	// Insert sanitize string in record
	$insert_row = $dbh->query("INSERT INTO bookings(id, startDate, endDate, colour) VALUES('".$my_id."','".$newStartDate."','".$newEndDate."','".$colour."')");
	
  	if($insert_row)
	{
		 //Record was successfully inserted, respond result back to index page
		  $my_id = $dbh->lastInsertId(); //Get ID of last inserted row from MySQL
		  echo '<li id="item_'.$my_id.'">';
		  echo '<div class="del_wrapper"><a href="#" class="del_button" id="del-'.$my_id.'">';
		  echo '<img src="../images/icon_del.gif" border="0" />';
		  echo '</a></div>';
		  echo $my_id.' '.$newStartDate.' '.$newEndDate.' <div class="liDivColor" style="background-color:'.$colour.'"></div></li>';      
      
		  $dbh = null; //close db connection
	}else{
		
		//header('HTTP/1.1 500 '.mysql_error()); //display sql errors.. must not output sql errors in live mode.
		header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
		exit();
	}

}
elseif(isset($_POST["recordToDelete"]) && strlen($_POST["recordToDelete"])>0 && is_numeric($_POST["recordToDelete"]))
{	//do we have a delete request? $_POST["recordToDelete"]
	//sanitize post value, PHP filter FILTER_SANITIZE_NUMBER_INT removes all characters except digits, plus and minus sign.
  
      $idToDelete = filter_var($_POST["recordToDelete"],FILTER_SANITIZE_NUMBER_INT); 
      //try deleting record using the record ID we received from POST
      $delete_row = $dbh->query("DELETE FROM bookings WHERE id=".$idToDelete);

      if(!$delete_row)
      {    
          //If mysql delete query was unsuccessful, output error 
          header('HTTP/1.1 500 Could not delete record!');
          exit();
      }
      $dbh=null; //close db connection

  
}
elseif(isset($_POST["getAllBookings"]) && strlen($_POST["getAllBookings"])>0 )
{
  $array = $query->fetch(PDO::FETCH_OBJ);
  //$data = echo json_encode($array);
}
else
{
	//Output error
	header('HTTP/1.1 500 Error occurred, Could not process request!');
    exit();
}

?>