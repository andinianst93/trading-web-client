export const searchFilter = (searchValue, glosari, searchBy = 'title') => {
  let lowerCaseQuery = searchValue?.toLowerCase()
  let filteredList = searchValue
    ? glosari.filter((x) => x[searchBy]?.toLowerCase().includes(lowerCaseQuery))
    : glosari
  return filteredList
}
