var clickPower = 1; //wafers per click

var wafers = 0;
function waferClick(number){  //primary click function - add clickpower back if not causing glitch
    wafers = wafers + number;
    document.getElementById("wafers").textContent = wafers;  //use textContent instead of innerHTML
};

var deacons = 0;
function hireDeacon(){
    var deaconCost = Math.floor(100 * Math.pow(1.025,deacons));     //works out cost 
    if(wafers >= deaconCost){                                   //checks that the player can afford item
		deacons = deacons + 1;
        wafers = wafers - deaconCost;                          //removes spent wafers
        document.getElementById('deacons').textContent = deacons;  //updates the number of deacons 
        document.getElementById('wafers').textContent = wafers;  //updates the number of wafers
    };
    var nextCost = Math.floor(100 * Math.pow(1.025,deacons));  //works out the cost of the next deacon
    document.getElementById('deaconCost').textContent = nextCost;  //updates the cost 
    
};

var priests = 0;
function hirePriest(){
    var priestCost = Math.floor(1000 * Math.pow(1.025,priests));     
    if(wafers >= priestCost){                                   
		priests = priests + 1;
        wafers = wafers - priestCost;                       
        document.getElementById('priests').textContent = priests; 
        document.getElementById('wafers').textContent = wafers;  
    };
    var nextCost = Math.floor(1000 * Math.pow(1.025,priests));  
    document.getElementById('priestCost').textContent = nextCost;  
   
};

window.setInterval(function(){  //lets deacons click once per second
	waferClick(deacons);
}, 1000);

window.setInterval(function(){  //lets everything else click at rate of 0.1 seconds
	waferClick(priests);
}, 100);
