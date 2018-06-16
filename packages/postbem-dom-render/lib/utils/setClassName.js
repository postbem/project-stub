const createClassList = require('./createClassList');

const setClassName = (element, props) => {
  const classList = createClassList(props);

  if (classList.length !== 0) {
    element.className = classList.join(' ');
  }
};

module.exports = setClassName;
