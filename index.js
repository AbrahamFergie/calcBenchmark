(function() {
  function Calculator(domElement) {
    this.current = domElement,
    this.display = this.current.querySelector('.calculator-valueDisplay')
    this.first = 0,
    this.second = 0,
    this.operand = '',
    this.result = '',
    this.firstValueAdded = false,
    this.secondValueAdded = false
  }

  Calculator.prototype.addTheListeners = function() {
    var calculator = this
    var currentCalc = this.current
    currentCalc.addEventListener('click', function(event){
      if(event.target.matches('.calculator-button:not(#flip):not(#percentage), #decimal')){
        calculator.displayValue(event.target.innerHTML)
      }else if(event.target.matches('#divide, #multiply, #subtract, #add')){
        calculator.getOperand(event.target.innerHTML)
      }else if(event.target.matches('#AC')){
        calculator.allClear()
      }else if(event.target.matches('#percentage')){
        calculator.percent()
      }else if(event.target.matches('#equals')){
        calculator.calculate()
      }else if(event.target.matches('#flip')){
        calculator.flipSign()
      }
    })
    currentCalc.onkeydown = function(event){
      if(parseInt(event.key) || event.key == 0){
        calculator.assignClass(event.key)
        calculator.displayValue(event.key)
      }
      if(calculator.isOperand(event.key)) {
        calculator.assignClass(event.key)
        calculator.getOperand(event.key)
      }
      if(event.key == '=') {
        calculator.assignClass(event.key)
        calculator.calculate()
      }
      if(event.key == '.') {
        calculator.assignClass(event.key)
        calculator.displayValue('.')
      }
      if(event.key == 'Clear') {
        calculator.assignClass(event.key)
        calculator.allClear()
      }
    }
  }

  Calculator.prototype.changeFontSize = function(){
    var calculator = this
    var maxLength = calculator.display
    var currentLength = calculator.display.innerHTML
    if(currentLength.length >= maxLength.attributes.maxlength.value - 2){
      maxLength.style.fontSize = "30px"
    }else{
      maxLength.style.fontSize = "70px"
    }
  }
  Calculator.prototype.displayValue = function(num){
    var calculator = this
    if(calculator.secondValueAdded){
      calculator.firstValueAdded = false
      calculator.secondValueAdded = false
      calculator.first = calculator.result
      calculator.second = 0
      calculator.display.innerHTML = 0
    }
    calculator.changeFontSize()
    if(!calculator.firstValueAdded){
      if(calculator.display.innerHTML == 0){
        calculator.display.innerHTML = null
      }
      calculator.display.innerHTML += num
    }else{
      if(calculator.first == 0){
        calculator.first = calculator.display.innerHTML
        calculator.display.innerHTML = 0
      }
      if(calculator.display.innerHTML == 0){
        calculator.display.innerHTML = null
      }
      calculator.display.innerHTML += num
    }
  }

  Calculator.prototype.getOperand = function(symbol){
    var calculator = this
    if(calculator.operand !== ''){
      calculator.operand = ''
      calculator.first = 0
    }
    switch(symbol){
      case '+':
        calculator.calculate()
        calculator.operand = '+'
        break
      case '-':
        calculator.calculate()
        calculator.operand = '-'
        break
      case 'X':
        calculator.calculate()
        calculator.operand = '*'
        break
      case '*':
        calculator.calculate()
        calculator.operand = '*'
        break
      case '÷':
        calculator.calculate()
        calculator.operand = '/'
        break
      case '/':
        calculator.calculate()
        calculator.operand = '/'
        break
    }
    calculator.firstValueAdded = true
  }

  Calculator.prototype.calculate = function() {
    var calculator = this
    if(calculator.first !==0){
      calculator.second = calculator.display.innerHTML
      calculator.secondValueAdded = true
      if(calculator.second !== 0){
        switch(calculator.operand){
          case '+':
            calculator.result = parseFloat(calculator.first) + parseFloat(calculator.second)
            break
          case '-':
            calculator.result = parseFloat(calculator.first) - parseFloat(calculator.second)
            break
          case '*':
            calculator.result = parseFloat(calculator.first) * parseFloat(calculator.second)
            break
          case '/':
            calculator.result = parseFloat(calculator.first) / parseFloat(calculator.second)
            break
        }
        calculator.display.innerHTML = calculator.result
        calculator.changeFontSize()
      }
    }
  }

  Calculator.prototype.allClear = function() {
    var calculator = this
    calculator.display.innerHTML = 0
    calculator.display.style.fontSize = "70px"
    calculator.first = 0
    calculator.second = 0
    calculator.operand = ''
    calculator.result = ''
    calculator.firstValueAdded = false
    calculator.secondValueAdded = false
  }

  Calculator.prototype.flipSign = function() {
    var calculator = this
    var toFlip = calculator.display.innerHTML
    if(toFlip > 0){
      calculator.display.innerHTML = '-' + toFlip
    }else{
      var flip = calculator.display.innerHTML.indexOf('-')
      calculator.display.innerHTML = calculator.display.innerHTML.slice(flip+1)
    }
  }

  Calculator.prototype.percent = function() {
    var calculator = this
    var perc = calculator.display.innerHTML
    var removeIndex = perc.indexOf('%')
    var toBeCalculated = perc.replace(/\% ?/g, "")
    calculator.display.innerHTML = (toBeCalculated / 100).toFixed(2)
  }

  Calculator.prototype.isOperand = function(sym){
    return sym == '+' || sym == '-' || sym == '/' || sym == '*'
  }
  Calculator.prototype.assignClass = function(eventKey){
    var calculator = this.current
    switch(eventKey){
      case '0':
        calculator.querySelector('#zero').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#zero').classList
        .remove('calculator-button-active')}, 100)
        break
      case '1':
        calculator.querySelector('#one').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#one').classList
        .remove('calculator-button-active')}, 100)
        break
      case '2':
        calculator.querySelector('#two').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#two').classList
        .remove('calculator-button-active')}, 100)
        break
      case '3':
        calculator.querySelector('#three').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#three').classList
        .remove('calculator-button-active')}, 100)
        break
      case '4':
        calculator.querySelector('#four').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#four').classList
        .remove('calculator-button-active')}, 100)
        break
      case '5':
        calculator.querySelector('#five').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#five').classList
        .remove('calculator-button-active')}, 100)
        break
      case '6':
        calculator.querySelector('#six').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#six').classList
        .remove('calculator-button-active')}, 100)
        break
      case '7':
        calculator.querySelector('#seven').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#seven').classList
        .remove('calculator-button-active')}, 100)
        break
      case '8':
        calculator.querySelector('#eight').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#eight').classList
        .remove('calculator-button-active')}, 100)
        break
      case '9':
        calculator.querySelector('#nine').classList
        .add('calculator-button-active')
        setTimeout(function(){calculator.querySelector('#nine').classList
        .remove('calculator-button-active')}, 100)
        break
      case '+':
        calculator.querySelector('#add').classList
        .add('calculator-button-right-active')
        setTimeout(function(){calculator.querySelector('#add').classList
        .remove('calculator-button-right-active')}, 100)
        break
      case '-':
        calculator.querySelector('#subtract').classList
        .add('calculator-button-right-active')
        setTimeout(function(){calculator.querySelector('#subtract').classList
        .remove('calculator-button-right-active')}, 100)
        break
      case '*':
        calculator.querySelector('#multiply').classList
        .add('calculator-button-right-active')
        setTimeout(function(){calculator.querySelector('#multiply').classList
        .remove('calculator-button-right-active')}, 100)
        break
      case '/':
        calculator.querySelector('#divide').classList
        .add('calculator-button-right-active')
        setTimeout(function(){calculator.querySelector('#divide').classList
        .remove('calculator-button-right-active')}, 100)
        break
      case 'Clear':
        calculator.querySelector('#AC').classList
        .add('calculator-button-clear-active')
        setTimeout(function(){calculator.querySelector('#AC').classList
        .remove('calculator-button-clear-active')}, 100)
        break
      case '.':
        calculator.querySelector('#decimal').classList
        .add('calculator-button-bottom-right-active')
        setTimeout(function(){calculator.querySelector('#decimal').classList
        .remove('calculator-button-bottom-right-active')}, 100)
        break
      case '=':
        calculator.querySelector('#equals').classList
        .add('calculator-button-bottom-right-right-active')
        setTimeout(function(){calculator.querySelector('#equals').classList
        .remove('calculator-button-bottom-right-right-active')}, 100)
        break
    }
  }

  document.querySelectorAll('.calculator-body').forEach(function(element){
    var kal = new Calculator(element)
    kal.addTheListeners()
  })
})()
