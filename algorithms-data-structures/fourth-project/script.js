let price = 20;
let values = [1,5,10,25,100,500,1000,2000,10000]; // values in cents
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const getCidInCent = ()=> { 
  const cidInCent = cid.map((arr)=>  [arr[0], Math.round(arr[1] * 100)]);
  return cidInCent
}

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

const updateUi = (msg, change, status) =>{
  cash.value= "";

  if (msg) {
    displayChangeDue.innerHTML = msg
  }

  if (change){
    displayChangeDue.innerHTML = `Status: ${status}`
    change.forEach((arr)=>{
      displayChangeDue.innerHTML += `<p><strong>${arr[0]}</strong>: $${arr[1]}</p>`
    })
  }

  // refresh change in draw
  cashDrawerDisplay.innerHTML = "";
  cid.forEach((arr)=>{
    cashDrawerDisplay.innerHTML += `<p><strong>${arr[0]}</strong>: ${arr[1]}</p>`
  })

  //set the price
  document.querySelector(".price").textContent = price
}
const totalCidInCent = () => {
  let sum = 0;
  cid.forEach((arr) => {
    sum += (arr[1] * 100)
  })

  return sum
}
const updateCid = (change)=> {
  change.forEach((arr)=>{
    let coinName = arr[0];
    let coinValue = arr[1];

    for (let i = 0; i < cid.length; i++){
      if (cid[i][0] === coinName){
        cid[i][1] -= coinValue
        //clear mistake for floating point
        cid[i][1] = Math.round(cid[i][1] * 100) / 100
      }
    }
  })
}


const cashLogic = ()=>{
  // aca manejamos todas la posibilidades con los cobros, despues se ve si usamos alguna funcion externa más
  priceInCent = Math.round(parseFloat(price) * 100)
  cashInCent = Math.round(parseFloat(cash.value) * 100)
  const control = totalCidInCent();

  if (priceInCent >  cashInCent){
    alert("Customer does not have enough money to purchase the item")
    cash.value= "";
    return
  }
  if (priceInCent === cashInCent){
    //restar lo correspondiente en cid
    let msg ="No change due - customer paid with exact cash";
    updateUi(msg)
    return
  }

  let cashDue = cashInCent - priceInCent; 
  let change = [];
  let cidInCent = getCidInCent()



  for (let i = cidInCent.length - 1; i >= 0; i--){

    let coinName = cidInCent[i][0];
    let coinTotal = cidInCent[i][1];
    let coinValue = values[i];

    let amount = 0;
    while (cashDue >= coinValue && coinTotal > 0){
      amount += coinValue;
      cashDue -= coinValue;
      coinTotal -= coinValue;
    }

    if (amount > 0){
      change.push([coinName, amount / 100])
    }
  }

  if (cashDue > 0){
    let msg = "Status: INSUFFICIENT_FUNDS"
    updateUi(msg)
    return
  } 

  if ((cashInCent - priceInCent) === control){
    updateCid(change);
    updateUi("", change, "CLOSED");
    return
  }

  updateCid(change);
  updateUi("", change, "OPEN");
}


purchaseBtn.addEventListener("click", cashLogic)

updateUi()

