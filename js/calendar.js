/* calendar.js
  author: Russ Erdos russ.erdos@gmail.com
  description: very simple booking calendar.
*/


$().ready(function () {

  'use strict';

  var loc = window.location.pathname;
  var dir = loc.substring(0, loc.lastIndexOf('/'));
  var path = "";
  
  path = (dir == "/oliwood/admin")?"":"admin/";
  
  $("#startDate").datepicker();
  $("#startDate").datepicker("option", "dateFormat", "yy-mm-dd");
  $("#endDate").datepicker();
  $("#endDate").datepicker("option", "dateFormat", "yy-mm-dd");
  
  // ==========================================================================
  //                          D A T A B A S E
  // ==========================================================================
  
  doAjax();
  
  function doAjax(){
    var obj = jQuery.ajax({
      type: "POST", // HTTP method POST or GET
      url: path + "configDataOnly.php", //Where to make Ajax calls
      dataType:"json", // Data type, HTML, json etc.
      success:function(msg){
        var obj = jQuery.extend(true, {}, msg);
        buildDataArray(obj);
        
      },
      error:function (xhr, ajaxOptions, thrownError){
          //On error, we alert user
          alert("ErRoR: " + thrownError);         
      }

    });
  
  }

  function buildDataArray(obj) {

    $(obj).each(function(idx){

      for (var i = 0; i < Object.keys(obj).length; i++){

        var startDateString = this[idx+i].startDate.substr(0,4)+','+this[idx+i].startDate.substr(5,2)+','+this[idx+i].startDate.substr(8,2);
        var endDateString = this[idx+i].endDate.substr(0,4)+','+this[idx+i].endDate.substr(5,2)+','+this[idx+i].endDate.substr(8,2);

        var objThisDate = new Date(startDateString);
        var objStartDate = new Date(startDateString);
        var objEndDate = new Date(endDateString);
        
        while (objThisDate.valueOf() <= objEndDate.valueOf()){
          var dateString = yyyymmdd(objThisDate);
          dataArray.push(dateString);
          addDay(objThisDate);
        }
      }

    });

    calendar(dataArray);

  }

  // ==========================================================================
  //                          C A L E N D A R
  // ==========================================================================
  /* INITIALIZE VARIABLES */
  
  
  var mmArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],

    objToday = new Date(),
    objCurrentDay = objToday,
    intSaveCurrentMonth = objToday.getMonth(),
    intSaveCurrentYear = objToday.getFullYear(),
    intCurrentMonth = objToday.getMonth(),
    intCurrentYear = objToday.getFullYear(),

    objFirstDayOfMonth = new Date(intCurrentYear, intCurrentMonth, 1),
    intFirstDayOfWeek = objFirstDayOfMonth.getDay(),
    objDivDay = objFirstDayOfMonth,

    dataArray = new Array,
      
    end = "dummy";
      
  /* FUNCTIONS */

  objDivDay.setDate(objDivDay.getDate() - intFirstDayOfWeek);
  
  function shortMonth(mm) {
    var mmm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return mmm[mm];
  }
  
  function intMonth(month) {
    var mmm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return mmm.indexOf(month);
  }
  
  function shortDay(dd) {
    var ddd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return ddd[dd];
  }
  
  function buildNav() {
    
    var count = 0,
      output = "",
      writeCurrentYear = "",
      writeNextYear = "",
      i = intCurrentMonth;
    
    output += "<ul id=\"month1\">";

    for (i = intCurrentMonth; count < 12; i++) {
      
      count++;
      
      writeCurrentYear = count==1?intSaveCurrentYear:"";
      writeNextYear = i==0?intSaveCurrentYear+1:"";
      
      output += "<li><a href=\"#\" class=\"month" + i + "\"><span id=\"currentYear\">" + writeCurrentYear + writeNextYear + "</span>" + shortMonth(i) + "</a></li>"; 
      
      i = i==11?-1:i;
    
      if (count == 6){

        output += "</ul>\n<ul id=\"month2\">";

      }

    }
    output += "</ul>";
    document.getElementById("monthNav").innerHTML += output;
  }
  

  function addDay(n) {
    return n.setDate(n.getDate() + 1);
  }

  function subtractDay(n) {
    return n.setDate(n.getDate() - 1);
  }

  function makeHeading() {
    var output = "<div class=\"monthHeader\">";
    for (var i = 0; i < 7; i++ ) {
      output += "<div class=\"weekdayHeading\">" + shortDay(i) + "</div>";
    }
    output += "</div>";
    document.getElementById("demo").innerHTML += output;
  }

  function yyyymmdd(objDate) {
    var str = objDate.getFullYear();
    var month = objDate.getMonth()+1;
    str += (objDate.getMonth().toString().length < 2)?"0"+month:month;
    str += (objDate.getDate().toString().length < 2)?"0"+objDate.getDate():objDate.getDate();
    return str;
  }

  function thisIsBooked(objDate) {
    var strDate = yyyymmdd(objDate);

    var result = false;
    if (dataArray.indexOf(strDate) != -1){
      result = true;
    }
    return result;
  }
    
  function makeDay() {

    var output = "",
        booked = "",
        classes = "day";

    if (objDivDay.toDateString() === objToday.toDateString()){ 
          classes = "day today";
    } else {
      if ( thisIsBooked(objDivDay) ) {
        classes = objDivDay.getMonth() != intCurrentMonth ? "booked pday":"booked day";
      }else{
        classes = objDivDay.getMonth() != intCurrentMonth ? "pday":"day";
      }
    }
    output += "<div class=\"" + classes + "\">";
    
    output += "<div class=\"dayContainer\">";
    output += "<div class=\"cDate\"> " + objDivDay.getDate();
    output += "</div>";
    output += booked;
    output += "</div>";
    output += "</div>";
    return output;
  }

  function makeWeek(dataArray) {
    
    var output = "<div class=\"week\">";
    for (var i = 0; i < 7; i++ ) {
      output += makeDay(dataArray);
      addDay(objDivDay);
    }
    output += "</div>";
    document.getElementById("demo").innerHTML += output;
  }
  
  function setDefaults() {
    var cMth = '.month' + intCurrentMonth;
    var $curMth = $(cMth).parent();
    $curMth.addClass("curMonth");
  }

  function makeMonth(dataArray) {
    
    makeHeading();
    makeWeek(dataArray);
    makeWeek(dataArray);
    makeWeek(dataArray);
    makeWeek(dataArray);
    if (objDivDay.getMonth() == intCurrentMonth){
      makeWeek(dataArray);
    }
    
    if (objDivDay.getMonth() == intCurrentMonth){
      makeWeek(dataArray);
    }
  }
  
    
  
  function calendar(dataArray) {        
    
    var calOutput = buildNav();
    calOutput += setDefaults();
    calOutput += makeMonth(dataArray);

  
    var $navButtons = $('.calendar nav li');

    $navButtons.click(function(e){
      e.preventDefault();
      var cMth = '.month' + intCurrentMonth,
      $curMth = $(cMth).parent(),
        mth = "";


      $curMth.removeClass("curMonth");

      mth = this.firstChild.text.length > 3?this.firstChild.text.substr(4,3):this.firstChild.text;

      intCurrentMonth = intMonth(mth);

      intCurrentYear = (intCurrentMonth < intSaveCurrentMonth)?intSaveCurrentYear+1:intSaveCurrentYear;

      setDefaults();
      objCurrentDay = new Date(intCurrentYear, intCurrentMonth, 1);
      intCurrentYear = objCurrentDay.getFullYear();

      objFirstDayOfMonth = new Date(intCurrentYear, intCurrentMonth, 1);
      intFirstDayOfWeek = objFirstDayOfMonth.getDay();
      objDivDay = objFirstDayOfMonth;

      document.getElementById("demo").innerHTML = "";
        objDivDay.setDate(objDivDay.getDate() - intFirstDayOfWeek);

      calOutput += makeMonth()

    }); // navButtons.click(function()
        
    //return calOutput;

  }


  
  
  // ==========================================================================
  //                          M O R E   A J A X 
  // ==========================================================================
  

  

});



