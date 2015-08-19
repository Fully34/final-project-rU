$(document).ready(function(){

  // $('body').on('click', function() {

  //   console.log('jquery engage!');
  // });
  
  $(window).scroll(function() {

    if ($(this).scrollTop() < 100)  {

        $("#footer").hide();

    } else {
      
        $("#footer").show();
    }
  });
});