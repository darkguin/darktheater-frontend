export function ImplementsStatic<T>() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return <U extends T>(constructor: U) => {};
}
