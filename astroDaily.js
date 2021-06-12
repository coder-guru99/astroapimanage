fetch("https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/basic_panchang/", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "019758259amsh4ed6a59ca7dea2fp1eaca9jsn83632070fc2b",
		"x-rapidapi-host": "vedicrishi-horoscope-matching-v1.p.rapidapi.com"
	},
	"body": {
		"day": "25",
		"month": "12",
		"year": "1988",
		"hour": "10",
		"min": "20",
		"lat": "25.123",
		"lon": "82.34",
		"tzone": "5.5"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});