const ParameterUtil = require("./parameterUtil");

const DEFAULT_END_OF_OFFICE_HOUR = 18;
const DEFAULT_START_OF_OFFICE_HOUR = 9;
const START_OF_NIGHT_HOUR = 22;
const END_OF_NIGHT_HOUR = 5;

const parameterUtil = new ParameterUtil();

class TimeService {
  isNightTime(time) {
    return time >= START_OF_NIGHT_HOUR || time <= END_OF_NIGHT_HOUR;
  }

  isBeforeOfficeHour(time, officeHourStart) {
    return time < officeHourStart;
  }

  formatOfficeHourStart(officeHourStart) {
    return parameterUtil.setParameter(
      officeHourStart,
      DEFAULT_START_OF_OFFICE_HOUR
    );
  }

  isAfterOfficeHour(time, officeHourEnd) {
    return time > officeHourEnd;
  }

  formatOfficeHourEnd(officeHourEnd) {
    return parameterUtil.setParameter(
      officeHourEnd,
      DEFAULT_END_OF_OFFICE_HOUR
    );
  }
}

module.exports = TimeService;
