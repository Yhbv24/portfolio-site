$(function() {
  $('#nav-menu').hide();
  $('#ham-menu').hide();
  $('.project-info').hide();
  menuLoad();
  menuToggle();
  hamMenuToggle();
  smoothScroll();
  projectInfoShow();
  projectInfoClose();
  showTitlesOnScroll();
});

function menuLoad() {
  $('#nav-menu').fadeIn(750);
}

function hamMenuToggle() {
  var clicked = false;
  $('#ham-menu').on('click', function() {
    if (!clicked) {
      clicked = true;
      $(this).css({
        'transform': 'rotate(-90deg)',
        'transition': '0.5s',
        'margin-top': '7px'
      });
      $('#home, #work, #about').css({
        'position': 'relative'
      });
      $('#home, #work, #about').animate({
        left: '200px'
      });
      $('#ham-menu-items').css({
        'display': 'block',
      })
      .animate({
        left: 0
      });
    } else {
      clicked = false;
      $(this).css({
        'transform': 'rotate(0deg)',
        'transition': '0.5s',
        'margin-top': '7px'
      });
      $('#home, #work, #about').css({
        'position': 'relative'
      });
      $('#home, #work, #about').animate({
        left: '0'
      });
      $('#ham-menu-items').css({
        'display': 'none',
      })
      .animate({
        left: '-200px'
      });
    }
  });
}

function menuToggle() {
  if ($(window).width() < 1024) {
    $('#nav-reg-menu').hide();
    $('#ham-menu').show();
  } else {
    $('#nav-reg-menu').show();
    $('#ham-menu').hide();
  }
  $(window).on('resize', function() {
    if ($(window).width() < 1024) {
      $('#nav-reg-menu').hide();
      $('#ham-menu').show();
    } else {
      $('#nav-reg-menu').show();
      $('#ham-menu').hide();
    }
  });
}

function smoothScroll() {
  $(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }
    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate({scrollTop: pos});
  });
}

function projectInfoShow() {
  $('#club-manager .learn-more-button').on('click', function() {
    $('#club-manager .project-info').slideToggle();
    $('#club-manager .close-learn-more').animate({
      opacity: 1
    }, 500);
  });
  $('#bob-ross .learn-more-button').on('click', function() {
    $('#bob-ross .project-info').slideToggle();
    $('#bob-ross .close-learn-more').animate({
      opacity: 1,
    }, 500).addClass('open-rotate').removeClass('close-rotate');
  });
  $('#shoe-manager .learn-more-button').on('click', function() {
    $('#shoe-manager .project-info').slideToggle();
    $('#shoe-manager .close-learn-more').animate({
      opacity: 1
    }, 500);
  });
  $('#message-board .learn-more-button').on('click', function() {
    $('#message-board .project-info').slideToggle();
    $('#message-board .close-learn-more').animate({
      opacity: 1
    }, 500);
  });
}

function projectInfoClose() {
  $('#club-manager .close-learn-more').on('click', function() {
    $('#club-manager .project-info').slideToggle();
    $('#club-manager .close-learn-more').animate({
      opacity: 0
    }, 500);
  });
  $('#bob-ross .close-learn-more').on('click', function() {
    $('#bob-ross .project-info').slideToggle();
    $('#bob-ross .close-learn-more').animate({
      opacity: 0
    }, 500).addClass('close-rotate').removeClass('open-rotate');
  });
  $('#shoe-manager .close-learn-more').on('click', function() {
    $('#shoe-manager .project-info').slideToggle();
    $('#shoe-manager .close-learn-more').animate({
      opacity: 0
    }, 500);
  });
  $('#message-board .close-learn-more').on('click', function() {
    $('#message-board .project-info').slideToggle();
    $('#message-board .close-learn-more').animate({
      opacity: 0
    }, 500);
  });
}

function showTitlesOnScroll() {
  $(window).scroll(function(i) {
    if ($(window).scrollTop() >= 100) {
      $('#club-manager h3').css({
        'display': 'inline'
      });
      setTimeout(function() {
        $('#bob-ross h3').css({
          'display': 'inline'
        });
      });
    }
  });
}
