$(document).ready(function(){
  var showParams = false;
  $('#showParams').click(function(e){
    e.preventDefault();
    if (!showParams) {
      $('.params').removeClass('hidden');
      $('#showParams i').removeClass('fa-caret-down');
      $('#showParams i').addClass('fa-caret-up');
    } else {
      $('.params').addClass('hidden');
      $('#showParams i').removeClass('fa-caret-up');
      $('#showParams i').addClass('fa-caret-down');
    }
    showParams = !showParams;
  });
  var showNav = false;
  $('#showNav').click(function(e){
    e.preventDefault();
    $('.main-content .nav-bar').clone().appendTo('.main-content .nav-bar-adap');
    $('.main-content .nav-bar-adap').fadeIn();
    $('.main-content .nav-bar-adap .nav-bar').fadeIn(0);
    $("html,body").css("overflow","hidden");
    $('.main-content .nav-bar-adap .nav-bar').click(function(e){
      e.stopPropagation();
    });
  });
  $('.main-content .nav-bar-adap').click(function(e){
    $('.main-content .nav-bar-adap').html('');
    $('.main-content .nav-bar-adap').fadeOut();
    $("html,body").css("overflow","auto");
  });
  var menuDown = false;
  $('#menuDown').click(function(e){
    e.preventDefault();
    if (!menuDown) {
      $('.header .nav-list').clone().appendTo('.header .nav-list-adap');
      $('.header .nav-list-adap').css('display','block');
      $('.header .nav-list-adap .nav-list a').css('display','block');
      $('.header .nav-list-adap .active').remove();
      $('.header .nav-list-adap #menuDown').remove();
      $('#menuDown i').removeClass('fa-chevron-circle-down');
      $('#menuDown i').addClass('fa-chevron-circle-up');
      $('.header .nav-list-adap .nav-list').css('height','100%');
    } else {
      $('.header .nav-list-adap').html('');
      $('.header .nav-list-adap').fadeOut(0);
      $('#menuDown i').removeClass('fa-chevron-circle-up');
      $('#menuDown i').addClass('fa-chevron-circle-down');
    }
    menuDown = !menuDown;
  });
});