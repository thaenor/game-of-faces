function Player (name, points) {
    this.name = name;
    this.points = points;
    this.setName = function(name) {
        this.name = name;
    };
    this.setPoints = function(points){
        this.points = points;
    };
    this.addPoint = function(){
      this.points++;
    };
    this.persist = function(id){
        if(id === 1){
            // Check browser support
            if (typeof(Storage) != "undefined") {
                localStorage.setItem("player1_name", this.name);
                localStorage.setItem("player1_points", this.points);
            } else {
              alert("Sorry, your browser does not support Web Storage...");
            }
        } else
        if(id === 2){
            // Check browser support
            if (typeof(Storage) != "undefined") {
                localStorage.setItem("player1_name", this.name);
                localStorage.setItem("player1_points", this.points);
            } else {
              alert("Sorry, your browser does not support Web Storage...");
            }
        }
    };
    this.loadData = function(id){
        if(id === 1){
            if (typeof(Storage) != "undefined") {
                // Retrieve
                this.name = localStorage.getItem("player1_name");
                this.points = localStorage.getItem("player1_points");
            } else {
              alert("Sorry, your browser does not support Web Storage...");
            }
        } else if(id === 2){
                    // Retrieve
                    this.name = localStorage.getItem("player1_name");
                    this.points = localStorage.getItem("player1_points");
                } else {
                    alert("Sorry, your browser does not support Web Storage...");
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
  events();
});

function playerSelectorAddPoints(){
    if(activePane === 1){
        player1.events();
    }else if(activePane === 2){
        player2.events();
    }
}


var player1 = new Player('Player 1',0);
var player2 = new Player('Player 2',0);
var activePane = 1;
