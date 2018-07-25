import _ from 'lodash'
import './style.css'
import mypic_data from './test.jpg'
import Data from './data.xml'
import printMe from './print.js'
import { cube } from './math.js'

function component () {
  //   var element = document.createElement('div')
  var element = document.createElement('pre')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  element.innerHTML += [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  element.classList.add('hello')
  var mypic = new Image()
  mypic.src = mypic_data
  element.appendChild(mypic)

  console.log(Data)

  var btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())

// enable Hot Module Replacement
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}
