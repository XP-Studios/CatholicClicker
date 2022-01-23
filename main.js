var clickPower = 1; //wafers per click (works)

var wafers = 0;
function waferClick(number){  //primary click function 
    wafers = wafers + number;
    document.getElementById("wafers").textContent = wafers;  //use textContent instead of innerHTML
};

//hire clergy

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

var pastors = 0;
function hirePastor(){
    var pastorCost = Math.floor(10000 * Math.pow(1.025,pastors));     
    if(wafers >= pastorCost){                                   
		pastors = pastors + 1;
        wafers = wafers - pastorCost;                       
        document.getElementById('pastors').textContent = pastors; 
        document.getElementById('wafers').textContent = wafers;  
    };
    var nextCost = Math.floor(1000 * Math.pow(1.025,priests));  
    document.getElementById('priestCost').textContent = nextCost;  
};

var monsignori = 0;
function hireMonsignor(){
	var monsignorCost = Math.floor(100000 * Math.pow(1.025,monsignori));  
	if(wafers >= monsignorCost){   
		monsignori = monsignori + 1;
		wafers = wafers - monsignorCost;
		document.getElementById('monsignori').textContent = monsignori;
		document.getElementById('wafers').textContent = wafers;  
	}; 
	var nextCost = Math.floor(100000 * Math.pow(1.025,monsignori));  
    document.getElementById('monsignorCost').textContent = nextCost;  
};

//laicize clergy

function laicizeDeacon(){
    var deaconCost = Math.floor(100 * Math.pow(1.025,deacons));     //works out cost 
    if(deacons > 0){                                   //checks that the player can delete item
		deacons = deacons - 1;                         
        wafers = wafers + Math.round(.5 * deaconCost);                          //adds wafers
        document.getElementById('deacons').textContent = deacons;  //updates the number of deacons 
        document.getElementById('wafers').textContent = wafers;  //updates the number of wafers
    };
    var nextCost = Math.floor(100 * Math.pow(1.025,deacons));  //works out the cost of the next deacon
    document.getElementById('deaconCost').textContent = nextCost;  //updates the cost 
    
};

function laicizePriest(){
    var priestCost = Math.floor(100 * Math.pow(1.025,priests));
    if(priests > 0){                               
		priests = priests - 1;
        wafers = wafers + Math.round(.5 * priestCost);                      
        document.getElementById('priests').textContent = priests;  
        document.getElementById('wafers').textContent = wafers;  
    };
    var nextCost = Math.floor(100 * Math.pow(1.025,priests));  
    document.getElementById('priestCost').textContent = nextCost;  
};

function laicizePastor(){
    var pastorCost = Math.floor(100 * Math.pow(1.025,pastors));
    if(pastors > 0){                               
		pastors = pastors - 1;
        wafers = wafers + Math.round(.5 * pastorCost);                      
        document.getElementById('pastors').textContent = pastors;  
        document.getElementById('wafers').textContent = wafers;  
    };
    var nextCost = Math.floor(100 * Math.pow(1.025,pastors));  
    document.getElementById('pastorCost').textContent = nextCost;  
};

function laicizeMonsignor(){
    var monsignorCost = Math.floor(100 * Math.pow(1.025,monsignori));
    if(monsignori > 0){                               
		monsignori = monsignori - 1;
        wafers = wafers + Math.round(.5 * monsignori);                      
        document.getElementById('priests').textContent = monsignori;  
        document.getElementById('wafers').textContent = wafers;  
    };
    var nextCost = Math.floor(100 * Math.pow(1.025,monsignori));  
    document.getElementById('priestCost').textContent = nextCost;  
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

//mouseover events for clergy below here
function deaconMouseover(){
	document.getElementById('deaconInfo').textContent = 'A cleric whose job is to assist the priest at Mass, particularly by proclaiming the Gospel. They may be married in both Western and Eastern Catholicism.'

}
function deaconMouseout(){
	document.getElementById('deaconInfo').textContent = ''
}

function priestMouseover(){
	document.getElementById('priestInfo').textContent = 'The most common type of cleric. He says Mass, including the homily (sermon), and administers the other sacraments, except ordination and confirmation (ministered by bishop) and marriage (ministered by the couple). They may be married in Eastern Catholicism but generally cannot be in the West.'

}
function priestMouseout(){
	document.getElementById('priestInfo').textContent = ''
}
	
function pastorMouseover(){
	document.getElementById('pastorInfo').textContent = 'Technically not a rank of cleric: a priest who is the head of a parish (individual church).'
}
function pastorMouseout(){
	document.getElementById('pastorInfo').textContent = ''
}

function monsignorMouseover(){
	document.getElementById('monsignorInfo').textContent = 'Technically not a rank of cleric: a title of honor signifying that the priest is either a Protonotary Apostolic, Honorary Prelate, or Chaplain of His Holiness. Given to Vicars-General and any priest who the Pope gives the honor.'
}
function monsignorMouseout(){
	document.getElementById('monsignorInfo').textContent = ''
}
	
//click intervals below here

window.setInterval(function(){  //lets deacons click once per second
	waferClick(deacons);
}, 1000);

window.setInterval(function(){  //lets everything else click at rate of 0.1 seconds
	waferClick(priests);
	waferClick(pastors * 10);
	waferClick(monsignori * 100);
}, 100);
