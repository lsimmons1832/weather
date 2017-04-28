$(document).ready(()=>{
	
	const apiKey = "";


	$("#submit").on("click", () => {
		let zip = $("#zip").val();
		loadByZip().then((results) => {
		//writeForecast();
		//writeForecast(results.city);
		console.log(results.city);
		});
	});


const loadByZip = () => {
		return new Promise((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&APPID=${apiKey}`)
			.done((data) => resolve(results))
			.fail((error) => reject(error));
		});
	};

	const loadWeather = () =>{
		return new Promise((resolve, reject) =>{
			$.ajax(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apiKey}`)
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

 const writeForecast = (results) => {
 	let outputString = '';
 	for (var i = 0; i < results.length; i++) {
 		outputString += `<div>${results[i].temp}</div>`;
 	}
 };


















});