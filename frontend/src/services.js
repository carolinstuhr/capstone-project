export function saveToStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function loadFromStorage(name) {
  JSON.parse(localStorage.getItem(name))
}
