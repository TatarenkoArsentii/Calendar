"use strict";
import Day from "./day.js";
import Week from "./week.js";

class Month {
  constructor() {
    this.currentMonth = Month.currentMonth;
  }
  static currentMonth = new Date().getMonth();
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
