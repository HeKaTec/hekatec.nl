function urlSpecificActions() {
  var url = document.location.toString();
  if (location.pathname == "/") {
    setFullImageSize();
  } else if (url.match('contact')) {
    setMapSize();
  } else if (url.match('rvs') || url.match('aluminium') || url.match('projecten') || url.match('irrigatie') || url.match('industrie')) {
    setProjectenSize();
  }
}

function setFullImageSize() {
  $('.caption').slideUp(0);
  var fullImage = document.getElementsByClassName("full_image")[0];
  var footerHeight = document.getElementsByClassName("footer")[0].offsetHeight;
  var windowHeight = $(window).height();
  var fullImageContainerHeight = windowHeight - footerHeight - 120;
  if (fullImageContainerHeight > 200) {
    $(".full_image_container").height(fullImageContainerHeight);
  }
  if (fullImage.offsetHeight < fullImageContainerHeight) {
    fullImage.style.width = "auto";
    fullImage.style.height = "100%";
  } else {
    fullImage.style.width = "100%";
    fullImage.style.height = "auto";
  }
  $('.caption').slideDown(3000);
}

function setMapSize() {
  var windowHeight = $(window).height();
  var bodyHeight = $('body').height();
  var mapHeight = $(".map").height();
  var newMapHeight = windowHeight - bodyHeight + mapHeight;
  if (newMapHeight < 300) {
    newMapHeight = 300;
  }
  $('.map').height(newMapHeight);
}

function setProjectenSize() {
  var windowHeight = $(window).height();
  var footerHeight = $('.footer').height();
  var newHeight = windowHeight - footerHeight - 120;
  if (newHeight < 300) {
    newHeight = 300;
  }
  $('#projecten').css('max-height', newHeight);
  $('.project-image').css('max-height', newHeight);
}

$(document).ready(function () {
  urlSpecificActions();
  $('#firstImpression').carousel({interval: 4000});
});

$(window).resize( function() {
  urlSpecificActions();
});
