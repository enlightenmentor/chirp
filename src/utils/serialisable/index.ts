export type Serialisable<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Date
    ? string
    : T[K] extends Record<string, any>
    ? Serialisable<T[K]>
    : T[K];
};

const isDate = (obj: any): obj is Date => obj instanceof Date;
const isObject = (obj: any): obj is {} =>
  typeof obj === "object" && obj !== null;
const isArray = (obj: any): obj is any[] => Array.isArray(obj);

const serialiseValue = (value: any) => {
  if (isDate(value)) {
    return value.toISOString();
  } else if (isObject(value) || isArray(value)) {
    return serialisable(value);
  } else {
    return value;
  }
};

const serialisable = <T extends Record<string, any>>(obj: T | null) => {
  if (!obj) {
    return obj;
  }
  const res = (isArray(obj) ? [] : {}) as Serialisable<T>;
  for (let key in obj) {
    res[key] = serialiseValue(obj[key]);
  }
  return res;
};

export default serialisable;
