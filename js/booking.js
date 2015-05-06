$(document).ready(function() {
  
    var $showBookings = $('#showBookings');
    var $respondsUL = $('#responds');
    $showBookings.click(function(e) {
      e.preventDefault();
      if ($showBookings.text()=="Show Bookings") {
        $showBookings.text("Hide Bookings");
      }else{
        $showBookings.text("Show Bookings");
      }
      $respondsUL.slideToggle(1000);
    });
  
	//##### send add record Ajax request to response.php #########
	$("#FormSubmit").click(function (e) {
			e.preventDefault();
			if($("#startDate").val()==='')
			{
				alert("Please enter a start Date!");
				return false;
			}
			if($("#endDate").val()==='')
			{
				alert("Please enter an end Date!");
				return false;
			}
			if($("#colour").val()==='')
			{
				alert("Please enter a colour!");
				return false;
			}
			
			$("#FormSubmit").hide(); //hide submit button
			$("#LoadingImage").show(); //show loading image
			
		 	var myData = 'startDate='+ $("#startDate").val(); //build a post data structure
		 	  myData += '&endDate='+ $("#endDate").val(); //build a post data structure
		 	  myData += '&colour='+ $("#colour").val(); //build a post data structure
			jQuery.ajax({
			type: "POST", // HTTP method POST or GET
			url: "../admin/response.php", //Where to make Ajax calls
			dataType:"text", // Data type, HTML, json etc.
			data:myData, //Form variables
			success:function(response){
              $("#responds").append(response);
              $("#startDate").val(''); //empty text field on successful
              $("#endDate").val(''); //empty text field on successful
              $("#colour").val('#ff0000'); //empty text field on successful
              $("#FormSubmit").show(); //show submit button
              $("#LoadingImage").hide(); //hide loading image
              location.reload();

			},
			error:function (xhr, ajaxOptions, thrownError){
				$("#FormSubmit").show(); //show submit button
				$("#LoadingImage").hide(); //hide loading image
				alert(thrownError);
			}
			});
	});

	//##### Send delete Ajax request to response.php #########
	$("body").on("click", "#responds .del_button", function(e) {
		 e.preventDefault();

      var clickedID = this.id.split('-'); //Split ID string (Split works as PHP 
      
      
      $( "#dialog-confirm" ).dialog({
        resizable: false,
        height:140,
        modal: true,
        buttons: {
          "Delete": function() {

            $( this ).dialog( "close" );
            deleteBooking(clickedID);

          },
          Cancel: function() {
            $( this ).dialog( "close" );
          }
        }
      });
      
    
      function deleteBooking(clickedID){
		 var DbNumberID = clickedID[1]; //and get number from array
		 var myData = 'recordToDelete='+ DbNumberID; //build a post data structure

        $('#item_'+DbNumberID).addClass( "sel" ); //change background of this element by adding class
		//$(objThis).hide(); //hide currently clicked delete button
		 
        jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "../admin/response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data: myData, //Form variables
        success:function(response){
            //on success, hide  element user wants to delete.
            $('#item_'+DbNumberID).fadeOut();
              location.reload();
        },
        error:function (xhr, ajaxOptions, thrownError){
            //On error, we alert user
            alert(thrownError);         
        }
        });
        
      }
	});

});