{
  function getProperty<T, K extends keyof T>(object: T, key: K): T[K]{
    return object[key];
  }
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}