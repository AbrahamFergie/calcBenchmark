(function() {
  function Calculator(domElement) {
    this.domElement = domElement,
    this.displayNode = this.domElement.querySelector('.calculator-valueDisplay')
    this.first = 0,
    this.second = 0,
    this.operand = '',
    this.result = '',
    this.firstValueAdded = false,
    this.secondValueAdded = false
    this.addTheListeners()
  }

  var buttonKeys = {
    0:'zero', 1:'one', 2:'two', 3:'three',
    4:'four', 5:'five', 6:'six', 7:'seven',
    8:'eight', 9:'nine', 'Clear':'AC', '/':'divide',
    '*':'multiply', '+':'add', '-':'subtract', '=':'equals'
  }

  Calculator.prototype.addTheListeners = function() {
    var calculator = this
    var currentCalc = this.domElement
    currentCalc.addEventListener('click', function(event){
      if(event.target.matches('.calculator-button:not(flip):not(percentage), decimal')){
        calculator.displayValue(event.target.innerHTML)
      }else if(event.target.matches('divide, multiply, subtract, add')){
        calculator.getOperand(event.target.innerHTML)
      }else if(event.target.matches('AC')){
        calculator.allClear()
      }else if(event.target.matches('percentage')){
        calculator.percent()
      }else if(event.target.matches('equals')){
        calculator.calculate()
      }else if(event.target.matches('flip')){
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
    var maxLength = this.displayNode
    var currentLength = this.displayNode.innerHTML
    if(currentLength.length >= maxLength.attributes.maxlength.value - 4){
      maxLength.style.fontSize = "20px"
      maxLength.style.fontWeight = "lighter"
      if(currentLength.length >= 23){ '\n' }
    }else{
      maxLength.style.fontSize = "50px"
      maxLength.style.fontWeight = "lighter"
    }
  }
  Calculator.prototype.displayValue = function(num){
    var calculator = this
    var display = calculator.displayNode.innerText
    if(calculator.secondValueAdded){
      calculator.firstValueAdded = false
      calculator.secondValueAdded = false
      calculator.first = calculator.result
      calculator.second = 0
      display = 0
    }
    calculator.changeFontSize()
    if(!calculator.firstValueAdded){
      if(display == 0){
        display = ''
      }
      display += num
    }else{
      if(calculator.first == 0){
        calculator.first = display
        display = 0
      }
      if(display == 0){
        display = ''
      }
      display += num
    }
    return calculator.displayNode.innerHTML = display
  }

  Calculator.prototype.getOperand = function(symbol){
    var calculator = this
    if(calculator.operand !== ''){
      calculator.operand = ''
      calculator.first = 0
    }
    switch(symbol){
      case '+':
        calculator.operand = '+'
        break
      case '-':
        calculator.operand = '-'
        break
      case 'X':
        calculator.operand = '*'
        break
      case '*':
        calculator.operand = '*'
        break
      case '÷':
        calculator.operand = '/'
        break
      case '/':
        calculator.operand = '/'
        break
    }
    calculator.firstValueAdded = true
  }

  Calculator.prototype.calculate = function() {
    var calculator = this
    if(calculator.first !==0){
      calculator.second = calculator.displayNode.innerHTML
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
        calculator.displayNode.innerHTML = calculator.result
        calculator.changeFontSize()
      }
    }
  }

  Calculator.prototype.allClear = function() {
    var calculator = this
    calculator.displayNode.innerHTML = 0
    calculator.displayNode.style.fontSize = "50px"
    calculator.displayNode.style.fontWeight = "lighter"
    calculator.first = 0
    calculator.second = 0
    calculator.operand = ''
    calculator.result = ''
    calculator.firstValueAdded = false
    calculator.secondValueAdded = false
  }

  Calculator.prototype.flipSign = function() {
    var calculator = this.displayNode.innerText
    var flip = calculator.displayNode.innerText.indexOf('-')
    if(toFlip > 0){
      calculator = '-' + toFlip
    }else{
      calculator = calculator.slice(flip+1)
    }
  }

  Calculator.prototype.percent = function() {
    var calculator = this
    var perc = calculator.displayNode.innerHTML
    var removeIndex = perc.indexOf('%')
    var toBeCalculated = perc.replace(/\% ?/g, "")
    perc = (toBeCalculated / 100).toFixed(2)
    return calculator.displayNode.innerHTML = perc

  }

  Calculator.prototype.isOperand = function(sym){
    return ['+', '-', '/', '*'].includes(sym)
  }
  Calculator.prototype.assignClass = function(eventKey){
    var calculator = this.domElement
    var currentButton = buttonKeys[eventKey]
    var button = calculator.querySelector(`[data-value="${currentButton}"]`)
    console.log(button.classList)
    switch(eventKey){
      case '0':
        button.classList
          .add('calculator-button-bottom-left-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-bottom-left-active')}, 100)
        break
      case '1':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '2':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '3':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '4':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '5':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '6':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '7':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '8':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '9':
        button.classList
          .add('calculator-button-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-active')}, 100)
        break
      case '+':
        button.classList
          .add('calculator-button-right-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-right-active')}, 100)
        break
      case '-':
        button.classList
          .add('calculator-button-right-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-right-active')}, 100)
        break
      case '*':
        button.classList
          .add('calculator-button-right-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-right-active')}, 100)
        break
      case '/':
        button.classList
          .add('calculator-button-right-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-right-active')}, 100)
        break
      case 'Clear':
        button.classList
          .add('calculator-button-clear-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-clear-active')}, 100)
        break
      case '.':
        button.classList
          .add('calculator-button-bottom-right-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-bottom-right-active')}, 100)
        break
      case '=':
        button.classList
          .add('calculator-button-bottom-right-right-active')
        setTimeout(function(){
          button.classList
            .remove('calculator-button-bottom-right-right-active')}, 100)
        break
    }
  }

  document.querySelectorAll('.calculator-body').forEach(function(element){
    var kal = new Calculator(element)
  })
})()
