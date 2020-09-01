
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  var collapsibleElem = document.querySelectorAll('.collapsible');
  var collapsibleInstance = M.Collapsible.init(collapsibleElem);

  $(document).ready(function(){
    $('.carousel').carousel();
  });
  $('.sub').click(function(){
    $(this).toggleClass("sublocked");
    $(this).toggleClass("sub");
  });
