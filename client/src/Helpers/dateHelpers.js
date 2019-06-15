export const getCurrentDateEntryIndex = (arr, date) => {
  let index;

  arr.forEach((entry, i) => {
    let entryDate = new Date(entry[0].split('-').join(','))
    entryDate = `${entryDate.getFullYear()}-${entryDate.getDate()}-${entryDate.getMonth() + 1}`
    let dateString = `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`
    if (entryDate == dateString) {
      index = i;
    }
  })

  return index;
}

export const makeDateString = date => {
  let year = date.getFullYear()
  let day = date.getDate().length == 2 ? date.getDate() : `0${ date.getDate() }`
  let month = date.getMonth().length == 2 ? date.getMonth() + 1 : `0${ date.getDate() + 1 }`

  let dateString = `${year}-${day}-${month}`
  return dateString
}