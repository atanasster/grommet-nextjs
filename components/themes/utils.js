export const getProp = (object, path) => {
  const parts = path.split('-');
  if (parts.length >= 1 && object[parts[0]] !== undefined) {
    return getProp(object[parts[0]], parts.slice(1).join('-'));
  }
  return (parts.length === 1 && parts[0] === '') ? object : undefined;
};

export const getArrayProp = (arr, path) => {
  const parts = path.split('-');
  if (parts.length >= 1 && Array.isArray(arr)) {
    const el = arr.find(e => e.label === parts[0]);
    if (el) {
      if (Array.isArray(el.items)) {
        return getArrayProp(el.items, parts.slice(1).join('-'));
      }
      return el;
    }
  }
  return undefined;
};


export const assignProp = (object, path, newValue) => {
  const newObject = { ...object };
  let obj = newObject;
  const parts = path.split('-');
  for (let i = 0; i < parts.length - 1; i += 1) {
    const part = parts[i];
    if (obj[part] === undefined) {
      obj[part] = {};
    }
    obj = obj[part];
  }
  if (parts.length > 1) {
    obj[parts[parts.length - 1]] = newValue;
  }
  if (newValue === undefined) {
    const clean = (o) => {
      Object.keys(o).forEach((key) => {
        if (typeof o[key] === 'object') {
          clean(o[key]);
        }
        if (o[key] === undefined || (typeof o[key] === 'object' && Object.keys(o[key]).length === 0)) {
          // eslint-disable-next-line no-param-reassign
          delete o[key];
        }
      });
    };
    clean(newObject);
  }
  return newObject;
};
