
console.log('hellooo')


fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
	"method": "GET",
	"mode":"no-cors",
	"qs": {
		'start': '1',
		'limit': '5000',
		'convert': 'USD'
	},
	"headers": {
		"X-CMC_PRO_API_KEY": "1adb4a12-fc52-4b32-b8da-153c99c6a524",
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});