const link = 'http://my.linkmv.com/Home.aspx'

const http = require('http');
const $ = require('jquery');
var request = require('request');

request(link, function(error, response, body) {
	
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log('body:', body); // Print the HTML.


});

class Listing {

}


Listing.prototype.elt_to_obj = function(elt) {
		
	var tds = elt.children;

	this.date = tds[1].innerHTML;
	this.price = tds[2].innerHTML;
	this.address = tds[3].children[0].innerHTML;
	this.link = window.location.hostname + '/' + $(tds[3].children[0]).attr('href');
	this.type = tds[4].innerHTML;
	this.rating = tds[5].innerHTML;

	return this;
}

/*
listings = []

$('#ctl00_p_rN_C_rgNewList_ctl00 tbody tr').each(function(i, e) {
	
	l = new Listing().elt_to_obj(e)

	listings.push(l)
})

console.log(listings)
*/