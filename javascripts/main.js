$(document).ready(()=>{
	
	const apiKey = "";


	$("#submit").on("click", () => {
		let zip = $("#zip").val();
		//console.log(zip);
		loadByZip(zip).then((results) => {
			writeForecast(results);
			console.log("myresults name",results.name);
			console.log("myresults temp",results.main.temp);
			console.log("myresults pressure",results.main.pressure);
			console.log("myresults humidity",results.main.humidity);
			console.log("myresults low",results.main.temp_min);
			console.log("myresults high",results.main.temp_max);
			console.log("myresults desc",results.weather[0].description);
			console.log("myresults vis",results.visibility);
		}).catch((error)=>{
			console.log(error);
	});
});


const loadByZip = (zip) => {
		return new Promise((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&unit=imperial&APPID=${apiKey}`)
			.done((results) => resolve(results))
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
 	for (let i = 0; i < results.length; i++) {
 		outputString += `<h1>${results[i].name}</h1>`;
 	}
 	$('.output').html(outputString);
 };


















});