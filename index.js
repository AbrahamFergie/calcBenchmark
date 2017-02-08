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

  var displayValue = function(num){
    console.log('here');
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
  var addEventListeners = function(){
    document.querySelectorAll('calculator-button:not(calculator-button-right):not(calculator-button-bottom-right):not(calculator-button-bottom-right-right)')
      .forEach(function(element) {
        element.addEventListener('click', function(event) {
          console.log(event.target.innerHTML)
          displayValue(event.target.innerHTML)
        })
      })
    document.querySelectorAll('calculator-button-right):not(calculator-button-bottom-right):not(calculator-button-bottom-right-right)')
      .forEach(function(element) {
        element.addEventListener('click', function(event) {
          displayValue(event.target.innerHTML)
        })
      })
  }
  addEventListeners()
  var changeFontSize = function(){
    var maxLength = document.getElementsByClassName('calculator-valueDisplay')[0]
    var currentLength = document.getElementsByClassName('calculator-valueDisplay')[0].innerHTML
    if(currentLength.length > maxLength.attributes.maxlength.value){
      maxLength.style.fontSize = - 10%
      // maxLength.attributes.maxlength.value + 20
    }
    console.log(currentLength.length);
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
      case '*':
        calculate()
        display.operand = '*'
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
    display.first = 0
    display.second = 0
    display.operand = ''
    display.result = ''
    display.firstValueAdded = false
    display.secondValueAdded = false
  }

  var flipSign = function() {
    if(display.current[0].innerHTML > 0){
      Math.abs(display.current[0].innerHTML)
      display.current[0].innerHTML = '-' + display.current[0].innerHTML
    }else{
      Math.abs(display.current[0].innerHTML)
      var flip = display.current[0].innerHTML.indexOf('-')
      display.current[0].innerHTML = display.current[0].innerHTML.slice(flip+1)
    }
  }

  var percent = function() {
    var perc = display.current[0].innerHTML
    display.current[0].innerHTML = (perc / 100).toFixed(2)
  }
})()
