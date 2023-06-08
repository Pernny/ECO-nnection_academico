$(document).ready(function () {
  var startX;
  var endX;
  var threshold = 50; // Minimum distance required for swipe

  var currentSectionIndex = 0;
  var totalSections = $('.profile-section').length;

  // Show the initial active section
  $('.profile-section').eq(currentSectionIndex).addClass('active-section');
  $('.dot').eq(currentSectionIndex).addClass('active');

  // Handle mouse down event
  $(document).on('mousedown touchstart', function (e) {
    startX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
  });

  // Handle mouse up event
  $(document).on('mouseup touchend', function (e) {
    endX = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.pageX;

    var deltaX = endX - startX;

    if (deltaX >= threshold) {
      changeSection('prev');
    } else if (deltaX <= -threshold) {
      changeSection('next');
    }
  });

  // Handle dot menu click event
  $('.dot').on('click', function () {
    var dotIndex = $(this).index();
    changeSection(dotIndex);
  });

  function changeSection(index) {
    $('.profile-section').eq(currentSectionIndex).removeClass('active-section');
    $('.dot').eq(currentSectionIndex).removeClass('active');

    if (index === 'prev') {
      currentSectionIndex = (currentSectionIndex - 1 + totalSections) % totalSections;
    } else if (index === 'next') {
      currentSectionIndex = (currentSectionIndex + 1) % totalSections;
    } else {
      currentSectionIndex = index;
    }

    $('.profile-section').eq(currentSectionIndex).addClass('active-section');
    $('.dot').eq(currentSectionIndex).addClass('active');
  }

  // Handle dragging event
  $('.container').on('mousemove touchmove', function (e) {
    var currentX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
    var deltaX = currentX - startX;

    if (Math.abs(deltaX) >= threshold) {
      if (deltaX > 0) {
        changeSection('prev');
      } else {
        changeSection('next');
      }

      startX = currentX;
    }
  });
});
