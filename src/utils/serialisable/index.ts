export type Serialisable<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Date
    ? string
    : T[K] extends Record<string, unknown>
    ? Serialisable<T[K]>
    : T[K]
}

const isDate = (obj: unknown): obj is Date => obj instanceof Date
const isObject = (obj: unknown): obj is Record<string, unknown> =>
  typeof obj === 'object' && obj !== null
const isArray = (obj: unknown): obj is unknown[] => Array.isArray(obj)

const serialiseValue = (value: unknown) => {
  if (isDate(value)) {
    return value.toISOString()
  } else if (isObject(value) || isArray(value)) {
    return serialisable(value)
  } else {
    return value
  }
}

const serialisable = <T extends Record<string, unknown> | unknown[]>(
  obj: T | null
) => {
  if (!obj) {
    return obj
  }
  const res = (isArray(obj) ? [] : {}) as Serialisable<T>
  for (const key in obj) {
    res[key] = serialiseValue(obj[key])
  }
  return res
}

export default serialisable
