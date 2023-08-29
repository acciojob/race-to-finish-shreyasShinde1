window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for(let i =0; i<5;i++){
	const delay = Math.floor(Math.random() * 5)+1;
	const promise = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`promise ${i+1} resolved after ${delay} seconds`);
		},delay*1000)
	});
	promises.push(promise)
}
Promise.any(promises)
.then((result)=>{
	document.getElementById('output').textContent = result;
}).catch((err)=>{
	console.log("all peomises are rejected", err);
})
