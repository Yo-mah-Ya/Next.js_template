export const isObject = (data: unknown): data is Record<PropertyKey, unknown> =>
    typeof data === "object" && data !== null && !Array.isArray(data);

export const entries = <K extends PropertyKey, V>(
    entries: Record<K, V>
): [K, V][] => Object.entries(entries) as [K, V][];

export const fromEntries = <K extends PropertyKey, V>(
    entries: [K, V][]
): Record<K, V> => Object.fromEntries(entries) as Record<K, V>;

export const keys = <K extends PropertyKey, V>(entries: Record<K, V>): K[] =>
    Object.keys(entries) as K[];

export const values = <K extends PropertyKey, V>(entries: Record<K, V>): V[] =>
    Object.values(entries) as V[];

export const pick = <T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    properties: readonly K[]
): Pick<T, K> =>
    !Object.keys(obj).length
        ? obj
        : properties.reduce((acc, name) => {
              if (name in obj) {
                  acc[name] = obj[name];
              }
              return acc;
          }, {} as Pick<T, K>);

export const omit = <T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    properties: readonly K[]
): Omit<T, K> => {
    const set = new Set(properties as readonly string[]);
    return !Object.keys(obj).length
        ? obj
        : (Object.entries(obj).reduce((acc, [name, value]) => {
              if (!set.has(name)) {
                  acc[name] = value;
              }
              return acc;
          }, {} as Record<string, unknown>) as Omit<T, K>);
};

export const omitNullish = <K extends PropertyKey, V>(
    obj: Record<K, V>
): Record<K, V> =>
    fromEntries(entries(obj).filter(([, value]) => value != undefined));

export const zipIntoArray = <K, V>(keys: K[], values: V[]): (K | V)[][] => {
    const resultLength =
        keys.length > values.length ? values.length : keys.length;
    const result: (K | V)[][] = [];
    for (let i = 0; i < resultLength; i++) {
        result.push([keys[i], values[i]]);
    }
    return result;
};
