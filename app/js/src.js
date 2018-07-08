$('.product-preview__main-image').each(function(){
  $('img', this).eq(0).addClass('active');
})
$('[data-img-thumb]').on('click', function(){
  var imgIndex = $(this).data('img-thumb');
  var collectionIndex = $(this).data('collection');
  $('[data-img][data-collection="'+collectionIndex+'"]').removeClass('active');
  $('[data-img="'+imgIndex+'"][data-collection="'+collectionIndex+'"]').addClass('active');
})

$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });
});

$('.counter').each(function(){
  $this = this;
  var count = 0;
  $('.minus', this).on('click', function(){
    count = $('input', $this).val()*1;
    count--;
    if(count<1) {
      count = 0;
    }
    $('input', $this).val(count)
  })
  $('.plus', this).on('click', function(){
    count++;
    $('input', $this).val(count)
  })
})
 
