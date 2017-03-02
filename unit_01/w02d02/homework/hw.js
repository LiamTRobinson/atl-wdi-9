// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

window.onload = function(){
  var timerVal = 100;
  console.log(timerUI);

  var countDown = function(){
    if (timerVal >= 0) {
      // Trigger All TimerUI Methods //
      for (var key in timerUI) {
        timerUI[key](timerVal);
      }
      console.log(timerVal);
      timerVal -= 1;
      setTimeout(countDown, 1000);
    }
  };
  countDown();
};







var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById("numeric-display").innerHTML = timerValue;
    if (timerValue <= 10){
      document.getElementById("numeric-display").style.color = "red";
      document.getElementById("numeric-display").style.fontSize = (((10 - timerValue) * .05) +1) * 1.5 + "em";
    }
  },
  drawProgressBars: function(timerValue){
    document.getElementsByClassName("progress-bar")[0].style.width = 100 - timerValue + "%";
  },
  drawProgressBars2: function(timerValue){
    document.getElementsByClassName("progress-bar")[1].style.width = 100 - timerValue + "%";
  },
  drawLitFuses: function(timerValue){
    document.getElementsByClassName("unburnt")[0].style.width = (timerValue / 100) * 98 + "%";
    document.getElementsByClassName("burnt")[0].style.width = ((100 - timerValue) / 100) * 98 + "%";
  },
  drawLitFuses2: function(timerValue){
    document.getElementsByClassName("unburnt")[1].style.width = (timerValue / 100) * 98 + "%";
    document.getElementsByClassName("burnt")[1].style.width = ((100 - timerValue) / 100) * 98 + "%";
  },
  drawCrawlers: function(timerValue){
    document.getElementsByClassName("crawler")[0].style.marginLeft = ((100 - timerValue) * 10) + "px";
    if (timerValue % 2 === 0){
      document.getElementsByClassName("crawler")[0].style.marginTop = "10px";
      document.getElementsByClassName("crawler")[0].style.marginBottom = "0px";
    }
    else {
      document.getElementsByClassName("crawler")[0].style.marginTop = "0px";
      document.getElementsByClassName("crawler")[0].style.marginBottom = "10px";
    }
  },
  drawCrawlers2: function(timerValue){
    document.getElementsByClassName("crawler")[1].style.marginLeft = ((100 - timerValue) * 10) + "px";
    if (timerValue % 2 === 0){
      document.getElementsByClassName("crawler")[1].style.marginTop = "10px";
      document.getElementsByClassName("crawler")[1].style.marginBottom = "0px";
    }
    else {
      document.getElementsByClassName("crawler")[1].style.marginTop = "0px";
      document.getElementsByClassName("crawler")[1].style.marginBottom = "10px";
    }
  }
};
