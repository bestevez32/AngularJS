var app = angular.module('cr_calculator', []);

function encounter_calculator(){
	var myBox1 = document.getElementById('number_of_players').value;
	var myBox2 = document.getElementById('encounter_difficulty_selector').value;
	var myBox3 = document.getElementById('average_player_level').value;
	var result = document.getElementById('result');
	var my_result = myBox1 * myBox2 * myBox3;
	result.value = my_result;

	return result.value;
}



function testCase(){
	var test = encounter_calculator();
	alert(test);
}


var myObject = {
  "monsters": [{
      "id": "001",
      "name": "Aarakocra",
      "alignment": "Neutral Good",
      "size": "Medium Humanoid",
      "xp": 50,
      "source": "MM pg.12"
    },
    {
      "id": "002",
      "name": "Aboleth",
      "alignment": "Lawful Evil",
      "size": "Large Abberation",
      "xp": 6000,
      "source": "MM pg.13"
      
    },
    {
      "id": "003",
      "name": "Basilisk",
      "alignment": "Unaligned",
      "size": "Medium Monstrosity",
      "xp": 600,
      "source": "MM pg.24"
      
    },
    {
      "id": "004",
      "name": "Behir",
      "alignment": "Neutral Evil",
      "size": "Huge Monstrosity",
      "xp": 7500,
      "source": "MM pg.25"
    }
  ]
};

function showRandom() {
	var test = encounter_calculator();
	if (test == 50) {
		//var random = myObject.monsters[Math.floor(Math.random() * myObject.monsters.length)];
  		document.querySelector('.line').innerHTML = myObject.monsters[0].name + "<br>" + myObject.monsters[0].xp + " XP" + "<br>" + "Size: " + myObject.monsters[0].size + "<br>" + "Alignment: " + myObject.monsters[0].alignment + "<br>" + "Source: " + myObject.monsters[0].source;
	}  else if (test == 600){
		document.querySelector('.line').innerHTML = myObject.monsters[2].name + "<br>" + myObject.monsters[2].xp + " XP" + "<br>" + "Size: " + myObject.monsters[2].size + "<br>" + "Alignment: " + myObject.monsters[2].alignment + "<br>" + "Source: " + myObject.monsters[2].source;
	}  else if (test == 6000 ){
		document.querySelector('.line').innerHTML = myObject.monsters[1].name + "<br>" + myObject.monsters[1].xp + " XP" + "<br>" + "Size: " + myObject.monsters[1].size + "<br>" + "Alignment: " + myObject.monsters[1].alignment + "<br>" + "Source: " + myObject.monsters[1].source;
	} else if (test == 7500){
		document.querySelector('.line').innerHTML = myObject.monsters[3].name + "<br>" + myObject.monsters[3].xp + " XP" + "<br>" + "Size: " + myObject.monsters[3].size + "<br>" + "Alignment: " + myObject.monsters[3].alignment + "<br>" + "Source: " + myObject.monsters[3].source;
	} else {
		var random = myObject.monsters[Math.floor(Math.random() * myObject.monsters.length)];
  
  		document.querySelector('.line').innerHTML = random.name + "<br>" + random.xp + " XP" + "<br>" + "Size: " + random.size + "<br>" + "Alignment: " + random.alignment + "<br>" + "Source: " + random.source;
	}
	
	//var random = myObject.monsters[Math.floor(Math.random() * myObject.monsters.length)];
  
  	//document.querySelector('.line').innerHTML = random.name + "<br>" + random.xp + " XP" + "<br>" + "Size: " + random.size + "<br>" + "Alignment: " + random.alignment + "<br>" + "Source: " + random.source;
}





