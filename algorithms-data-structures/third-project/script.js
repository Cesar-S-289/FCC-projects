const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn")
const checkBtn = document.getElementById("check-btn")
const resultsDiv = document.getElementById("results-div");

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

checkBtn.addEventListener("click", ()=>{
    const formatInput = userInput.value
    if (formatInput.length === 0 ){
        alert("Please provide a phone number")
        return
    }
    if (phoneRegex.test(formatInput)){
        resultsDiv.innerHTML += `
        <span class="valid">Valid US number: ${formatInput}</span>
        `
    } else {
        resultsDiv.innerHTML += `
        <span class="invalid">Invalid US number: ${formatInput}</span>
        `
    }

    userInput.value = "" 
})



clearBtn.addEventListener("click", ()=>{
    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
})