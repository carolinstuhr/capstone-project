export function saveToStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function loadFromStorage(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (error) {
    console.log(error.message)
  }
}

export function filterUserRecipes(input, list) {
  const userInput = input.toLowerCase()
  return list.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(userInput) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(userInput))
    )
  })
}
