const WorkingDayBot = require('../src/workingDayBot');

test('should return message "Please input valid time or day" when no input of day is given', () => {
    let bot = new WorkingDayBot();
    let message = bot.greet();
    expect(message).toBe("Please input valid time or day");
});

test('should return message "Please input integer only" when input for day is not an integer', () => {
    let bot = new WorkingDayBot();
    let day = "Monday";
    let time = 1;
    let message = bot.greet(day, time);
    expect(message).toBe("Please input integer only");
});

test('should return message "Please input day from 1 to 7" when input for day is below 1', () => {
    let bot = new WorkingDayBot();
    let day = 0;
    let time = 1;
    let message = bot.greet(day, time);
    expect(message).toBe("Please input day from 1 to 7");
});

test('should return message "Please input day from 1 to 7" when input for day is over 7', () => {
    let bot = new WorkingDayBot();
    let day = 8;
    let time = 1;
    let message = bot.greet(day, time);
    expect(message).toBe("Please input day from 1 to 7");
});

test('should return message "Please input valid time or day" when no input of time is given ', () => {
    let bot = new WorkingDayBot();
    let day = 3;
    let message = bot.greet(day);
    expect(message).toBe("Please input valid time or day");
});

test('should return message "Please input integer only" when input for time is not an integer', () => {
    let bot = new WorkingDayBot();
    let day = 3;
    let time = "ten"
    let message = bot.greet(day, time);
    expect(message).toBe("Please input integer only");
});

test('should return message "Please input time from 1 to 24" when input for time is below 1 ', () => {
    let bot = new WorkingDayBot();
    let day = 1;
    let time = 0;
    let message = bot.greet(day, time);
    expect(message).toBe("Please input time from 1 to 24");
});

test('should return message "Happy weekend!" when input for day is either 6 or 7', () => {
    let bot = new WorkingDayBot();
    let day = 6;
    let time = 12;
    let message = bot.greet(day, time);
    expect(message).toBe("Happy weekend!");
});

test('should return message "Happy Working!" when input for day is between 1 to 5', () => {
    let bot = new WorkingDayBot();
    let day = 1;
    let time = 12;
    let message = bot.greet(day, time);
    expect(message).toBe("Happy Working!");
});

test('should return message "Good evening and see you!" when input for time is after 6pm on a weekday', () => {
    let bot = new WorkingDayBot();
    let day = 1;
    let time = 19;
    let message = bot.greet(day, time);
    expect(message).toBe("Good evening and see you!");
});

test('should return message "Get ready for work!" when input for time is before 9am on a weekday', () => {
    let bot = new WorkingDayBot();
    let day = 1;
    let time = 7;
    let message = bot.greet(day, time);
    expect(message).toBe("Get ready for work!");
});

test('should return message "Goodnight!" when input for time is between 10pm to 5am ', () => {
    let bot = new WorkingDayBot();
    let day = 1;
    let time = 22;
    let message = bot.greet(day, time);
    expect(message).toBe("Goodnight!");
});
// DayService
test('should return message "Happy weekend!" when weekend starts from Friday and the day is 5 and time is 12pm', () => {
    let bot = new WorkingDayBot({weekDayEnd: 4});
    let day = 5;
    let time = 12;
    let message = bot.greet(day, time);
    expect(message).toBe("Happy weekend!");
});

test('should return message "Happy Working!" when weekend starts from Friday and the day is 3 and time is 12pm', () => {
    let bot = new WorkingDayBot({weekDayEnd: 4});
    let day = 3;
    let time = 12;
    let message = bot.greet(day, time);
    expect(message).toBe("Happy Working!");
});
// TimeService
test('should return message "Good evening and see you!" when weekday office hour ends at 5pm and the day is 3 and the time is 6pm', () => {
    let bot = new WorkingDayBot({officeHourEnd: 17});
    let day = 3;
    let time = 18;
    let message = bot.greet(day, time);
    expect(message).toBe("Good evening and see you!");
});

test('should return message "Happy Working!" when weekday office hour ends at 5pm and the day is 3 and the time is 4pm', () => {
    let bot = new WorkingDayBot({officeHourEnd: 17});
    let day = 3;
    let time = 16;
    let message = bot.greet(day, time);
    expect(message).toBe("Happy Working!");
});

test('should return message "Happy Working!" when weekday office hour starts at 7am and the day is 3 and the time is 8am', () => {
    let bot = new WorkingDayBot({officeHourStart: 7});
    let day = 3;
    let time = 8;
    let message = bot.greet(day, time);
    expect(message).toBe("Happy Working!");
});

test('should return message "Bon weekend!" when it is a weekend and language is set to French', () => {
    let bot = new WorkingDayBot({language: "french"});
    let day = 6;
    let time = 8;
    let message = bot.greet(day, time);
    expect(message).toBe("Bon weekend!");
});

test('should return message "Bon travail!" when it is a weekday office hour and language is set to French', () => {
    let bot = new WorkingDayBot({language: "french"});
    let day = 3;
    let time = 12;
    let message = bot.greet(day, time);
    expect(message).toBe("Bon travail!");
});

test('should return message "Préparez-vous pour le travail!" when it is a weekday before office hour and language is set to French', () => {
    let bot = new WorkingDayBot({language: "french"});
    let day = 3;
    let time = 6;
    let message = bot.greet(day, time);
    expect(message).toBe("Préparez-vous pour le travail!");
});

test('should return message "Bonsoir et à bientôt!" when it is a weekday after office hour and language is set to French', () => {
    let bot = new WorkingDayBot({language: "french"});
    let day = 3;
    let time = 20;
    let message = bot.greet(day, time);
    expect(message).toBe("Bonsoir et à bientôt!");
});

test('should return message "Bonne nuit!" when it is a after 10pm and language is set to French', () => {
    let bot = new WorkingDayBot({language: "french"});
    let day = 3;
    let time = 23;
    let message = bot.greet(day, time);
    expect(message).toBe("Bonne nuit!");
});