"use strict";

import model from "../model/index.js";

function getAllDaysAndWeeks() {
  let arrCurrentWeek = [],
    weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    arrAllWeeks = [weekDays];

  if (model.Week.firstMonthWeekDay != 0) {
    for (let i = 1; i < model.Week.firstMonthWeekDay; i++)
      arrCurrentWeek.push(null);
  } else {
    for (let i = 0; i < 6; i++) {
      arrCurrentWeek.push(null);
    }
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

  if (model.Week.lastMonthWeekDay != 0) {
    for (let i = model.Week.lastMonthWeekDay; i < 7; i++) {
      arrCurrentWeek.push(null);
    }
    arrAllWeeks.push(arrCurrentWeek);
  }

  return arrAllWeeks;
}

function render() {
  const table = document.querySelector("#calendar");
  const p = document.createElement("p");
  new model.Month().monthsName.forEach((el, index) => {
    if (index == model.Month.currentMonth) {
      p.innerHTML = el;
    }
  });
  document.body.prepend(p);
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
