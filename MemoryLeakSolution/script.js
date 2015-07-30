function search_number(op) {
        var t = new Date();
        for (var i = 0; i < 10; ++i) {
			ds.MyClass.query("as_number "+op+" :1", 75000000000000 * i % 20000000000000000);
        }
        var t2 = new Date();
        return t2 - t;
}

function search_string(op) {
        var t = new Date();
        for (var i = 0; i < 10; ++i) {
			ds.MyClass.query("as_string "+op+" :1", "Data" + (3 * i % 1234));
        }
        var t2 = new Date();
        return t2 - t;
}

function search_long(op) {
        var t = new Date();
        for (var i = 0; i < 10; ++i) {
			ds.MyClass.query("as_long_btree "+op+" :1", 7500000 * i % 2147483647);
        }
        var t2 = new Date();
        return t2 - t;
}

function search_date(op) {
        var t = new Date();
        for (var i = 0; i < 10; ++i) {
			ds.MyClass.query("as_date_btree "+op+" :1", new Date('' + (i % 12 + 1) + '/' + (i % 27 + 1) + '/' + (2000 + (i % 100 + 1))));
        }
        var t2 = new Date();
        return t2 - t;
}

function fill_ds() {
        var t = new Date();
        for (var i = 0; i < 10; ++i) {
			DataGenUtils.generateData(ds.MyClassForCreate,5000,false);
        }
        var t2 = new Date();
        return t2 - t;
}
function s_number(request,response){

	var o = 0;
	var run = 10;
	
	for (var i = 0; i < run; i++) {
	o += search_number(request.urlQuery)
	}

	return (o/10).toString();
}

function s_string(request,response){

	var o = 0;
	var run = 10;
	
	for (var i = 0; i < run; i++) {
	o += search_string(request.urlQuery)
	}

	return (o/10).toString();
}


function s_long(request,response){

	var o = 0;
	var run = 10;
	
	for (var i = 0; i < run; i++) {
	o += search_long(request.urlQuery)
	}

	return (o/10).toString();
}

function s_date(request,response){

	var o = 0;
	var run = 10;
	
	for (var i = 0; i < run; i++) {
	o += search_date(request.urlQuery)
	}

	return (o/10).toString();
}

function fill(){

	var o = fill_ds();
	return o.toString();
}



//function helloworld(){
//	return "hello world";
//}

//s_number()
//helloworld()


