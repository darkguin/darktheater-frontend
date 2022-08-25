export function isEmpty(object?: Object): boolean {
  return object === undefined || object === null || Object.keys(object).length === 0;
}
