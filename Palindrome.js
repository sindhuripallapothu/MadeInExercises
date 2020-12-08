var isPalindrome = function(input) {
    var re = /[^A-Za-z0-9]/g;
    input = input.toLowerCase().replace(re, '');

    // Method 1 
    var rev = input.split("").reverse().join("")
    if( rev === input) console.log("PALINDROME")
    else console.log("NOT PALINDROME")

    //Method2
    let len = input.length
    for (var i = 0; i < len/2; i++) {
        if (input[i] !== input[len - 1 - i]) {
            console.log("NOT PALINDROME")
        }
      }
      console.log("PALINDROME")

}

isPalindrome("Madam, I'm Adam")
