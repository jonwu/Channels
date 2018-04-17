
export function save(key, data) {
  console.log(localStorage);
  return localStorage.setItem(key, data);
}
export function rehydrate(key) {
  console.log(localStorage.getItem(key))
  return localStorage.getItem(key);
}
