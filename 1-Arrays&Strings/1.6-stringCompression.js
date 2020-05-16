/*

This problem was a little trickier to solve than it first seemed

LOGIC 

Iterate through the entire string and compare the value of the current element you are iterating through 
to the element to its right. 

If they are the same, we increase the count by 1 (which is initially set as zero)

However, if they are not the same, we push onto the result array, the value of the letter we are currently 
iterating and the (count + 1).

EXAMPLE 

- = element we are iterating through 
~ = adjacent element we are comparing

Iteration 1:
a a b c c c c c a a 
- ~
count = 1; currentLetter = a

Iteration 2:
a a b c c c c c a a 
  - ~ 
result.push(`${currentLetter}${count + 1}`)
change: count = 0; currentLetter = b

Iteration 3:
a a b c c c c c a a 
    - ~ 
result.push(`${currentLetter}${count + 1}`)
change: count = 0; currentLetter = c

Iteration 4:
a a b c c c c c a a 
      - ~ 
count = 1; currentLetter = c

Iteration 5:
a a b c c c c c a a 
        - ~ 
count = 2; currentLetter = c

Iteration 6:
a a b c c c c c a a 
          - ~ 
count = 3; currentLetter = c

Iteration 7:
a a b c c c c c a a 
            - ~ 
count = 4; currentLetter = c

Iteration 8:
a a b c c c c c a a 
              - ~ 
result.push(`${currentLetter}${count + 1}`)
change: count = 0; currentLetter = a

Iteration 9:
a a b c c c c c a a 
                - ~ 
change: count = 1; currentLetter = a

Iteration 10:
a a b c c c c c a a 
                  - ~ 
result.push(`${currentLetter}${count + 1}`)
change: count = 0; currentLetter = undefined (loop is done)
*/



const stringCompressions = (string) => {

    let currentLetter = string[0]
    let count = 0;
    let result = [];

    for(let i = 0; i < string.length; i++){
        if(string[i+1] && string[i] === string[i+1]){
            count++
        } else {
            result.push(`${currentLetter}${count + 1}`)
            currentLetter = string[i + 1]
            count = 0
        }
    }

    return result.join("")

}


//tests
console.log(stringCompressions("aabcccccaa"), "a2b1c5a2")
console.log(stringCompressions("ssdddsggrrgooooooos"), "s2d3s1g2r2g1o7s1")
console.log(stringCompressions("aeeae"),"a1e2a1e1")
console.log(stringCompressions("f"), "f1")

