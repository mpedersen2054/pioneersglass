



function navbarAffix() {
  $('#nav').affix({
    offset: {
      top: $('.splash-image').height()
    }
  });


}


$(document).ready(function() {
  navbarAffix();
  $('img').unveil(300);
});