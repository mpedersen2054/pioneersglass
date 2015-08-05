

function navbarAffix() {
  $('#nav').affix({
    offset: {
      top: $('.splash-image').height()
    }
  });


}

navbarAffix();
