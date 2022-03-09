const API = "http://localhost:4242/api/getConfiguration"

export const useCarFetch = (raw) => {
	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	fetch(API, requestOptions)
	  .then(response => response.text())
	  .then(result => {
	  	const carParams = JSON.parse(result)
	  	return carParams
	  })
	  .catch(error => console.log('error', error));
}
