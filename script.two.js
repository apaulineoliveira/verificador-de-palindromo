function palindrome(str) {
    let re = /[\W_]/g;   
    let lowRegStr = str.toLowerCase().replace(re, '');  
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr; 
  }
  
  console.log(palindrome("ovo, haha, roupa. Camisa"));