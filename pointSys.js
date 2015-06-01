function Player (name, points) {
    this.name = name;
    this.points = points;
    this.setName = function(name) {
        this.name = name;
    };
    this.setPoints = function(points){
    	this.points = points;
    };
    this.persist = function(id){
        if(id === 1){
	    	setCookie('P1name',this.name,0);
	    	setCookie('P1points',this.points,0);
        } else
        if(id === 2){
	    	setCookie('P2name',this.name,0);
	    	setCookie('P2points',this.points,0);
        }
    };
    this.loadData = function(id){
        if(id === 1){
	    	this.name = getCookie('P1name');
	    	this.points = getCookie('P1points');
        } else
        if(id === 2){
	    	this.name = getCookie('P2name');
	    	this.points = getCookie('P2points');
        }
    };
    this.showData = function(id){
        if(id === 1){
        	$('#1name').empty().append(this.name);
        	$('#p1points').empty().append(this.points);
        } else
        if(id === 2){
        	$('#2name').empty().append(this.name);
        	$('#p2points').empty().append(this.points);
        }
    };

}


jQuery(document).ready(function($) {
	$('#save').click(function(event) {
		player1.persist();
		player2.persist();
	});

	$('#load').click(function(event) {
		player1.loadData(1);
		player2.loadData(2);
	});


	$('#typedPlayerName1').click(function() {
  		$('#typedPlayerName1').val('');
	});
	$('#typedPlayerName2').click(function() {
  		$('#typedPlayerName2').val('');
	});

	$('#typedPlayerName1').keyup(function() {
  		player1.setName($('#typedPlayerName1').val());
  		player1.showData(1);
	});
	$('#typedPlayerName2').keyup(function() {
  		player2.setName($('#typedPlayerName2').val());
  		player2.showData(2);
	});

	$('#true').click(function(event) {
		player1.points++;
		player1.showData(1);
	});
	$('#jinx').click(function(event) {
		player2.points--;
		player2.showData(2);
	});
});


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
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

var player1 = new Player('Player 1',0);
var player2 = new Player('Player 2',0);