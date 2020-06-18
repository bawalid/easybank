var state = true;

$(".hamburger").click(function(){
    $(".menu").fadeToggle();
    menuHumberger(state);
});

function menuHumberger(s){
    if (s){
        $(".hamburger").attr("src","./images/icon-close.svg");
        state = false;

    }
    else{
        $(".hamburger").attr("src","./images/icon-hamburger.svg");
        state = true;
    }
}