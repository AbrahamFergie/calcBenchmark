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

  var isOperand = function(sym){
    return sym == '+' || sym == '-' || sym == '/' || sym == '*'
  }
  window.onkeydown = function(event){
    if(parseInt(event.key) || event.key == 0){ displayValue(event.key) }
    console.log(event.key)
    if(isOperand(event.key)) { getOperand(event.key) }
    if(event.key == '=') { calculate() }
    if(event.key == '.') { displayValue('.') }
  }
})()
