


$(document).ready(function(){
	var apiKey = "9c431ef3043d6a1e9960fee52eb58628";
	var canvas = document.getElementById('current-temp');
	var context = canvas.getContext('2d');
	var currentTemp = 0;

	$('.weather-form').submit(function(){
		event.preventDefault();     


		// Get the user input;
		var cityText = $(".city").val()

		// Build the URL from the user input and our api key;
		var url = 'http://api.openweathermap.org/data/2.5/forecast/city?q='+cityText+',US&units=imperial&APPID=' + apiKey;
		
		// Go get the JSON from the constructed URL;
		$.getJSON(url, function(weatherData){
			currentTemp = weatherData.list[0].main.temp;
			console.log(currentTemp);
			console.log(weatherData);
			animate(0);
		})
	})
	function animate(current){

		context.clearRect(0,0,400,400);

		var tempColor = '#ff0000';
		context.strokeStyle = tempColor
		context.lineWidth = 10

		// I'm ready to draw...
		context.beginPath();
		context.arc(155,155,70,Math.PI*1.5,(current/100)*(Math.PI*2)+(Math.PI*1.5));

		// Draw that circle!
		context.stroke();

		context.fillText(currentTemp, 144, 159);

		current++;
		if(current < currentTemp){
			requestAnimationFrame(function(){
				animate(current);
			})

		}
	};
})

