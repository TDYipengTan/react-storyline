export const assign = (target = {}, source = {}, defaultValue = {}) => {
  return Object.assign({}, target, source || defaultValue);
};
