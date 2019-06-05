import {dataStartDate, endDate, dayLength} from '../dateMillisecondValues';

export function cleanUp(results) {
  let dates = []

  for (let i = dataStartDate; i <= endDate; i += dayLength) {
    let date = new Date(i)
    let year = `${date.getFullYear()}`;
    let month;
    let day;
    date.getMonth() + 1 < 10 ? month = `0${date.getMonth() + 1}` : month = `${date.getMonth() + 1}`
    date.getDate() < 10 ? day = `0${date.getDate()}` : day = `${date.getDate()}`
    let dateString = `${year}-${month}-${day}`
    dates.push(dateString)
  }

  let resultsDates = results.map(result => {
    return result[0]
  })

  let resultsIndex = 0;

  let cleanedUpResults = results//results.map(result => { return [result[0], result[1]]})

  

  dates.forEach((date, i) => {
    if (!resultsDates.includes(date)) {
      cleanedUpResults.push([date, results[resultsIndex][1]])
    } else {
      resultsIndex++;
    }
  })

  cleanedUpResults = cleanedUpResults.sort((a, b) => {
    return new Date(a[0])-new Date(b[0])
  })

  console.log(cleanedUpResults)

  return cleanedUpResults;

}