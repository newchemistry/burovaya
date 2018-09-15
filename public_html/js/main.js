(function($) {
  function mobileMenu() {
    $('.glass').width($('.glass').height() / 1.775);
    //OPEN TRIGGER
    var openTrigger = $('.menu-trigger');
    var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
    var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
    var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

    //CLOSE TRIGGER
    var closeTrigger = $('.close-trigger');
    var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
    var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');

    //content
    var content = $('.content');
    var videoBg = $('.glass .video_bg');

    //MENU
    var menuContainer = $('.menu-container');
    var menu = $('.menu');
    var menuTop = $('.menu-bg.top');
    var menuMiddle = $('.menu-bg.middle');
    var menuBottom = $('.menu-bg.bottom');

    //TL
    var tlOpen = new TimelineMax({
      paused: true
    });
    var tlClose = new TimelineMax({
      paused: true
    });

    //OPEN TIMELINE
    tlOpen.add("preOpen")
      .to(content, 0.4, {
        scale: 0.8,
        opacity: 0,
        ease: Power2.easeOut
      }, "preOpen")
      .to(openTriggerTop, 0.4, {
        x: "+80px",
        y: "-80px",
        delay: 0.1,
        ease: Power4.easeIn,
        onComplete: function() {
          closeTrigger.css('z-index', '25');
        }
      }, "preOpen")
      .to(openTriggerMiddle, 0.4, {
        x: "+=80px",
        y: "-=80px",
        ease: Power4.easeIn,
        onComplete: function() {
          openTrigger.css('visibility', 'hidden');
          content.css('z-index', '19');
        }
      }, "preOpen")
      .to(openTriggerBottom, 0.4, {
        x: "+=80px",
        y: "-=80px",
        delay: 0.2,
        ease: Power4.easeIn
      }, "preOpen")
      .add("open", "-=0.4")
      .to(menuTop, 0.8, {
        y: "13%",
        ease: Power4.easeInOut
      }, "open")
      .to(menuMiddle, 0.8, {
        scaleY: 1,
        ease: Power4.easeInOut
      }, "open")
      .to(menuBottom, 0.8, {
        y: "-114%",
        ease: Power4.easeInOut
      }, "open")
      .fromTo(menu, 0.6, {
        y: 30,
        opacity: 0,
        visibility: 'hidden'
      }, {
        y: 0,
        opacity: 1,
        visibility: 'visible',
        ease: Power4.easeOut
      }, "-=0.2")
      .add("preClose", "-=0.8")
      .to(closeTriggerLeft, 0.8, {
        x: "0",
        y: "0",
        ease: Power4.easeOut
      }, "preClose")
      .to(closeTriggerRight, 0.8, {
        x: "0",
        y: "0",
        delay: 0.2,
        ease: Power4.easeOut
      }, "preClose");


    //CLOSE TIMELINE
    tlClose.add("close")
      .to(menuTop, 0.2, {
        backgroundColor: "#6295ca",
        ease: Power4.easeInOut,
        onComplete: function() {
          content.css('z-index', '26');
          closeTrigger.css('z-index', '5');
          openTrigger.css('visibility', 'visible');
        }
      }, "close")
      .to(menuMiddle, 0.2, {
        backgroundColor: "#6295ca",
        ease: Power4.easeInOut
      }, "close")
      .to(menuBottom, 0.2, {
        backgroundColor: "#6295ca",
        ease: Power4.easeInOut
      }, "close")
      .to(menu, 0.6, {
        y: 20,
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          menu.css('visibility', 'hidden');
        }
      }, "close")
      .to(content, 0.8, {
        scale: 1,
        opacity: 1,
        ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuTop, 0.8, {
        y: "-113%",
        ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuMiddle, 0.8, {
        scaleY: 0,
        ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuBottom, 0.8, {
        y: "23%",
        ease: Power4.easeInOut,
        onComplete: function() {
          menuTop.css('background-color', '#ffffff');
          menuMiddle.css('background-color', '#ffffff');
          menuBottom.css('background-color', '#ffffff');
        }
      }, "close", "+=0.2")
      .to(closeTriggerLeft, 0.2, {
        x: "+=100px",
        y: "-=100px",
        ease: Power4.easeIn
      }, "close")
      .to(closeTriggerRight, 0.2, {
        x: "-=100px",
        y: "-=100px",
        delay: 0.1,
        ease: Power4.easeIn
      }, "close")
      .to(openTriggerTop, 1, {
        x: "0",
        y: "0",
        delay: 0.2,
        ease: Power4.easeOut
      }, "close")
      .to(openTriggerMiddle, 1, {
        x: "0",
        y: "0",
        ease: Power4.easeOut
      }, "close")
      .to(openTriggerBottom, 1, {
        x: "0",
        y: "0",
        delay: 0.1,
        ease: Power4.easeOut
      }, "close");

    //EVENTS
    openTrigger.on('click', function() {
      if (tlOpen.progress() < 1) {
        tlOpen.play();
        videoBg.css('filter', 'blur(15px)');
      } else {
        tlOpen.restart();
      }
    });

    closeTrigger.on('click', function() {
      if (tlClose.progress() < 1) {
        tlClose.play();
        videoBg.removeAttr('style');
      } else {
        tlClose.restart();
      }
    });

  };

  function mediaSize() {
    /* Set the matchMedia */
    if (window.matchMedia('(max-width: 991.98px)').matches) {
      /* Changes when we reach the min-width  */
      $('#glass').removeAttr('style');
      $('#menu').addClass('mobile');
      mobileMenu();



    } else {
      $('#menu').removeClass('mobile').removeAttr('style');
      $('#glass').removeAttr('style')

    };
  };

  /* Call the function */

  mediaSize();
  /* Attach the function to the resize event listener */
  window.addEventListener('resize', mediaSize, false);



  $('.navLink').click(function(event) {
    var link = $(this).attr('data-link') + '.html';
    var content = $('.content');
    var tlOpen = new TimelineMax({
      paused: true
    });
    var tlClose = new TimelineMax({
      paused: true
    });

    //OPEN TIMELINE
    tlOpen.add("preOpen")
      .to(content, 0.4, {
          scale: 0.3,
          opacity: 0,
          ease: Power2.easeOut,
          onComplete: function() {
            $.ajax({
              url: link,
              success: function(data) {
                $('.content-inner').html(data);
              }
            });
          }
        },
        "preOpen")
      .to(content, 0.8, {
        scale: 1,
        opacity: 1,
        ease: Power4.easeInOut
      }, "+=0.2");




    tlOpen.play();


  });



})(jQuery);

(function($) {
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from: $(this).data('from'),
        to: $(this).data('to'),
        speed: $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals: $(this).data('decimals')
      }, options);

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};

      $self.data('countTo', data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;

          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

jQuery(function($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
    formatter: function(value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
  });

  // start all the timers
  $('.timer').each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }
});