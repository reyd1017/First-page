function dDay(){
    var day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
    }
    document.getElementById("days").innerHTML = "Today is " + day;
    }
    $(document).ready(function(){
      $('.navbar-nav>li>a').on('click',function(){
          if($(this).text().trim() == 'About Me'){
              //do nothing
          }else{
              $('.navbar-collapse').collapse('hide');
          }
      });
          $('.dropdown-menu>li>a').on('click',function(){
              $('.navbar-collapse').collapse('hide');
          });
  });