Build a Palindrome Checker
A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

Objective: Build an app that is functionally similar to https://palindrome-checker.freecodecamp.rocks.

User Stories:

You should have an input element with an id of "text-input".
You should have a button element with an id of "check-btn".
You should have a div, span or p element with an id of "result".
When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text Please input a value.
When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text A is a palindrome.
When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text eye is a palindrome.
When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text _eye is a palindrome.
When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text race car is a palindrome.
When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text not a palindrome is not a palindrome.
When the #text-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text A man, a plan, a canal. Panama is a palindrome.
When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text never odd or even is a palindrome.
When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text nope is not a palindrome.
When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text almostomla is not a palindrome.
When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text My age is 0, 0 si ega ym. is a palindrome.
When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text 1 eye for of 1 eye. is not a palindrome.
When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text 0_0 (: /-\ :) 0-0 is a palindrome.
When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text five|\_/|four is not a palindrome.
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

Run the Tests (Ctrl + Enter)
Save your Code
Revert to Saved Code
Get Help
Tests
Waiting:1. You should have an input element with an id of "text-input".
Waiting:2. You should have a button element with an id of "check-btn".
Waiting:3. You should have a div, span, or p element with an id of "result".
Waiting:4. When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text Please input a value.
Waiting:5. When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text A is a palindrome.
Waiting:6. When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text eye is a palindrome.
Waiting:7. When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text _eye is a palindrome.
Waiting:8. When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text race car is a palindrome.
Waiting:9. When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text not a palindrome is not a palindrome.
Waiting:10. When the #text-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text A man, a plan, a canal. Panama is a palindrome.
Waiting:11. When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text never odd or even is a palindrome.
Waiting:12. When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text nope is not a palindrome.
Waiting:13. When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text almostomla is not a palindrome.
Waiting:14. When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text My age is 0, 0 si ega ym. is a palindrome.
Waiting:15. When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text 1 eye for of 1 eye. is not a palindrome.
Waiting:16. When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text 0_0 (: /-\ :) 0-0 is a palindrome.
Waiting:17. When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text five|\_/|four is not a palindrome.
Waiting:18. When the #text-input element contains an alphanumeric palindrome, the #result element should correctly identify it as a palindrome.
Waiting:19. When the #text-input element contains a random sequence of alphanumeric characters that is not a palindrome, the #result element should say it is not a palindrome.