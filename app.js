$(() => {
  //Searched up toggle class and the results were from w3school
$('.navigation').hover(function(){
  $(this).toggleClass('navigation-hover')
})
// I searched up jquery scroll function, results are from jquery.com
$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 30) {
      $('.navigation').addClass('navigation-hover')
    }
    else {
      $('.navigation').removeClass('navigation-hover')
    }
  })
})

$('.dropdown').click(function(){
  $('.list').toggleClass('duty')
})
//w3school shows how to use slideToggle function.
$(document).ready(function(){
  $("#icon").click(function () {
    $('.slide-menu').slideToggle('slow')
  })
})
})
