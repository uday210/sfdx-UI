var fs = require('fs');
 
// appendFile function with filename, content and callback function
fs.appendFile('package.xml', '<?xml version="1.0" encoding="UTF-8"?>\n <Package xmlns="http://soap.sforce.com/2006/04/metadata">\n <types>\n <members>Class_name_controller</members>\n <name>ApexClass</name>\n </types>\n <types>\n <members>*</members>\n <name>ApexComponent</name>\n </types>\n <version>29.0</version>\n </Package>', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
}); 