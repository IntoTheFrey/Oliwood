<?php
  include_once('session.php');
  include_once('../templates/headerAdmin.php');

  $pageID = "Profile Page";

?>

    <title><?php echo $pageID ?></title>

</head>
<div class="hide" id="dialog-confirm" title="Delete this Booking?">
<p style="min-height:100px;"><span class="ui-icon ui-icon-alert"></span>Are you sure?</p>
</div>

<body style="max-width:960px;margin:0 auto;">
    <div id="profile">
      <b id="welcome">Welcome : <i><?php echo $login_session; ?></i></b>
      <b id="logout"><a href="logout.php">Log Out</a></b>
    </div>



  <div class="content_wrapper">
    <div class="form_style">
      <div class="labelFlex">
        <label for="startDate">Start Date</label>
        <label for="endDate">End Date</label>
        <label for="colour">Colour</label>
      </div>
      <input type="text" id="startDate" name="startDate" size="10">
      <input type="text" id="endDate" name="endDate" size="10">
      <input type="color" id="colour" name="colour" value="#ff0000">
      <button id="FormSubmit">Add record</button>
      <img src="../css/images/loading.gif" id="LoadingImage" style="display:none" />
    </div>

    <div id="showBookings">Hide Bookings</div>

<ul id="responds" >

<?php

//include db configuration file
include_once('config.php');

//MySQL query
$results = $dbh->query("SELECT id, startDate, endDate, colour FROM bookings");

//get all records from add_delete_record table
while($row = $results->fetch())
{
  echo '<li id="item_'.$row["id"].'">';
  echo '<div class="del_wrapper"><a href="#" class="del_button" id="del-'.$row["id"].'">';
  echo '<div class="wrapDelete" title="Delete Booking"><img src="../css/images/icon_del.gif" alt="Delete Booking" title="Delete Booking" border="0" /></div>';
  echo '</a></div>';
  echo $row["id"].' '.$row["startDate"].' '.$row["endDate"].' <div class="liDivColor" style="background-color:'.$row["colour"].'"></div></li>';
}

//close db connection
$dbh = null;

?>

  
</ul>
</div>

<div class="toRight">
    <section class="calendar">
      <div class="header">
        <nav id="monthNav"></nav>
      </div>

<!--
    <main>
-->
        <div id="demo"></div>
<!--
    </main>
-->
      
  </section>
</div>

<?php
  include_once('../templates/footerAdmin.php');
?>
   

