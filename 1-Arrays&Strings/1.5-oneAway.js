// O(n) solution

const oneAway = (string1, string2) => {

    /*

    We can get some easy wins by determining the length of each string.

    If there is a difference in the length, then we know we won't be dealing 
    with a replacement edit.

    Also if the difference in length is greater than 1, then we can return 
    false because we would have to do more than 1 edit. 

    */

    const lengthStr1 = string1.length;
    const lengthStr2 = string2.length;
    const difference = Math.abs(lengthStr1 - lengthStr2)

    if(difference > 1){
        return false
    }
    
    else if(difference === 1) {
        
        /*

        This is where the insertion or deletion logic will lie.
        Here are the steps we are going to take

        1) Determine which string is the larger one and which one is the smaller one 
        2) Iterate through the smaller string and compare each character at a 
           particular index to the character of the larger string at that index 
        3) If there is a difference, then we insert whatever the character is in the 
           larger string into the smaller string @ that index. We then state that we 
           editted the string by setting "didEdit" to true
        4) We continue to iterate through the smaller string (now the same size) and 
           if there is no mismatches between characters we return true
        5) If however there is a further mismatch, we return false because it will 
           require more than one edit

        */

        // STEP 1
        let smallerString = lengthStr2 > lengthStr1 ? string1.split("") : string2.split("")
        let largerString = lengthStr2 < lengthStr1 ? string1.split("") : string2.split("");
        let didEdit = false
        
        // STEP 2 & STEP 5
        for(let i = 0; i < smallerString.length; i++){
            if(smallerString[i] === largerString[i]){} 
            else {
                // STEP 3
                if(!didEdit){
                    smallerString.splice(i, 0, largerString[i])
                    didEdit = true
                } else {
                    // STEP 5
                    return false
                }
            }
        }

        return true

    } 

    else if (difference === 0) {

        /*

        Here we go through the exact similar logic as above but instead of splicing 
        we are actually changing the index

        */

       let string1Array = string1.split("") 
       let string2Array = string2.split("");
       let didEdit = false
       
       for(let i = 0; i < string1Array.length; i++){
           if(string1Array[i] === string2Array[i]){} 
           else {
               if(!didEdit){
                   string1Array[i] = string2Array[i]
                   didEdit = true
               } else {
                   return false
               }
           }
       }

       return true

    }

}



// TESTS 
console.log(oneAway("pata", "kkta"), false)
console.log(oneAway("pata", "pasta"), true)
console.log(oneAway("kata", "pasta"), false)
console.log(oneAway("lal", "lala"), true)
console.log(oneAway("kal", "lal"), true)
console.log(oneAway("kak", "lal"), false)


