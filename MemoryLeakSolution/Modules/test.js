/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'test' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(test.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.helloWorld = function helloWorld () {
	        for (var i = 0; i < 1000000; ++i) {
            ds.MyClass.query("as_number_btree < :1", 75000000000000 * i % 20000000000000000);
//            ds.MyClass.query("as_string_btree < :1", "Data" + (3 * i % 1234));
//            ds.MyClass.query("as_long_btree < :1", 7500000 * i % 2147483647);
//           	ds.MyClass.query("as_date_btree < :1", new Date('' + (i % 12 + 1) + '/' + (i % 27 + 1) + '/' + (2000 + (i % 100 + 1))));
//           	DataGenUtils.generateData(ds.MyClassForCreate,5000,false);

}
	
};
