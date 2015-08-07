
function navbarAffix() {
  $('#nav').affix({
    offset: {
      top: $('.splash-image').height()
    }
  });
}

function searchFormSubmit() {
  var searchForm = $('#search-form');
  var searchInput = $('#search-input');
  searchForm.on('submit', function(e) {
    e.preventDefault();
    window.location.href = 'http://localhost:3000/search?term=' + searchInput.val();
  })
}

$(document).ready(function() {
  navbarAffix();
  searchFormSubmit();
  $('img').unveil(300);
});