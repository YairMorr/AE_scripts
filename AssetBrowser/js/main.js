(function() {
	'use strict';
	// document.getElementById('btn_test').addEventListener('click', function () {
	// 	document.getElementById('test_id').innerHTML = 'yes';
	// });
			
	var csInterface = new CSInterface();

	document.getElementById('btn_test').addEventListener('click', function () {
		csInterface.evalScript('sayHello()'); 
	});

}());
