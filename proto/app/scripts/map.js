define(['jquery','async!http://maps.google.com/maps/api/js?sensor=false'], function($){

	function initialize() {
	  var mapOptions = {
		  center: new google.maps.LatLng(-34.397, 150.644),
		  zoom: 8,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map($('div[data-map]').get(0), mapOptions);
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);

});