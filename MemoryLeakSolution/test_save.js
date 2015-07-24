/*****************************************************

****Test Memory leaks on the save function************

******************************************************/


function testML_new_ds(){

	for (var i = 0; i < 7000000; ++i) {
		var a = new ds.MyClassForCreate();
		}
}
	
function testML_save_numberAttr(){
	for (var i = 0; i < 7000000; ++i) {
		var a = new ds.MyClassForCreate();
		a.as_number = 75000000000000 * i % 20000000000000000
		a.save();
	}
}


function testML_save_stringAttr(){
	for (var i = 0; i < 7000000; ++i) {
		var a = new ds.MyClassForCreate();
		a.as_string = "Data" + (3 * i % 1234);
		a.save();
	}	
}

function testML_save_longAttr(){
	for (var i = 0; i < 7000000; ++i) {
		var a = new ds.MyClassForCreate();
		a.as_long = 7500000 * i % 2147483647
		a.save();
	}	
}

function testML_save_dateAttr(){
	for (var i = 0; i < 7000000; ++i) {
		var a = new ds.MyClassForCreate();
		a.as_date_btree = Date('' + (i % 12 + 1) + '/' + (i % 27 + 1) + '/' + (2000 + (i % 100 + 1)));
		a.save();
	}
}

