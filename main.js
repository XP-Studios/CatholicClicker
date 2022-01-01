var clickPower = 1; //wafers per click 

var wafers = 0;
function waferClick(number){  //primary click function 
    wafers = wafers + number;
    document.getElementById("wafers").textContent = wafers;  //use textContent instead of innerHTML
};

var deacons = 1;
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

var monsignori = 0;
function hireMonsignor(){
	var monsignorCost = Math.floor(10000 * Math.pow(1.025,monsignori));  
	if(wafers >= monsignorCost){   
		monsignori = monsignori + 1;
		wafers = wafers - monsignorCost;
		document.getElementById('monsignori').textcontent = monsignori;
		document.getElementById('wafers').textContent = wafers;  
	}; 
	var nextCost = Math.floor(10000 * Math.pow(1.025,monsignori));  
    document.getElementById('monsignorCost').textContent = nextCost;  
};

//upgrades below here

var clickUpgrade1 = false;
function buyClickUpgrade1(){
	if(wafers >= 2000 && clickUpgrade1 == false){
		clickUpgrade1 = true;
		wafers = wafers - 2000;
		clickPower = clickPower * 2;
		document.getElementById('clickUpgrade1Purchased').textContent = 'Yes!';
		document.getElementById('wafers').textContent = wafers;
	};
};

		
		

//click intervals below here

window.setInterval(function(){  //lets deacons click once per second
	waferClick(deacons);
}, 1000);

window.setInterval(function(){  //lets everything else click at rate of 0.1 seconds
	waferClick(priests);
	waferClick(monsignori * 10);
}, 100);
