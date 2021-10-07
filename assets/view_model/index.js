"use strict";

import model from "../model/index.js";

function getAllDaysAndWeeks() {
  let arrCurrentWeek = [],
    weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    arrAllWeeks = [weekDays];

  if (model.Week.firstMonthWeekDay != 0) {
    for (let i = 1; i < model.Week.firstMonthWeekDay; i++)
      arrCurrentWeek.push(null);
  }

  for (let i = 1; i <= model.Day.lastMonthDay; i++) {
    arrCurrentWeek.push(i);
    if (
      new Date(
        model.Day.currentDate.getFullYear(),
        model.Day.currentDate.getMonth(),
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
  const body = document.body;
  const table = document.querySelector("#calendar");
  getAllDaysAndWeeks().forEach((el) => {
    const tr = document.createElement("tr");
    tr.classList.add("tr");
    el.forEach((el) => {
      const td = document.createElement("td");
      td.innerHTML = el;
      tr.append(td);
      td.classList.add("td");

      if (el == model.Day.currentDate.getDate()) {
        td.classList.add("current");
      }
    });
    table.append(tr);
  });
}
render();
