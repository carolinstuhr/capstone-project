export function filterUserRecipes(input, list) {
  const userInput = input.toLowerCase()
  return list.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(userInput) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(userInput))
    )
  })
}
