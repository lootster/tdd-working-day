const ParameterUtil = require("./parameterUtil");

const DEFAULT_END_OF_WEEKDAY = 5;

const parameterUtil = new ParameterUtil();

class DayService {
  isWeekday(day, weekDayEnd) {
    return day <= weekDayEnd;
  }

  formatWeekdayEnd(weekDayEnd) {
    return parameterUtil.setParameter(weekDayEnd, DEFAULT_END_OF_WEEKDAY);
  }
}

module.exports = DayService;
