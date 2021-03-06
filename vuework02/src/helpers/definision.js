/** @format */

const years = [];

const months = [];

const dates = [];

function yearsAdd() {
  for (let i = 1990; i < 2021; i++) {
    if (i >= 2019) {
      years.push({ year: i, japanese: `(令和${i - 2018})`, id: `year_${i}` });
    } else {
      years.push({ year: i, japanese: `(平成${i - 1988})`, id: `year_${i}` });
    }
  }
}

function monthsAdd() {
  for (let i = 1; i <= 12; i++) {
    months.push({ month: i, id: `month_${i}` });
  }
}

function datesAdd() {
  for (let i = 1; i <= 31; i++) {
    dates.push({ date: i, id: `date_${i}` });
  }
}

yearsAdd();
monthsAdd();
datesAdd();
export { years, months, dates };
