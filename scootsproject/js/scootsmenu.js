jQuery("document").ready(function($){
    var menuBTn = $(".menu-icon"),
        menu=$(".navigation");
    menuBTn.click(function(){
        if (menu.hasClass("show")){
            menu.removeClass("show");
        } else{
            menu.addClass("show");
        }
    });
    });