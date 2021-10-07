"use strict";
import Day from "./day.js";

class Week {
  constructor() {
    this.lastMonthWeekDay = Week.lastMonthWeekDay;
    this.firstMonthWeekDay = Week.firstMonthWeekDay;
  }
//  день недели последнего дня месяца
  static lastMonthWeekDay = new Date(
    Day.currentDate.getFullYear(),
    Day.currentDate.getMonth(),
    Day.lastMonthDay
  ).getDay();

  //  день недели первого дня месяца
  static firstMonthWeekDay = new Date(
    Day.currentDate.getFullYear(),
    Day.currentDate.getMonth(),
    1
  ).getDay();
}

export default Week;
