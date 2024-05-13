<img src="/img/Logo.svg" alt="logo" width="25%" height="auto">

# Top Spot - A Coding Challenge

## Table of Contents

* [Overview](#overview)
* [Objectives](#objectives) 
* [Design](#design)
* [Technologies Used](#technologies-used)
* [Lessons Learned](#lessons-learned)
* [Recommendations](#recommendations)
* [Useful Resources](#useful-resources)

## Overview

Top Spot is a palindrome. A palindrome is a word or phrase that reads the same backward as forward. With this program you can determine if a word or phrase entered is a palindrome.

## Objectives

* CSS and Bootstrap Layout
* JavaScript Fundamentals
* JavaScript Loops
* JavaScript Functions
* JavaScript DOM Manipulation
* JavaScript If/Then/Else
* JavaScript Boolean Logic

## Design

Desktop Screenshot:

<img src="/img/desktop-screenshot.png" alt="desktop" width="75%" height="auto">

Mobile Screenshot:

<img src="/img/mobile-screenshot.png" alt="mobile" width="25%" height="auto">

## Technologies Used

* HTML
* CSS
* Javascript
* Bootstrap

## Lessons Learned

1. Use JavaScript regular expressions for searching patterns that can be used in text search and text replace operations. This eliminated need for multiple lines of code to search and replace characters.  

    ```js
    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString =userString.replace(regex, ""); 
    ```

2. Use JavaScript objects as a container to hold multiple properties. This allows for easier passing of information between functions. 

    ```js
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
    ``` 

## Recommendations

1. Show previously entered strings along with their statuses in a running history/list.  

2. Allow the user to enter multiple different strings at once and check them simultaneously to see if they are palindromes.


## Useful Resources

- [W3 Schools - JavaScript Regular Expressions](https://www.w3schools.com/js/js_regexp.asp)
- [W3 Schools - JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)
- [MDN Web Docs - Working With Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)