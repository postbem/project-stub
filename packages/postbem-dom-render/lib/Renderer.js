const traverse = require('./utils/traverse');
const createElement = require('./utils/createElement');

class Renderer {
  constructor (input, options = {}) {
    this.input = input;
    this.options = options;
  }

  render () {
    const result = traverse(this.input.content[0], this.renderNode.bind(this));

    return result;
  }

  renderNode (node, parent) {
    let output;

    node = this.normalize(node);

    if (node !== null && typeof node === 'object') {
      if (typeof node.render === 'function') {
        output = node.render();
      } else {
        output = createElement(node);
      }
    } else {
      output = node;
    }

    if (typeof parent !== 'undefined') {
      parent.append(output);
    }

    return output;
  }

  normalize (node) {
    if (typeof node === 'object' && node !== null) {
      if (!node.content) {
        delete node.content;
      }

      delete node.parent;
    }

    if (node === undefined) {
      return null;
    }

    return node;
  };
}

module.exports = Renderer;
