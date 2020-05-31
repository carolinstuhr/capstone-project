export function saveToStorage(name, data) {
  localStorage.setItem(name, data)
}

export function loadFromStorage(name) {
  try {
    return localStorage.getItem(name)
  } catch (error) {
    console.log(error.message)
  }
}

export function removeFromStorage(name) {
  try {
    return localStorage.removeItem(name)
  } catch (error) {
    console.log(error.message)
  }
}
