const INVALID_DAY_OR_TIME_MESSAGE = "Please input valid time or day";
const INTEGER_ONLY_MESSAGE = "Please input integer only";
const DAY_OUT_OF_RANGE_MESSAGE = "Please input day from 1 to 7";
const TIME_OUT_OF_RANGE_MESSAGE = "Please input time from 1 to 24";

const MIN_DAY = 1;
const MAX_DAY = 7;
const MIN_TIME = 1;
const MAX_TIME = 24;

class DataValidator {
  dayOrTimeIsNotGiven(input) {
    return typeof input === "undefined";
  }

  validateDay(day) {
    if (this.dayOrTimeIsNotGiven(day)) {
      return INVALID_DAY_OR_TIME_MESSAGE;
    } else if (!Number.isInteger(day)) {
      return INTEGER_ONLY_MESSAGE;
    } else if (day < MIN_DAY || day > MAX_DAY) {
      return DAY_OUT_OF_RANGE_MESSAGE;
    }
  }

  validateTime(time) {
    if (this.dayOrTimeIsNotGiven(time)) {
      return INVALID_DAY_OR_TIME_MESSAGE;
    } else if (!Number.isInteger(time)) {
      return INTEGER_ONLY_MESSAGE;
    } else if (time < MIN_TIME || time > MAX_TIME) {
      return TIME_OUT_OF_RANGE_MESSAGE;
    }
  }
}

module.exports = DataValidator;