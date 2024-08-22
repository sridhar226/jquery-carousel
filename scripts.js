// scripts.js
$(document).ready(function() {
  const $carousel = $('#carousel');
  const $slides = $('.carousel-slide');
  const slideWidth = $slides.first().outerWidth();
  const totalSlides = $slides.length;
  const slidesToShow = 3;
  let currentIndex = 0;
  let interval;

  function updateSlidePosition() {
    const offset = -currentIndex * slideWidth;
    $carousel.css('transform', `translateX(${offset}px)`);
    updateIndicators();
  }

  function showNextSlide() {
    if (currentIndex < totalSlides - slidesToShow) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first slide
    }
    updateSlidePosition();
  }

  function showPrevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - slidesToShow; // Loop to the last slide
    }
    updateSlidePosition();
  }

  function updateIndicators() {
    $('.indicator').each(function(index) {
      if (index === currentIndex) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }

  $('#nextBtn').on('click', function() {
    clearInterval(interval);
    showNextSlide();
  });

  $('#prevBtn').on('click', function() {
    clearInterval(interval);
    showPrevSlide();
  });

  $('.indicator').on('click', function() {
    clearInterval(interval);
    currentIndex = parseInt($(this).attr('data-slide'));
    updateSlidePosition();
  });

});
