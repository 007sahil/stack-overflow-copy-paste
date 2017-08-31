export default is_prime

/*
*This method will return true if given number is prime otherwise false
*square_root(n) approach
*/

@param {Number} n  - the given number
@return {Boolean} - true if n is prime otherwise false


function is_prime(n){
  var sqrt_n = Math.floor(sqrt(n));
    if(n==1)
    return false;
    
    for(var i=2;i<sqrt_n;i++){
     if(n%i==0){
      return false;
     }
    }
 return true;
}
