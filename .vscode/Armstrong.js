function isArmstrong(numbers){
    let numStr = numbers.toString();
    let numDigit = numStr.length; // ✅ Corrected here
    let sum = 0;

    for(let i = 0; i < numDigit; i++){
        let digit = parseInt(numStr[i]);
        sum += Math.pow(digit, numDigit);
    }

    if(sum === numbers){
        console.log(numbers + " is an armstrong number"); 
    } else {
        console.log(numbers + " is not an armstrong number");
    }
}

isArmstrong(153);   
isArmstrong(123);   