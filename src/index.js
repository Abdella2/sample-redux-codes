// import showMessage from '../function-composition';
import showMessage from '../curring';
// require('../update-object');
require('../immutable');

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack!!!!!'], ' ');
  element.innerHTML = showMessage();

  return element;
}

document.body.appendChild(component());
