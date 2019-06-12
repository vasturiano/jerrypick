const pluck = (obj, keys) =>
  Object.assign({}, ...keys.map(key => ({ [key]: obj[key] })));

const omit = (obj, keys) => {
  const keySet = new Set(keys);

  return Object.assign(
    {},
    ...Object.entries(obj)
      .filter(([key]) => !keySet.has(key))
      .map(([key, val]) => ({ [key]: val }))
  );
};

export { pluck, omit };
