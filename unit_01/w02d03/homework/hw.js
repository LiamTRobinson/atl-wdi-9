// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    this.millisecs += 1;
    if (this.millisecs % 100 === 0 && this.millisecs !== 0) {
      this.secs += 1;
      this.millisecs = 0;
    }
    if (this.secs % 60 === 0 && this.secs !== 0) {
      this.mins += 1;
      this.secs = 0;
    }
  },
  reset: function(){
    this.millisecs = 0;
    this.secs = 0;
    this.mins =0;
    this.laps = [];
  },
  start: function(){
    if (this.isRunning === false){
      this.isRunning = true;
    }
  },
  stop: function(){
    if (this.isRunning === true) {
      this.isRunning = false;
    }
  },
  lap: function(){
    if (this.isRunning === true) {
      this.laps.unshift({Minutes: this.mins, Seconds: this.secs, Milliseconds: this.millisecs});
    }
  }
};

/// User Interface ///
const ViewEngine = {
  //grabs span, runs zeroFill on data
  updateTimeDisplay: function(mins, secs, millisecs){
    $('#millisecs').html(ViewHelpers.zeroFill(millisecs, 2));
    $("#secs").html(ViewHelpers.zeroFill(secs, 2));
    $("#mins").html(ViewHelpers.zeroFill(mins, 2));
  },
  updateLapListDisplay: function(laps){
      let mins = ViewHelpers.zeroFill(laps.Minutes, 2);
      let secs = ViewHelpers.zeroFill(laps.Seconds, 2);
      let millisecs = ViewHelpers.zeroFill(laps.Milliseconds, 2);
      $("#lap-list").append("<li>"+mins+":"+secs+":"+millisecs+"</li>");
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    let stringNumber = number.toString()
    while (stringNumber.length < length){
      stringNumber = "0" + stringNumber;
    }
    return stringNumber;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    let mins = Stopwatch.mins;
    let secs = Stopwatch.secs;
    let millisecs = Stopwatch.millisecs;
    ViewEngine.updateTimeDisplay(mins, secs, millisecs);
  },
  handleClickStart: function() {
    if (Stopwatch.isRunning === false) {
      Stopwatch.start();
      Stopwatch.tickClock();
    }
  },
  handleClickStopReset: function(){
    if (Stopwatch.isRunning === false){
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
      $("#lap-list").empty();
    }
    Stopwatch.stop();
  },
  handleClickLap: function(){
    Stopwatch.lap();
    ViewEngine.updateLapListDisplay(Stopwatch.laps[0])
  }
};


$(document).ready(function(){
  $("#start").on("click", AppController.handleClickStart);
  $("#stop").on("click", AppController.handleClickStopReset);
  $("#lap").on("click", AppController.handleClickLap);
});