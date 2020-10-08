$(document).ready(function() {
    $('#new-tweet-area').keydown(function(){
        var max = 140;
        var len = $(this).val().length;
        $('.counter').text(max - len);
        if (len >= max) {
          $('.counter').addClass('red');
        }
    });
    
    
    $(characterCount).keyup(updateCount);
    $(characterCount).mouseup(updateCount);
    $(characterCount).mouseout(updateCount);
    $(characterCount).change(updateCount);
  });