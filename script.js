//your JS code here. If required.
async function clickHandler(){
	let text = document.getElementById("text").value;
	let delay = document.getElementById("delay").value;
	function delayText(){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(text)
			},delay)
		})
	}
	let text1 = await delayText();
	document.getElementById("output").textContent=text1;
}
