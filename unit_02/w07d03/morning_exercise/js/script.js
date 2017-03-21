$(document).ready(function(){

  //*****************************
  //ANIMATE FIRST BOX:
  //*****************************
  function animateBox(){
    //create a new Deferred object
    var deferred = $.Deferred();

    //animate takes in a
    $(".box").animate({left: "500px"}, 3000, function(){
      deferred.resolve();
    });
    //when your function ends, return a promise
    //this function now has a property called done (promise you will tell me when you are done)
    return deferred.promise();
  }

  //*****************************
  //ANIMATE THE OTHER 5 BOXES:
  //*****************************
  function animateBox2(){
    var deferred2 = $.Deferred();
    $(".box2").animate({left: "500px"}, 3000, function(){
      deferred2.resolve();
    });
    return deferred2.promise();
  }
  function animateBox3(){
    var deferred3 = $.Deferred();
    $(".box3").animate({left: "500px"}, 3000, function(){
      deferred3.resolve();
    });
    return deferred3.promise();
  }
  function animateBox4(){
    var deferred4 = $.Deferred();
    $(".box4").animate({left: "500px"}, 3000, function(){
      deferred4.resolve();
    });
    return deferred4.promise();
  }
  function animateBox5(){
    var deferred5 = $.Deferred();
    $(".box5").animate({left: "500px"}, 3000, function(){
      deferred5.resolve();
    });
    return deferred5.promise();
  }
  function animateBox6(){
    var deferred6 = $.Deferred();
    $(".box6").animate({left: "500px"}, 3000, function(){
      deferred6.resolve();
    });
    return deferred6.promise();
  }

  

  //*****************************
  //ALERTS AFTER EACH ANIMATION
  //*****************************
  function executeAfterAnimation(){
    alert("Animation done!");
  }

  //*****************************
  //YOUR TURN TO CODE!
  //*****************************
  //when animate box is done, fire the next sequence of functions
  animateBox()
    .done(function(){
      executeAfterAnimation()
        animateBox6()
          .done(function(){
            animateBox4()
              .done(function(){
                executeAfterAnimation()
                    animateBox5()
                      .done(function(){
                        animateBox2()
                          .done(function(){
                            animateBox3()
                              .catch(console.log("error"));
                          })
                      })
              })
        })
    });


});
