(function() {
  var display = {
    current: 0,
    first: 0,
    second: 0,
    operand: '',
    result: '',
    firstValueAdded: false,
    secondValueAdded: false
  }

  var addTheListeners = function(){
    var calculator = document.querySelector('.calculator-body')
    calculator.addEventListener('click', function(event){
      if(event.target.matches('.calculator-button:not(#flip), #decimal')){
        displayValue(event.target.innerHTML)
      }else if(event.target.matches('#divide, #multiply, #subtract, #add')){
        getOperand(event.target.innerHTML)
      }else if(event.target.matches('#AC')){
        allClear()
      }else if(event.target.matches('#percentage')){
        percent()
      }else if(event.target.matches('#equals')){
        calculate()
      }else if(event.target.matches('#flip')){
        flipSign()
      }
    })
  }
  addTheListeners()

  var changeFontSize = function(){
    var maxLength = document.getElementsByClassName('calculator-valueDisplay')[0]
    var currentLength = document.getElementsByClassName('calculator-valueDisplay')[0].innerHTML
    if(currentLength.length >= maxLength.attributes.maxlength.value - 2){
      maxLength.style.fontSize = "30px"
    }else{
      maxLength.style.fontSize = "70px"
    }

  }
  var displayValue = function(num){
    if(display.secondValueAdded){
      display.firstValueAdded = false
      display.secondValueAdded = false
      display.first = display.result
      display.second = 0
      display.current[0].innerHTML = 0
    }
    changeFontSize()
    if(!display.firstValueAdded){
      display.current = document.getElementsByClassName('calculator-valueDisplay')
      if(display.current[0].innerHTML == 0){
        display.current[0].innerHTML = null
      }
      display.current[0].innerHTML += num
    }else{
      if(display.first == 0){
        display.first = display.current[0].innerHTML
        display.current[0].innerHTML = 0
      }
      display.second = document.getElementsByClassName('calculator-valueDisplay')
      if(display.current[0].innerHTML == 0){
        display.current[0].innerHTML = null
      }
      display.current[0].innerHTML += num
    }
  }

  var getOperand = function(symbol){
    if(display.operand !== ''){
      display.operand = ''
      display.first = 0
    }
    switch(symbol){
      case '+':
        calculate()
        display.operand = '+'
        break
      case '-':
        calculate()
        display.operand = '-'
        break
      case 'X':
        calculate()
        display.operand = '*'
        break
      case '*':
        calculate()
        display.operand = '*'
        break
      case '÷':
        calculate()
        display.operand = '/'
        break
      case '/':
        calculate()
        display.operand = '/'
        break
    }
    display.firstValueAdded = true
  }

  var calculate = function() {
    if(display.first !==0){
      display.second = display.current[0].innerHTML
      display.secondValueAdded = true
      if(display.second !== 0){
        switch(display.operand){
          case '+':
            display.result = parseFloat(display.first) + parseFloat(display.second)
            break
          case '-':
            display.result = parseFloat(display.first) - parseFloat(display.second)
            break
          case '*':
            display.result = parseFloat(display.first) * parseFloat(display.second)
            break
          case '/':
            display.result = parseFloat(display.first) / parseFloat(display.second)
            break
        }
        display.current[0].innerHTML = display.result
        changeFontSize()
      }
    }
  }

  var allClear = function() {
    display.current[0].innerHTML = 0
    display.current[0].style.fontSize = "70px"
    display.first = 0
    display.second = 0
    display.operand = ''
    display.result = ''
    display.firstValueAdded = false
    display.secondValueAdded = false
  }

  var flipSign = function() {
    var toFlip = display.current[0].innerHTML
    if(toFlip > 0){
      display.current[0].innerHTML = '-' + toFlip
    }else{
      var flip = display.current[0].innerHTML.indexOf('-')
      display.current[0].innerHTML = display.current[0].innerHTML.slice(flip+1)
    }
  }

  var percent = function() {
    var perc = display.current[0].innerHTML
    var removeIndex = perc.indexOf('%')
    var toBeCalculated = perc.replace(/\% ?/g, "")
    display.current[0].innerHTML = (toBeCalculated / 100).toFixed(2)
  }

  var keyStrokeActive = function(event) {
    event.attributes.matches('#AC')

    console.log(event.target.attributes)
  }

  var isOperand = function(sym){
    return sym == '+' || sym == '-' || sym == '/' || sym == '*'
  }
  var assignClass = function(eventKey){
    console.log(eventKey)
    switch(eventKey){
      case '0':
        document.querySelector('#zero').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#zero').classList
        .remove('calculator-button-active')}, 100)
        break
      case '1':
        document.querySelector('#one').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#one').classList
        .remove('calculator-button-active')}, 100)
        break
      case '2':
        document.querySelector('#two').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#two').classList
        .remove('calculator-button-active')}, 100)
        break
      case '3':
        document.querySelector('#three').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#three').classList
        .remove('calculator-button-active')}, 100)
        break
      case '4':
        document.querySelector('#four').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#four').classList
        .remove('calculator-button-active')}, 100)
        break
      case '5':
        document.querySelector('#five').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#five').classList
        .remove('calculator-button-active')}, 100)
        break
      case '6':
        document.querySelector('#six').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#six').classList
        .remove('calculator-button-active')}, 100)
        break
      case '7':
        document.querySelector('#seven').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#seven').classList
        .remove('calculator-button-active')}, 100)
        break
      case '8':
        document.querySelector('#eight').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#eight').classList
        .remove('calculator-button-active')}, 100)
        break
      case '9':
        document.querySelector('#nine').classList
        .add('calculator-button-active')
        setTimeout(function(){document.querySelector('#nine').classList
        .remove('calculator-button-active')}, 100)
        break
      case '+':
        document.querySelector('#add').classList
        .add('calculator-button-right-active')
        setTimeout(function(){document.querySelector('#add').classList
        .remove('calculator-button-right-active')}, 100)
        break
      case '-':
        document.querySelector('#subtract').classList
        .add('calculator-button-right-active')
        setTimeout(function(){document.querySelector('#subtract').classList
        .remove('calculator-button-right-active')}, 100)
        break
      case '*':
        document.querySelector('#multiply').classList
        .add('calculator-button-right-active')
        setTimeout(function(){document.querySelector('#multiply').classList
        .remove('calculator-button-right-active')}, 100)
        break
      case '/':
        document.querySelector('#divide').classList
        .add('calculator-button-right-active')
        setTimeout(function(){document.querySelector('#divide').classList
        .remove('calculator-button-right-active')}, 100)
        break
      case 'Clear':
        document.querySelector('#AC').classList
        .add('calculator-button-clear-active')
        setTimeout(function(){document.querySelector('#AC').classList
        .remove('calculator-button-clear-active')}, 100)
        break
      case '.':
        document.querySelector('#decimal').classList
        .add('calculator-button-bottom-right-active')
        setTimeout(function(){document.querySelector('#decimal').classList
        .remove('calculator-button-bottom-right-active')}, 100)
        break
      case '=':
        document.querySelector('#equals').classList
        .add('calculator-button-bottom-right-right-active')
        setTimeout(function(){document.querySelector('#equals').classList
        .remove('calculator-button-bottom-right-right-active')}, 100)
        break
    }
  }
  window.onkeydown = function(event){
    if(parseInt(event.key) || event.key == 0){
      assignClass(event.key)
      displayValue(event.key)
    }
    if(isOperand(event.key)) {
      assignClass(event.key)
      getOperand(event.key)
    }
    if(event.key == '=') {
      assignClass(event.key)
      calculate()
    }
    if(event.key == '.') {
      assignClass(event.key)
      displayValue('.')
    }
    if(event.key == 'Clear') {
      assignClass(event.key)
      allClear()
    }
  }
})()
