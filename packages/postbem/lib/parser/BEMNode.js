const BEMTree = require('./BEMTree');
const isExist = require('./utils/isExist');
const isTagVoidElement = require('./utils/isTagVoidElement');

class BEMNode extends BEMTree {
  normalize (props, object) {
    const target = Object.assign({}, props, object);
    const defaultProps = {
      block: undefined,
      elem: undefined,
      def: undefined,
      tag: 'div',
      single: false,
      attrs: undefined,
      render: undefined,
      content: undefined,
      mix: undefined,
      mods: undefined,
      elemMods: undefined,
      className: undefined,
      parent: undefined,
      options: {}
    };
    const normalizeProps = {
      block: isExist(target, ['elem', 'parent']) ? target.parent.block : undefined,
      single: isTagVoidElement(target.tag)
    };

    return Object.assign(defaultProps, normalizeProps, target);
  }
}

module.exports = BEMNode;
