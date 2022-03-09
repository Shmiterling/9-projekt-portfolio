$(document).ready(function(){
  $('.menu-item a').click(function(e){
    e.preventDefault();
    let point = $(e.target).attr('href');
    $(point)[0].scrollIntoView({behavior: 'smooth'});
  });
});