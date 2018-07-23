import _ from 'lodash';
import './style.css';
import mypic_data from './test.jpg';
import Data from './data.xml';


function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var mypic = new Image();
    mypic.src = mypic_data;
    element.appendChild(mypic);
    
    console.log(Data);
    
    return element;
}

document.body.appendChild(component());