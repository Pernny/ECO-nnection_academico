$(document).ready(function () {
  var totalSections = $('.container-content').length;
  var currentSectionIndex = 0;

  // Generate dot menu dynamically
  for (var i = 0; i < totalSections; i++) {
    $('.dot-menu').append('<span class="dot"></span>');
  }

  // Show the initial active section
  $('.container-content').eq(currentSectionIndex).addClass('active-section');
  $('.dot').eq(currentSectionIndex).addClass('active');

  // Handle dot menu click event
  $('.dot').on('click', function () {
    var dotIndex = $(this).index();
    changeSection(dotIndex);
  });

  function changeSection(index) {
    $('.container-content').removeClass('active-section');
    $('.dot').removeClass('active');

    currentSectionIndex = index;

    $('.container-content').eq(currentSectionIndex).addClass('active-section');
    $('.dot').eq(currentSectionIndex).addClass('active');
  }
});
