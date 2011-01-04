$(function(){
   //On hover...
  $("#pageflip").hover(
    //Animate and expand the image and the msg_block (Width + height)
    function(){
      $("#pageflip img, .message").stop().animate({width:'90px', height:'90px'}, 500);
    },
    //On hover out, go back to original size 50x52
    function(){
      $("#pageflip img").stop().animate({width:'50px', height:'52px'}, 220);
      $(".message").stop().animate({width:'50px', height:'50px'}, 200); //Note this one retracts a bit faster (to prevent glitching in IE)
    });
});
