const addEventListeners = require('./addEventListeners');
const setAttributes = require('./setAttributes');
const setClassName = require('./setClassName');

const createElement = props => {
  const { tag = 'div' } = props;
  const element = document.createElement(tag);

  setClassName(element, props);
  setAttributes(element, props);
  addEventListeners(element, props);

  return element;
};

module.exports = createElement;
