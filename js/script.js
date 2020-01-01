
   // -> Countdown timer Start.
   // -> Host of this code:- https://www.w3schools.com
   // -> Source of this code:- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown

   // Set the date we're counting down to
   var countDownDate = new Date("May 6, 2020 10:00:00").getTime();
   
   // Update the count down every 1 second
   var x = setInterval(function() {
   
      // Get todays date and time
      var now = new Date().getTime();
         
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
         
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
      // Output the result in an element with id="counterId"
      document.getElementById("counterId").innerHTML = hours + " "
      + minutes + " " + seconds + " ";
         
      // If the count down is over, write some text 
      if (distance < 0) {
         clearInterval(x);
         document.getElementById("counterId").innerHTML = "I am finished :)";
      }
   }, 1000);
   // # Countdown timer End.


   // Slider Start

   // -> For This slider I used: Owl Carousel JQuery Plugin
   // -> Author of This Plugin:- David Deutsch
   // -> Source of this code:- https://owlcarousel2.github.io/OwlCarousel2/demos/autoplay.html
   $(document).ready(function(){
      var owl = $('.owl-carousel');
      owl.owlCarousel({
          items:3,
          loop:true,
          autoplay:true,
          center: true,
          autoplayTimeout:2000,
          autoplayHoverPause:false
      });
      $('.play').on('click',function(){
          owl.trigger('play.owl.autoplay',[1000])
      })
      $('.stop').on('click',function(){
          owl.trigger('stop.owl.autoplay')
      })
   });
    // Slider End
