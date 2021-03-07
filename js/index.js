    let line = document.querySelector(".slider")
    let slider = document.querySelector(".slider__view")
    let slides = document.querySelectorAll(".slide")
    let right = document.querySelector(".right")
    let left = document.querySelector(".left")

    let minRight = 0;
    let step = slider.getBoundingClientRect().width;
    let currentRight = 0;
    
    line.style.right = currentRight;
    
    let maxRight = step * 2;

    for (let slide of slides) {
        slide.style.width = slider.getBoundingClientRect().width + "px";
    }

    right.addEventListener("click", function() {
      if (currentRight < maxRight) {
      currentRight += step;
      line.style.right = currentRight + "px";
      }
    
    });
    
    left.addEventListener("click", function() {
      if (currentRight > minRight) {
        currentRight -= step;
        line.style.right = currentRight + "px";
      }
    });

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
     
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
     
      function updateClock() {
        var t = getTimeRemaining(endtime);
     
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
     
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
     
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
     
    var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000); // for endless timer
    initializeClock('countdown', deadline);