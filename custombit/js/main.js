$( document ).ready(function() {
  console.log('loaded');

  $('.tech-description-link').click(function(e){
    $('.tech-description').hide();
    $('.tech-description-link').removeClass('active')
    $(this).addClass('active');
    $($(this).attr('href')).show();
    e.preventDefault();
  });
  $('.tech-description-link:first').click();


});
