/* eslint-disable no-unused-vars */
const cache: { key: string; fn: (...params: any[]) => void }[] = [];

export const subscribe = (key: string, fn: (...params: any[]) => void) => {
  const index = cache.findIndex((item) => item.key === key);

  if (index === -1) {
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

export const getCcScrollId = (id: string) => `cc-scroll-${id}`;
