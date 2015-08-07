
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
  console.log('jq func called')
  console.log(window.location)
  searchForm.on('submit', function(e) {
    e.preventDefault();
    if (searchInput.val() !== '' || ' ') {
      window.location.href = 'http://localhost:3000/search?term=' + searchInput.val();
    }
  })
}

$(document).ready(function() {
  navbarAffix();
  searchFormSubmit();
  $('img').unveil(300);
});