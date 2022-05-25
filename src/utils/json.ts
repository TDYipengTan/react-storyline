export const parseJSON = (o: string, defaultValue?: any) => {
  try {
    return JSON.parse(o);
  } catch (error) {
    return defaultValue || null;
  }
};

export const stringifyJSON = (o: any) => {
  return JSON.stringify(o);
};
