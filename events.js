// JavaScript Document
$(document).on("pageinit", "#view-calendar", function () { 
   $("#calendar").jqmCalendar({
      events : [ 
	   
	   
	   
	  { "summary" : "Bokamoso South vs Bokamoso North - L", "begin" : new Date("10 September 2016 09:00:00 "), "end" : new Date("10 September 2016 11:00:00") }, 
	  { "summary" : "Test", "begin" : new Date(), "end" : new Date() } ],
      
	  
	  months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      days : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      startOfWeek : 0
   });
})