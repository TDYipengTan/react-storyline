export const assign = (target: object, source: object = {}) => {
  return Object.assign({}, target, source);
};

export const assignArray = (target: any[], source: any[] = []) => {
  return [...target, ...source];
};
