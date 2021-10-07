"use strict";
import Day from "./day.js";
import Week from "./week.js";

class Month {
  constructor() {
    this.currentMonth = Month.currentMonth;
    this.monthsName = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
  }
  static currentMonth = Day.currentDate.getMonth();
  static lastMonth = new Date(Day.currentDate.getFullYear(), 11).getMonth() + 1;
  static firstMonth = new Date(Day.currentDate.getFullYear(), 0).getMonth() + 1;

  getFullYearMonths() {
    let months = [];
    for (let i = 0; i < Month.lastMonth; i++)
      months.push(new Date(2021, i).getMonth() + 1);

    return months;
  }
}
export default Month;
