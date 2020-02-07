// magicWord js file

    document.getElementById("checkMagicWord").onclick =function(){
			
    var magicWordEntered=document.getElementById("magicWord").value;
   
    var magicWord = "Ironman";
    var magicWord2 = "ironman"   
    
    if (magicWordEntered==magicWord){
            
    alert("You are an Ironman!");
    } else if (magicWordEntered==magicWord2) {
       alert ("Try again, this is case-sensitive...")
    }     
    else {
            
    alert ("Wrong! Try again...");
    }
    }

    