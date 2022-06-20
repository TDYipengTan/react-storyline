/* eslint-disable no-unused-vars */
const cache: { key: string; fn: (...params: any[]) => void }[] = [];

export const subscribe = (key: string, fn: (...params: any[]) => void) => {
  let bool = false;
  cache.forEach((item) => {
    if (item.key === key) {
      bool = true;
    }
  });
  if (!bool) {
    cache.push({
      key,
      fn,
    });
  }
};

export const fire = (key: string, ...params: any[]) => {
  const item = cache.find((cacheItem) => cacheItem.key === key);
  if (item) {
    item.fn(...params);
  }
};

export default {
  subscribe,
  fire,
};
