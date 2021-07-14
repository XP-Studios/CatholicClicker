var diaconalAchieved = 0;  //achievement variables
var ordinationAchieved = 0;

var clickPower = 1; //liras per click

var liras = 0;
function liraClick(number * clickPower){  //primary click function
    liras = liras + number;
    document.getElementById("liras").textContent = liras;  //use textContent instead of innerHTML
};

var deacons = 0;
function hireDeacon(){
    var deaconCost = Math.floor(100 * Math.pow(1.025,deacons));     //works out cost 
    if(liras >= deaconCost){                                   //checks that the player can afford item
		deacons = deacons + 1;
        liras = liras - deaconCost;                          //removes spent liras
        document.getElementById('deacons').textContent = deacons;  //updates the number of deacons 
        document.getElementById('liras').textContent = liras;  //updates the number of liras
    };
    var nextCost = Math.floor(100 * Math.pow(1.025,deacons));  //works out the cost of the next deacon
    document.getElementById('deaconCost').textContent = nextCost;  //updates the cost 
    diaconalAchieved = 1;  //achievment
	document.getElementById('diaconal').textContent = 'Orders I: Achieved!';
};

var priests = 0;
function hirePriest(){
    var priestCost = Math.floor(1000 * Math.pow(1.025,priests));     
    if(liras >= priestCost){                                   
		priests = priests + 1;
        liras = liras - priestCost;                       
        document.getElementById('priests').textContent = priests; 
        document.getElementById('liras').textContent = liras;  
    };
    var nextCost = Math.floor(1000 * Math.pow(1.025,priests));  
    document.getElementById('priestCost').textContent = nextCost;  
    ordinationAchieved = 1;  
	document.getElementById('ordination').textContent = 'Orders II: Achieved!';
};


var pontificalKnighthood = 0;
function pontificalKnighthood(){
	var pontificalKnighthoodCost = 1000;
	if(liras >= pontificalKnighthoodCost({
		pontificalKnighthood = 1;
		liras = liras - pontificalKnighthoodCost;
		clickPower = 2;
		document.getElementById('pontificalKnighthood').textContent = "Bought!"; 
        document.getElementById('liras').textContent = liras;  
	}
};

window.setInterval(function(){  //have buildings "click" every second
	liraClick(deacons);
	liraClick(priests * 10);
}, 1000);
