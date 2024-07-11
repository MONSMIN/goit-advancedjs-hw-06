/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
  Weonday, Tuesday, Wednesday, Thursday, Friday, Saturday та Sunday
*/

enum WeekDays {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,  
}

function isWeekend(day: WeekDays): boolean {
    return day === WeekDays.SATURDAY || day === WeekDays.SUNDAY;
}

console.log(isWeekend(WeekDays.SATURDAY));
console.log(isWeekend(WeekDays.MONDAY));   