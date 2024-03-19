function fibonacci(num) {
	if(num === 1)return 0;
	if(num === 2 )return 1;
	let a = 0;
	let b = 1;
	let sum = 0;
	for(let i = 2; i< num; i++){
		sum = a + b;
		a = b;
		b = sum;
	}
	return sum;
}

module.exports = fibonacci;