//Get the string from the page 
//controller function
function getValue () {
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    let returnObj = checkForPalindrome(userString);

    displayString(returnObj);
}

//process and check the string for a palindrome
//logic function 
function checkForPalindrome (userString) {
    //convert string to lower case
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString =userString.replace(regex, "");  

    let revString = [];

    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    let returnObj = {};

    //compare user string to reverse string
    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome!"
    }
    else {
        returnObj.msg = "Sorry! You did not enter a palindrome"
    }

    returnObj.reversed = revString;

    return returnObj;
}

//Display the results to the user
//View Function
function displayString(returnObj) {
    
    //write to the page
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}