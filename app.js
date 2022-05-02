$(() => {
  //Searched up toggle class and the results were from w3school
// $('.navigation').hover(function(){
//   $(this).toggleClass('navigation-hover')
// })
// I searched up jquery scroll function, results are from jquery.com
$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 300) {
      $('.navigation').addClass('navigation-hover')
    }
    else {
      $('.navigation').removeClass('navigation-hover')
    }
  })
})

$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 50) {
      $('.navigation').addClass('navigation-hover-media')
    }
    else {
      $('.navigation').removeClass('navigation-hover-media')
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
const modal = () => {
  $('.modal-info').toggle('slow')
}
$('#resume-icon').on('click',modal)

let img = 0
const num = $('.carousel-pictures').children().length - 1
$('.next').on('click', () => {
  $('.carousel-pictures').children().eq(img).css('display','none')
  if (img < num) {
    img++
  }
  else {
    img = 0
  }
  $('.carousel-pictures').children().eq(img).css('display','block')
})
$('.previous').on('click', () => {
  $('.carousel-pictures').children().eq(img).css('display','none')
  if (img > 0) {
    img--
  }
  else {
    img = num
  }
  $('.carousel-pictures').children().eq(img).css('display','block')
})

})
