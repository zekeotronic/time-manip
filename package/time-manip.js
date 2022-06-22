module.exports = {
  secondsToMinutes(seconds) {
    return parseFloat((seconds / 60).toFixed(2));
  },
  secondsToHours(seconds) {
    return parseFloat((this.secondsToMinutes(seconds) / 60).toFixed(2));
  },
  secondsToDays(seconds) {
    return parseFloat((this.secondsToHours(seconds) / 24).toFixed(2));
  },
  secondsToWeeks(seconds) {
    return parseFloat((this.secondsToDays(seconds) / 7).toFixed(2));
  },
  minutesToSeconds(minutes) {
    return parseFloat((minutes * 60).toFixed(2));
  },
  minutesToHours(minutes) {
    return parseFloat((minutes / 60).toFixed(2));
  },
  minutesToDays(minutes) {
    return parseFloat((this.minutesToHours(minutes) / 24).toFixed(2));
  },
  minutesToWeeks(minutes) {
    return parseFloat(this.minutesToDays(minutes) / 7, toFixed(2));
  },
  hoursToMinutes(hours) {
    return parseFloat((hours * 60).toFixed(2));
  },
  hoursToSeconds(hours) {
    return parseFloat((this.hoursToMinutes(hours) * 60).toFixed(2));
  },
  hoursToDays(hours) {
    return parseFloat((hours / 24).toFixed(2));
  },
  hoursToWeeks(hours) {
    return parseFloat((this.hoursToDays(hours) / 7).toFixed(2));
  },
  daysToSeconds(days) {
    return parseFloat((this.daysToMinutes(days) * 60).toFixed(2));
  },
  daysToMinutes(days) {
    return parseFloat((this.daysToHours(days) * 60).toFixed(2));
  },
  daysToHours(days) {
    return parseFloat((days * 24).toFixed(2));
  },
  daysToWeeks(days) {
    return parseFloat((days / 7).toFixed(2));
  },
  weeksToDays(weeks) {
    return parseFloat((weeks * 7).toFixed(2));
  },
  weeksToHours(weeks) {
    return parseFloat((this.weeksToDays(weeks) * 24).toFixed(2));
  },
  weeksToMinutes(weeks) {
    return parseFloat((this.weeksToHours(weeks) * 60).toFixed(2));
  },
  weeksToSeconds(weeks) {
    return parseFloat((this.weeksToMinutes(weeks) * 60).toFixed(2));
  },
  tallyReadable(seconds) {
    let h = Math.floor(this.secondsToHours(seconds));
    let m = Math.floor(this.secondsToMinutes(seconds - this.hoursToSeconds(h)));
    let s = seconds - (this.hoursToSeconds(h) + this.minutesToSeconds(m));

    if (h > 0) {
      return `${h} hours, ${m} minutes and ${s} seconds`;
    } else if (m > 0) {
      return `${m} minutes and ${s} seconds`;
    } else {
      return `${s} seconds`;
    }
  }
};

