var word1 = "Nthabiseng";
var word2 = "Mokemane";
var counter = 0;
var i;
var j;

for(i=0; i < word1.length; i++){ /*we using two for loops because 
									comparing two strings*/

	for(j=0; j < word2.length; j++){
	
		if(word1[i] == word2[j]){
		
			console.log(word2[j])
			counter++;
		
		}
	
	}

}