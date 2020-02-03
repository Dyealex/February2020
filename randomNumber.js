function randomCheck () {
var randomNumber=Math.random();
				randomNumber=randomNumber*6;
				randomNumber=Math.floor(randomNumber);
				if 
					(document.getElementById("userInput").value==randomNumber) {
						alert ("Way to go!");
					}else{ 
						alert("Sorry the number was " + randomNumber);
                    }
                }
                