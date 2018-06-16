const addEventListeners = (element, props) => {
  const { onChange, onClick, onInput, onKeydown } = props;

  if (onChange) {
    element.onchange = onChange;
  }

  if (onClick) {
    element.onclick = onClick;
  }

  if (onInput) {
    element.oninput = onInput;
  }

  if (onKeydown) {
    element.onkeydown = onKeydown;
  }
};

module.exports = addEventListeners;
