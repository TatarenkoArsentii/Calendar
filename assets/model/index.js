"use strict";

import Week from "./week.js";
import Day from "./day.js";
import Month from "./month.js";

function getAllDaysAndWeeks() {
  let arrCurrentWeek = [],
    weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    arrAllWeeks = [weekDays];

  if (Week.firstMonthWeekDay != 0) {
    for (let i = 1; i < Week.firstMonthWeekDay; i++) arrCurrentWeek.push("");
  }

  for (let i = 1; i <= Day.lastMonthDay; i++) {
    arrCurrentWeek.push(i);
    if (
      new Date(
        Day.currentDate.getFullYear(),
        Day.currentDate.getMonth(),
        i
      ).getDay() == 0
    ) {
      arrAllWeeks.push(arrCurrentWeek);
      arrCurrentWeek = [];
    }
  }
  return arrAllWeeks;
}

function render() {

}
export default { Day, Week, Month, render };
