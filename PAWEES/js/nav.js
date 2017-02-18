    var $window = $(window);
    var wrap = $(".wrap");
    var banner = $(".banner");
    var logo = $(".logo");
    var footer = $("footer");
    var head = $("head");

    var section01 = $(".section01");
    // banner fixed 動畫
    //(section01.outerHeight()-100)
    $window.on("scroll", function(e) {
      if (this.scrollY > 0) {
        banner.addClass("banner2");
      }
      else {
        banner.removeClass("banner2");
      }
    });



    var nav=$("nav");
    var sandwichclick=$(".sandwichclick");
    var sandwich=$(".sandwich");
    var fixed_shadowbg=$("div.fixed_shadowbg");
   
    // 三明治選單收合
    sandwichclick.click(function(){
      if(nav.hasClass("navshow")){ //已經打開
        sandwich.removeClass("sandwich2");
        nav.removeClass("navshow");
      }else{ //還沒打開
        sandwich.addClass("sandwich2");
        nav.addClass("navshow");
      }
    });


    // 暗幕點了全部收起來
    // fixed_shadowbg.click(function(){
    //     nav.removeClass("leftshow");

    //     fixed_shadowbg.removeClass("shadowshow");
    //     logo.removeClass("logo2");

    //     cart_icon.removeClass("cart_icon2");
    //     member_icon.removeClass("member_icon2");
    //     cart_sidebar.removeClass("rightshow");
    //     member_sidebar.removeClass("rightshow");

    //     $(".cart_sidebar_content .products_qty_note").removeClass("products_qty_note2");

    // })



    // 捲回置頂
    // var totop_icon=$(".totop_icon");

    // totop_icon.click(function(){

    //     $('html,body').stop(true,false).animate({scrollTop:0},1000);

    // });



// 因為有可能載入畫面時，剛好停在有動畫元件的位置，這時就寫下面這行，window一載入就觸發scroll事件
$window.trigger('scroll');
