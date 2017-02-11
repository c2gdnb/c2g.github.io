  var clock;
    
    $(document).ready(function() {
      var clock;

      clock = $('.your-clock').FlipClock({
            language: 'ru',
            clockFace: 'DailyCounter'
        });
            
        clock.setTime(220880);
        clock.setCountdown(true);
        clock.start();

    });