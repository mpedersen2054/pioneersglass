var $artworksContainers = $('.artworks-container');
var $selectPicker       = $('.selectpicker');
var $searchInput        = $('#search-input');
var $searchForm         = $('#search-form');
var $splashImg          = $('.splash-image');
var $thumbs             = $('.artwork-thumb');
var $nav                = $('#nav');


// navbar affixs once past splashImg
function navbarAffix() {
  $nav.affix({ offset: { top: $splashImg.height() } });
}

// sends to /search?term=xxx on search form submit
function searchFormSubmit() {
  $searchForm.on('submit', function(e) {
    e.preventDefault();
    window.location.href = 'http://localhost:3000/search?term=' + $searchInput.val();
  });
}

// calls chopAndOrder with the value of select's option on change
function selectPickerSort() {
  $selectPicker.on('change', function(e) {
    var spVal = $selectPicker.val();
    e.preventDefault();
    chopAndOrder(spVal);
  });
}

// chop and order artwork-thumbs accordingly
function chopAndOrder(o) {
  $thumbs.detach();

  if (o === 'alphabetical') {
    var newArray = sortThumbArray('peicename');
    newArray.each(function() { return $artworksContainers.append($(this)) });
  }

  if (o === 'artist') {
    var newArray = sortThumbArray('artistname');
    console.log(newArray);
    newArray.each(function() { return $artworksContainers.append($(this)); });
  }

  if (o === 'dateadded') {
    var newArray = sortThumbArray('dateadded');
    newArray.each(function() { return $artworksContainers.append($(this)); });
  }
}

// pass in desired .data(attr) and return sorted array
function sortThumbArray(dataname) {
  var newArray = $thumbs.clone();
  var na = newArray.sort(function(a, b) {
    a = $(a).data(dataname);
    b = $(b).data(dataname);
    if (a > b) { return 1; }
    else if (a < b) { return -1; }
    else { return 0 }
  });
  return na;
}



$(document).ready(function() {
  $selectPicker.selectpicker();
  navbarAffix();
  searchFormSubmit();
  selectPickerSort();
});