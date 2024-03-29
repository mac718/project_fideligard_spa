export const getCurrentDateEntryIndex = (arr, date) => {
  let index;
  date = makeUTCDate(date);

  arr.forEach((entry, i) => {
    let entryDate = new Date(entry[0].split("-").join(","));
    entryDate = `${entryDate.getFullYear()}-${entryDate.getDate()}-${entryDate.getMonth() +
      1}`;
    let dateString = `${date.getFullYear()}-${date.getDate()}-${date.getMonth() +
      1}`;
    if (entryDate === dateString) {
      index = i;
    }
  });

  return index;
};

export const makeDateString = (date) => {
  date = makeUTCDate(date);
  let year = date.getFullYear();
  let day;
  date.getDate().toString().length === 2
    ? (day = date.getDate())
    : (day = `0${date.getDate()}`);

  let month;
  (date.getMonth() + 1).toString().length === 2
    ? (month = date.getMonth() + 1)
    : (month = `0${date.getMonth() + 1}`);

  let dateString = `${year}-${month}-${day}`;
  return dateString;
};

export const makeUTCDate = (milliseconds) => {
  let date = new Date(milliseconds);
  let dateYear = date.getUTCFullYear();
  let dateMonth = date.getUTCMonth();
  let dateDay = date.getUTCDate();
  let UTCdate = new Date(dateYear, dateMonth, dateDay);

  return UTCdate;
};
