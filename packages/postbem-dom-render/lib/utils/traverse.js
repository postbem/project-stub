const traverse = (target, cb, parent) => {
  if (target instanceof Array) {
    target = target.map(node => traverse(node, cb, parent));
  } else {
    const newTarget = cb(target, parent);

    if (
      target !== null &&
      typeof target === 'object' &&
      typeof target.content !== 'undefined'
    ) {
      traverse(target.content, cb, newTarget);
    }

    target = newTarget;
  }

  return target;
};

module.exports = traverse;
