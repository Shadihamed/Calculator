const acButton = document.querySelector('#clear')
const delButton = document.querySelector('#del')
const equalButton = document.querySelector('#equal')
const inputScreen = document.querySelector('#input')
const numButton = document.querySelectorAll('.number')
const operButton = document.querySelectorAll('.oper')

let disScreen=''
let result = null
let lastOperation=''


numButton.forEach((numbers) => {
  numbers.addEventListener('click', (e) => {
    disScreen += e.target.innerText;
    inputScreen.innerText = disScreen;

  });
})
operButton.forEach((operator) =>{
  operator.addEventListener('click', (e) =>{
    const operationName=e.target.innerText
    if(disScreen && lastOperation){
      mathOperation()
    } else {
    result = parseFloat(disScreen)
    }
    clearVar(operationName);
      lastOperation = operationName;
      console.log(result);
    })
  })
  function clearVar(name = "") {
    disScreen += name + "";
    inputScreen.innerText = disScreen;
    diScreen = "";
    disScreen.innerText = result;
  }

    delButton.addEventListener("click", () => {
      let lengthOfDisplay = disScreen.length
      disScreen=disScreen.slice(0,lengthOfDisplay-1)
      inputScreen.innerText=disScreen
    });




function mathOperation() {
if (lastOperation === "x") {
  result = parseFloat(result) * parseFloat(disScreen);
} else if (lastOperation === "+") {
  result = parseFloat(result) + parseFloat(disScreen);
} else if (lastOperation === "-") {
  result = parseFloat(result) - parseFloat(disScreen);
} else if (lastOperation === "÷") {
  result = parseFloat(result) / parseFloat(disScreen);
}
}

equalButton.addEventListener("click", () => {
  if (!disScreen) return;
  mathOperation();
  clearVar();
  inputScreen.innerText = result;
  disScreen = result;
  disScreen = "";
});

acButton.addEventListener("click", function() {
  inputScreen.innerText = "";
  diScreen=''
  result=''
  lastOperation=''
})





















/*
const acButton = document.querySelector('#clear')
const delButton = document.querySelector('#del')
const equalButton = document.querySelectorAll('#equal')
const inputScreen = document.querySelector('#input')
const decButton = document.querySelectorAll('#decimal')
const numButton = document.querySelectorAll('.number')
const operButton = document.querySelectorAll('.oper')

let disScreen=''
let result = null
let lastOperation=''


numButton.forEach((numbers) => {
  numbers.addEventListener('click', (e) => {
    disScreen += e.target.innerText;
    inputScreen.innerText = disScreen;

  });
})
operButton.forEach((operator) =>{
  operator.addEventListener('click', (e) =>{
    const operationName=e.target.innerText
    if(disScreen && lastOperation){
      mathOperation()
    } else {
    result = parseFloat(disScreen)
    }
    clearVar(operationName);
      lastOperation = operationName;
      console.log(result);
    })
  })
  function clearVar(name = "") {
    disScreen += name + "";
    inputScreen.innerText = disScreen;
    diScreen = "";
    disScreen.innerText = result;
  }


  decButton.forEach((decimal) =>{
    decimal.addEventListener('click', (e) =>{
      disScreen += e.target.innerText
      inputScreen.innerText=disScreen
    })
    })


    delButton.addEventListener("click", () => {
      let lengthOfDisplay = disScreen.length
      disScreen=disScreen.slice(0,lengthOfDisplay-1)
      inputScreen.innerText=disScreen
    });




function mathOperation() {
if (lastOperation === "X") {
  result = parseFloat(result) * parseFloat(disScreen);
} else if (lastOperation === "+") {
  result = parseFloat(result) + parseFloat(disScreen);
} else if (lastOperation === "-") {
  result = parseFloat(result) - parseFloat(disScreen);
} else if (lastOperation === "÷") {
  result = parseFloat(result) / parseFloat(disScreen);
}
}

equalButton.addEventListener("click", () => {
  if (!disScreen) return;
  mathOperation();
  clearVar();
  inputScreen.innerText = result;
  disScreen = result;
  disScreen = "";
});

acButton.addEventListener("click", function() {
  inputScreen.innerText = "";
  diScreen=''
  result=''
  lastOperation=''
})



/*var diScreen='0'
let lastOperation=''
result=null

var updateDisplayVal = (clickObj)=> {
  var btnText = clickObj.target.innerText
  if(diScreen === '0')
  diScreen=''
  diScreen +=btnText
  inputScreen.innerText=diScreen
}


for (let i = 0; i < numButton.length; i++) {
  numButton[i].addEventListener('click',(updateDisplayVal))
}

for (let i = 0; i < operButton.length; i++) {
  operButton[i].addEventListener('click',(updateDisplayVal))
}
acButton.addEventListener("click", function() {
  inputScreen.innerText = "0";
  diScreen="0"
})

decButton.addEventListener('click',function(){
  if (!diScreen.includes('.'))
  diScreen+='.'
  inputScreen.innerText=diScreen
})

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(diScreen);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(diScreen);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(diScreen);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(diScreen);
  }
}


operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);





    const acButton = document.querySelector('#clear')
    const delButton = document.querySelector('#del')
    var equalButton = document.querySelector('#equal')
    const inputScreen = document.querySelector('#input')
    const decButton = document.querySelectorAll('#decimal')
    const numButton = document.querySelectorAll('.number')
    const operButton = document.querySelectorAll('.oper')
    disScreen=''

    for (let i = 0; i < numButton.length; i++) {
      numButton[i].addEventListener('click',(updateDisplayVal))
    }

    for (let i = 0; i < operButton.length; i++) {
      operButton[i].addEventListener('click',(updateDisplayVal))
    }
    function updateDisplayVal(e){
      disScreen += e.target.innerText;
      inputScreen.innerText = disScreen;
    }

    equalButton.addEventListener("click",calc)

    function calc(){
      if (inputScreen.value === "") {
        alert("Enter a Math Problem to continue");
      } else {
      let solution=eval(inputScreen.value)
      inputScreen.value=solution
    }
    }


      decButton.forEach((decimal) =>{
        decimal.addEventListener('click', (e) =>{
          disScreen += e.target.innerText
          inputScreen.innerText=disScreen
        })
        })


        delButton.addEventListener("click", () => {
          let lengthOfDisplay = disScreen.length
          disScreen=disScreen.slice(0,lengthOfDisplay-1)
          inputScreen.innerText=disScreen
        })



    acButton.addEventListener("click", function() {
    inputScreen.innerText = "";
    disScreen=''
    })
















  });
});*/
