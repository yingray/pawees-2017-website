    var $window = $(window);
    var wrap = $(".wrap");
    var logo = $(".logo");
    var secondbanner = $(".secondbanner");


$window.on("scroll", function(e) {
    // console.log(this.scrollY);
    // console.log(wrap.height());
  if (this.scrollY > 45) {
    logo.addClass("logo2");
    secondbanner.addClass("secondbanner2");
  } 
  else {
    logo.removeClass("logo2");
    secondbanner.removeClass("secondbanner2");
  }
  
});



    var nav=$("nav");
    var logo=$(".logo");
    var sandwich=$(".sandwich");
    var fixed_shadowbg=$("div.fixed_shadowbg");

    // 三明治選單收合
    sandwich.click(function(){
      if(nav.hasClass("leftshow")){
        nav.removeClass("leftshow");
        fixed_shadowbg.removeClass("leftshow");
        logo.removeClass("logo2");
      }else{
        nav.addClass("leftshow");
        fixed_shadowbg.addClass("leftshow");
        logo.addClass("logo2");
      }
    });

    // 暗幕點了也會收起來
    fixed_shadowbg.click(function(){
        nav.removeClass("leftshow");
        fixed_shadowbg.removeClass("leftshow");
        logo.removeClass("logo2");
    })


