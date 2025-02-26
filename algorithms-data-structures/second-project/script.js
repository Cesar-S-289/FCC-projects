const numberInput = document.getElementById("number");
const converterBtn = document.getElementById("convert-btn");
const output = document.getElementById("output")
const container = document.querySelector(".container-output")


const unidades = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
const decenas = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
const centenas = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
const milesimas= ["","M","MM","MMM"];


converterBtn.addEventListener("click", ()=>{
    let numeroEntrada =  numberInput.value;
    let roman = "";

    if(parseInt(numeroEntrada) > 0 && parseInt(numeroEntrada) < 4000){
        switch (numeroEntrada.length) {
            case 1:
                roman = unidades[numeroEntrada[0]];
                container.classList.remove("invalid-inp")
                break;
            case 2:
                roman = decenas[numeroEntrada[0]] + unidades[numeroEntrada[1]];
                container.classList.remove("invalid-inp")
                break;
            case 3:
                roman = centenas[numeroEntrada[0]] + decenas[numeroEntrada[1]] + unidades[numeroEntrada[2]];
                container.classList.remove("invalid-inp")
                break;
            case 4:
                roman = milesimas[numeroEntrada[0]] + centenas[numeroEntrada[1]] + decenas[numeroEntrada[2]] + unidades[numeroEntrada[3]];
                container.classList.remove("invalid-inp")
                break;                
        }

        output.innerText = roman
    }else if(parseInt(numeroEntrada) < 1){
        roman = "Please enter a number greater than or equal to 1"
        container.classList.add("invalid-inp")
        output.innerText = roman
    }else if(parseInt(numeroEntrada) >= 4000 ){
        roman = "Please enter a number less than or equal to 3999"
        container.classList.add("invalid-inp")
        output.innerText = roman
    } else {
        roman = "Please enter a valid number"
        container.classList.add("invalid-inp")
        output.innerText = roman
    }
})
