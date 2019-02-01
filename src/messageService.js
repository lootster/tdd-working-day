const MESSAGE = {
  default: {
    WEEKEND: "Happy weekend!",
    WORKING: "Happy Working!",
    BEFORE_OFFICE_HOUR: "Get ready for work!",
    AFTER_OFFICE_HOUR: "Good evening and see you!",
    GOODNIGHT: "Goodnight!"
  },
  french: {
    WEEKEND: "Bon weekend!",
    WORKING: "Bon travail!",
    BEFORE_OFFICE_HOUR: "Préparez-vous pour le travail!",
    AFTER_OFFICE_HOUR: "Bonsoir et à bientôt!",
    GOODNIGHT: "Bonne nuit!"
  }
};

function getMessage(language, key) {
  return language === undefined ? MESSAGE["default"][key] : MESSAGE[language][key];
}

class MessageService {
  getWeekendMessage(language) {
    return getMessage(language, "WEEKEND");
  }
  getWorkingMessage(language) {
    return getMessage(language, "WORKING");
  }
  getBeforeOfficeHourMessage(language) {
    return getMessage(language, "BEFORE_OFFICE_HOUR");
  }
  getAfterOfficeHourMessage(language) {
    return getMessage(language, "AFTER_OFFICE_HOUR");
  }
  getGoodnightMessage(language) {
    return getMessage(language, "GOODNIGHT");
  }
}

module.exports = MessageService;
