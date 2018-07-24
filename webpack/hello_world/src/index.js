import _ from 'lodash';
import './style.css';
import mypic_data from './test.jpg';
import Data from './data.xml';
import printMe from './print.js';


function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var mypic = new Image();
    mypic.src = mypic_data;
    element.appendChild(mypic);

    console.log(Data);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());