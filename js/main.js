$(window).load(function() {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали', // Set a custom before label
    after_label: 'Со скинали'  // Set a custom after label
  });
  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  $('.menu-button').on('click', function(){
    $('.menu').toggleClass('menu_active')
  });

  /* Настройка select */
  $('.select').on('click', function(){
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function(){
    var value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select__checked').text(value);
  });
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top -220 + "px" });
    return false;
  });
  $('[type="tel"]').mask("+7 (999) 999-99-99");
  /* Показывать карту только когда докрутили до неё */
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae37780718c7b6150a513e75aae8ce2f9864729bd610808cb0079b61f399b59cf&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
  });
});