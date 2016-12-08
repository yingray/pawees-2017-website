    var $window = $(window);
    var wrap = $(".wrap");
    var banner = $(".banner");
    var logo = $(".logo");

    // banner fixed 動畫 
    $window.on("scroll", function(e) {
      if (this.scrollY > 0) {
        banner.addClass("banner2");
      } 
      else {
        banner.removeClass("banner2");
      }
    });



    var nav=$("nav");
    var sandwich=$(".sandwich");
    var fixed_shadowbg=$("div.fixed_shadowbg");

    // 三明治選單收合
    sandwich.click(function(){
      if(nav.hasClass("leftshow")){
        nav.removeClass("leftshow");
        fixed_shadowbg.removeClass("leftshow");
        logo.removeClass("logo2");
        sandwich.removeClass("sandwich2");

        $window.trigger('scroll'); /*觸發scroll看本來有沒有fixed banner*/

      }else{
        nav.addClass("leftshow");
        fixed_shadowbg.addClass("leftshow");
        logo.addClass("logo2");
        sandwich.addClass("sandwich2");

        banner.removeClass("banner2");

      }
    });

    // 暗幕點了也會收起來
    fixed_shadowbg.click(function(){
        nav.removeClass("leftshow");
        fixed_shadowbg.removeClass("leftshow");
        logo.removeClass("logo2");
        sandwich.removeClass("sandwich2");
    })



// 因為有可能載入畫面時，剛好停在有動畫元件的位置，這時就寫下面這行，window一載入就觸發scroll事件
$window.trigger('scroll');

