function f1() {
	var a=1
	function f2() {
		var b=3;
		f3()
		console.log(b)
		function f3() {
			var c=5
			console.log(c)
		}
		
	}
	f2()
	console.log(a)
}
f1()