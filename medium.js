var ranInterval = 1000 + Math.floor((Math.random() * 7000) + 1);
window.setTimeout( CreateDiv, ranInterval ); 
var misses = 0;
function CreateDiv()
{
    var ranLeft1 = Math.floor((Math.random() * 700) + 1);
	var ranLeft2 = Math.floor((Math.random() * 600) + 1);
	var ranLeft3 = Math.floor((Math.random() * 800) + 1);
    var ranInterval = 2000 + Math.floor((Math.random() * 5000) + 1);
    jQuery('<div class="droper1" id="droper1" onclick="myFunction1()"/>').css({top: 10, left: ranLeft1 }).
	    animate({top: "+=583px"}, 5000 , 
		    function() {
            if (!$(this).hasClass("clicked")) {
                misses++;
                document.getElementById("missed").innerHTML = misses;
				if(misses >= 3){
				   alert("die GREEN");
				}
            }}).fadeOut(500).appendTo('#container' );
	jQuery('<div class="droper2" id="droper2" onclick="myFunction2()" />').css({top: 10, left: ranLeft2 }).
	    animate({top: "+=583px"}, 4000 ).fadeOut(500).appendTo('#container' );
	jQuery('<div class="droper3" id="droper3" onclick="myFunction3()" />').css({top: 10, left: ranLeft3 }).
	    animate({top: "+=583px"}, 2000 ).fadeOut(500).appendTo('#container' );
    window.setTimeout( CreateDiv, ranInterval );
}


