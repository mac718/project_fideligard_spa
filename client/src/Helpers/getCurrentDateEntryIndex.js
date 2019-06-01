export const getCurrentDateEntryIndex = ((arr, date) => {
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
})