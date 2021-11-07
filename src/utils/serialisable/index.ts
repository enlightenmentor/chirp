type Mappable = Record<string, unknown> | unknown[]

export type Serialisable<T extends Mappable> = {
  [K in keyof T]: T[K] extends Date
    ? string
    : T[K] extends Mappable
    ? Serialisable<T[K]>
    : T[K]
}

const isDate = (obj: unknown): obj is Date => obj instanceof Date
const isObject = (obj: unknown): obj is Record<string, unknown> =>
  typeof obj === 'object' && obj !== null
const isArray = (obj: unknown): obj is unknown[] => Array.isArray(obj)

const serialiseValue = <T>(value: T) => {
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
  if (isArray(obj)) {
    return obj.reduce<unknown[]>((res, value) => {
      res.push(serialiseValue(value))
      return res
    }, [])
  } else {
    return Object.keys(obj).reduce<Record<string, unknown>>((res, key) => {
      res[key] = serialiseValue(obj[key])
      return res
    }, {})
  }
}

export default serialisable
