function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var username = getCookie("userdata");
	var user = document.getElementById("username").value;
	
	var diff = getCookie("diff");
	var level = document.getElementById("difficulty");
	var difficulty = level[level.selectedIndex].text;
	   
    if (user == username ) {
	    if(diff == difficulty ){
		  window.open ('welcomeScreen.html');
		}else {
		  diff = difficulty;
		  setCookie("diff", diff, 1);
		  window.open ('welcomeScreen.html');
		}
    } else {
        if (user != "" && user != null) {
			username = user;
            setCookie("userdata", username, 1);
			//window.open ('openGame.html');
			if(diff == "Easy"){
			window.open ('easy.html');
			}
			if(diff == "Medium"){
			window.open ('medium.html');
			}
			if(diff == "Difficult"){
			window.open ('diff.html');
			}
        }
    }
}

function deleteCookie() {
    setCookie("userdata"," ", 1);
	setCookie("diff", " ", 1);
	setCookie("highScore"," ", 1);
	window.location = 'FirstPage.html';
}

function displayData(){
    var name = getCookie("userdata");
	document.getElementById("name").innerHTML = name;
	
	var level = getCookie("diff");
    document.getElementById("diffLevel").innerHTML = level;
	
	var score = getCookie("highScore");
	document.getElementById("Score").innerHTML = score;
}