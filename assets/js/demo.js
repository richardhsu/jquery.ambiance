/*
 * Demo JavaScript for Ambiance - Notification Plugin for jQuery
 * Copyright (c) 2012 Richard Hsu
 */
 
$(document).ready(function() { 
  $('#demo1').click(function () {
    $.ambiance({message: "This is a test notification."});
  });
  $('#demo2').click(function () {
    $.ambiance({message: "We just sent a notification!", 
            title: "Success!",
            type: "success"});
  });
  $('#demo3').click(function () {
    $.ambiance({message: "Uh oh the fading is gone!", 
                type: "error",
                fade: false});
  });
  $('#demo4').click(function () {
    $.ambiance({message: "Oh man this is a really long notification!", 
                width: 1000,
                timeout: 10});
  });
  $('#demo5').click(function () {
    var button = $(window.document.createElement('button'))
                  .addClass("btn btn-primary")
                  .html("BUTTON IN NOTIFICATION");
    $.ambiance({message: button,
                permanent: true});
  });
  $('#demo6').click(function () {
    $.ambiance({message: "This is permanent! Seriously!",
              permanent: true,
              fade: true,
              timeout: 1});
  });
  $('#demo7').click(function () {
    $.ambiance({message: "You have to close this to remove it. Haha!",
              fade: true,
              timeout: 0});
  });
  $('#demo8').click(function () {
    $.ambiance({message: "Custom styling, you have to define everything!",
                type: "custom",
                timeout: 0});
  });
});
