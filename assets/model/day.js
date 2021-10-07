"use strict";

class Day {
  constructor() {
    this.date = Day.currentDate;
    this.lastMonthDay = Day.lastMonthDay;
  }

  //    текущая дата
  static currentDate = new Date();
  //   последний день месяца
  static lastMonthDay = new Date(
    Day.currentDate.getFullYear(),
    Day.currentDate.getMonth()+1,
    0
  ).getDate();

  //   static lastMonthWeekDay = new Date(
  //     Day.currentDate.getFullYear(),
  //     Day.currentDate.getMonth() + 1,
  //     0
  //   ).getDay();

  //   static firstMonthWeekDay = new Date(
  //     Day.currentDate.getFullYear(),
  //     Day.currentDate.getMonth(),
  //     1
  //   ).getDay();
}
export default Day;
