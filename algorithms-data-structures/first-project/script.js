const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const regex = /[^a-zA-Z0-9]/g ;

checkButton.addEventListener("click", (e)=> {
    e.preventDefault();
    const userInput = document.getElementById("text-input").value;

    if (userInput.length === 0) {
        window.alert("Please input a value")
    } else {
        let msg = "";
        const palindrome = checkPalindrome(userInput.toLowerCase())
    
        if (palindrome) {
            msg = `${userInput} is a palindrome`
            // manejar el dom
        } else {
            msg = `${userInput} is not a palindrome`
        }
    
        resultText.innerText = msg;
        resultText.style.display = "block";
    }
})

function checkPalindrome(str){
    const normalWord = str.replace(regex, "");
    const reverseWord = normalWord.split('').reverse().join('');

    if (normalWord === reverseWord) {
        return true
    } else {
        return false
    }
}