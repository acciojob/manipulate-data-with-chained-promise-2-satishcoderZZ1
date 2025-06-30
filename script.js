//your JS code here. If required.
//your JS code here. If required.
function delay(ms, data){
	return new Promise((resolve)=>{
		setTimeout(()=> resolve(data), ms);
	});
}

function manipulateArray(){
	const initialArray = [1,2,3,4];
	return delay(3000, initialArray)
	.then((array)=>{
		const evens = array.filter(num=> num%2 === 0);
		return delay(1000, evens);
	})
	.then((filteredEvens)=>{
		document.getElementById("output").textContent = filteredEvens.join(',');
		const doubled = filteredEvens.map(num => num*2);
		return delay(2000, doubled);
	})
	.then ((doubledArray)=>{
		document.getElementById('output').textContent = doubledArray.join(',');
	});
}

window.onload = manipulateArray;