
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
  });
}

function selectPickerSort() {
  var sp = $('.selectpicker');
  sp.on('change', function(e) {
    e.preventDefault();
    var spVal = sp.val();
    chopAndOrder(spVal);
  });
}

// chop and order artwork-thumbs accordingly
function chopAndOrder(o) {
  var order = o || '';
  var thumbs = $('.artwork-thumb');
  var artworksContainer = $('.artworks-container');

  thumbs.detach();

  if (order === 'alphabetical') {
    // good sort example
    thumbs.sort(function(a, b) {
      a = $(a).data('peicename');
      b = $(b).data('peicename');
      if (a > b) { return 1; }
      else if (a < b) { return -1; }
      else { return 0 }
    });

    thumbs.each(function() { artworksContainer.append(this); });

  }

  if (order === 'artist') {
    console.log('artist!!', tNames)
  }

  if (order === 'type') {
    console.log('type!!', tNames)
  }

  if (order === 'date') {
    console.log('date!!', tNames)
  }

}

$(document).ready(function() {
  $('.selectpicker').selectpicker();
  navbarAffix();
  searchFormSubmit();
  selectPickerSort();
});