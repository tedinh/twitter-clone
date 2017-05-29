$(document).ready(function(){

  $('.tweet-compose').click(function(){
    $(this).css("height", "5em");
  })
  $('.tweet-compose').click(function(){
    $('#tweet-submit').css('visibility', 'visible');
      $('#char-count').css('visibility', 'visible');
  })
i=140;
$('.tweet-compose').keypress(function(){
  $('#char-count').text(i -= 1);
  if (i <= 10){
     $('#char-count').css("color", "red");
  }
  if(i < 0){
    $('#tweet-submit').attr('disabled', 'disabled'``);
  }
});

$('#tweet-submit').click(function(){
  $('.tweet-compose').prependTo($('#main'));
})

});
