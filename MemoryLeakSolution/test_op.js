


/*****************************************************

****Test Memory leaks on the rest of DataStore API****

******************************************************/



/* test memory leak for ds.all */

function testML_ds_all() {
    for (var i = 0; i < 700000; ++i) {
	ds.MyClass.all();
	}
}


/* test memory leak for ds.average */

function testML_ds_average() {
    for (var i = 0; i < 700000; ++i) {
	ds.MyClass.average("as_number");
	}
}


/* test memory leak for ds.compute */

function testML_ds_compute() {
    for (var i = 0; i < 700000; ++i) {
	ds.MyClass.all().compute("as_number","as_long");
	}
}


/* test memory leak for ds.count */

function testML_ds_count() {
    for (var i = 0; i < 700000; ++i) {
	ds.MyClass.count("as_number");
	}
}


/* test memory leak for ds.createEntity */

function testML_ds_createEntity() {
    for (var i = 0; i < 700000; ++i) {
	ds.MyClass.createEntity();
	}
}

/* test memory leak for ds.createEntityCollection */

function testML_ds_createEntityCollection() {
    for (var i = 0; i < 700000; ++i) {
	ds.MyClass.createEntityCollection();
	}
}


/* test memory leak for ds.distinctValues */

function testML_ds_distinctValues(type) {
    for (var i = 0; i < 700000; ++i) {
	ds.MyClass.distinctValues(type);
	}
}

/* test memory leak for ds.first */


function testML_ds_first(){
	for (var i = 0; i < 700000; ++i) {
		ds.MyClass.first();
	}
}

/* test memory leak for ds.forEach */

function testML_ds_forEach(){
	var mySet = ds.MyClassForCreate.all()
	for (var i = 0; i < 700000; ++i) {
		mySet.forEach(
			function(s){
				s.as_long *= 1.5;
				s.as_string += " Add" 
			}
		)
	}
}
//	var mySet = ds.MyClassForCreate.all()

/* test memory leak for ds.getDataClass */

function testML_ds_getDataClass(){
	var mySet = ds.MyClassForCreate.all()
	for (var i = 0; i < 700000; ++i) {
		mySet.getDataClass();
	}
}

/* test memory leak for ds.max */

function testML_ds_max(type){
	for (var i = 0; i < 700000; ++i) {
		ds.MyClassForCreate.max(type);
	}
}

/* test memory leak for ds.min */


function testML_ds_min(type){
	for (var i = 0; i < 700000; ++i) {
		ds.MyClassForCreate.min(type);
	}
}


/* test memory leak for ds.minus */


function testML_ds_minus(query1,value1,query2,value2){
	var c = ds.MyClassForCreate.query(query1,value1);
	for (var i = 0; i < 700000; ++i) {
		var c2 = c.minus(ds.MyClassForCreate.query(query2,value2)) 
	}
}





//testML_ds_all();
//testML_ds_count();

//JSON.stringify(ds.getCacheInfo())