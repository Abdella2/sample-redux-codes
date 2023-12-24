// import showMessage from '../function-composition';
// import showMessage from '../functional/curring';
// require('../update-object');
// require('../immutable');
// require('../functional/immer');
// require('./publication-dispatch');
require('./dispatch');
// require('./customerDispatch');

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack!!!!!'], ' ');
  // element.innerHTML = showMessage();

  return element;
}

document.body.appendChild(component());
