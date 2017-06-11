$(function() {
  $('#nav-menu').hide();
  menuLoad();
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
});

function menuLoad() {
  $('#nav-menu').fadeIn(750);
}

function clubManagerHover() {
  $('#club-manager').on('mouseenter', function() {
    $('<div id="club-text"><h3>Hockey Club Manager</h3><h6>Technologies used for this project: HTML | CSS | Angular 2 | Firebase</h6><p>The goal of this project was to make use of a persistant database using Firebase and Angularfire for Angular 2. The app has full CRUD functionality, and a password protected admin backend to manage the team. Non-admin users are able to view the full team roster, and click on each member to see more information about that particular player through the use of dynamic routing.</p></div>')
    .css({
      'background-image': 'none',
      'background-color': '#BBBAC6'
    })
    .hide()
    .appendTo($(this))
    .fadeIn(250);
  });
  $('#club-manager').on('mouseleave', function() {
    $('#club-text').fadeOut(250, function() {
      $(this).remove();
    });
  });
}
