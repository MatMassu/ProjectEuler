/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
*/
function largestPrimeFactor(number) {

    let i=2
  
    while(number!=1){
      while(number%i==0){
        number/=i
      }
      if(number!=1){
        i+=1
      }
    }
    
    return i;
}
  
/*
largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFactor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(8) should return 2.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.
*/

console.log(largestPrimeFactor(5))
console.log(largestPrimeFactor(2))
console.log(largestPrimeFactor(3))
console.log(largestPrimeFactor(5))
console.log(largestPrimeFactor(7))
console.log(largestPrimeFactor(8))
console.log(largestPrimeFactor(13195))
console.log(largestPrimeFactor(600851475143))
