
// (function() {
//     'use strict';
//     var website = openerp.website;
//     website.openerp_website = {};

//     website.snippet.options.learning_snippets_options = website.snippet.Option.extend({
       
//        var slideIndex = 1;
// 		showDivs(slideIndex);

// 		function plusDivs(n) {
// 		  showDivs(slideIndex += n);
// 		}

// 		function showDivs(n) {
// 		  var i;
// 		  var x = document.getElementsByClassName("mySlides");
// 		  if (n > x.length) {slideIndex = 1}    
// 		  if (n < 1) {slideIndex = x.length}
// 		  for (i = 0; i < x.length; i++) {
// 		     x[i].style.display = "none";  
// 		  }
// 		  x[slideIndex-1].style.display = "block";  
// 		}
//     })
// })();

// odoo.define('theme_tutorial', function(require){
// 	var slideIndex = 1;
// 	showDivs(slideIndex);

// 	function plusDivs(n) {
// 		  showDivs(slideIndex += n);
// 		}

// 	function showDivs(n) {
// 		  var i;
// 		  var x = document.getElementsByClassName("mySlides");
// 		  if (n > x.length) {slideIndex = 1}    
// 		  if (n < 1) {slideIndex = x.length}
// 		  for (i = 0; i < x.length; i++) {
// 		     x[i].style.display = "none";  
// 		  }
// 		  x[slideIndex-1].style.display = "block";  
// 	}
// })
odoo.define('theme_tutorial', function (require) {
    var utils = require('web.utils');
    var Model = require('web.Model');

    // do things with utils and Model
    var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}

	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  if (n > x.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
	     x[i].style.display = "none";  
	  }
	  x[slideIndex-1].style.display = "block";  
	}
    return  {
        
    };
});
