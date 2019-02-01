const DataValidator = require("./dataValidator");
const DayService = require("./dayService");
const TimeService = require("./timeService");
const MessageService = require('./messageService')

const validator = new DataValidator();
const dayService = new DayService();
const timeService = new TimeService();
const messageService = new MessageService();

class WorkingDayBot {
  constructor(options = {}) {
    this.language = options.language;
    this.weekDayEnd = dayService.formatWeekdayEnd(options.weekDayEnd);
    this.officeHourStart = timeService.formatOfficeHourStart(
      options.officeHourStart
    );
    this.officeHourEnd = timeService.formatOfficeHourEnd(options.officeHourEnd);
  }

  greet(day, time) {
    const dayErrorMessage = validator.validateDay(day);
    if (dayErrorMessage !== undefined) return dayErrorMessage;

    const timeErrorMessage = validator.validateTime(time);
    if (timeErrorMessage !== undefined) return timeErrorMessage;

    if (timeService.isNightTime(time)) {
      return messageService.getGoodnightMessage(this.language);
    }

    if (dayService.isWeekday(day, this.weekDayEnd)) {
      if (timeService.isAfterOfficeHour(time, this.officeHourEnd))
        return messageService.getAfterOfficeHourMessage(this.language);
      if (timeService.isBeforeOfficeHour(time, this.officeHourStart))
        return messageService.getBeforeOfficeHourMessage(this.language);
      return messageService.getWorkingMessage(this.language);
    }

    return messageService.getWeekendMessage(this.language);
  }
}

module.exports = WorkingDayBot;
