
/*****************************************************

****Test Memory leaks on the query function***********

******************************************************/



// Bugs : WAK0093094

function testML_query_number(op) {
        for (var i = 0; i < 700000; ++i) {
            ds.MyClass.query("as_number "+op+" :1", 75000000000000 * i % 20000000000000000);
//           	DataGenUtils.generateData(ds.MyClassForCreate,5000,false);

        }}

function testML_query_string(op) {
    for (var i = 0; i < 700000; ++i) {
	ds.MyClass.query("as_string "+op+" :1", "Data" + (3 * i % 1234));
	}
}

function testML_query_long(op) {
        for (var i = 0; i < 700000; ++i) {
            ds.MyClass.query("as_long "+op+" :1", 7500000 * i % 2147483647);
//          ds.MyClass.query("as_date_btree < :1", new Date('' + (i % 12 + 1) + '/' + (i % 27 + 1) + '/' + (2000 + (i % 100 + 1))));
//          DataGenUtils.generateData(ds.MyClassForCreate,5000,false);

        }}
        
        
function testML_query_date(op) {
        for (var i = 0; i < 700000; ++i) {
          ds.MyClass.query("as_date "+op+" :1", new Date('' + (i % 12 + 1) + '/' + (i % 27 + 1) + '/' + (2000 + (i % 100 + 1))));
}}

//testML_query_long("<")
//testML_query_long("=")
//testML_query_long(">")

