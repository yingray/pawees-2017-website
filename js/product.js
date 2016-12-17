    var $window = $(window);
    var wrap = $(".wrap");
    var header = $("header");


    var product_logo = $(".product_logo div");
    var product_item = $(".product_item");
    var productclass_secondnav = $(".productclass_secondnav");


    product_logo.click(function(){
        product_logo.removeClass("this_productclass");
        $(this).addClass("this_productclass");
    })



    var click_this_animalicon = $(".productclass_secondnav div div");
    var this_animalicon_large = $(".product_item .this_animalicon_large div");
    var this_animalname = $(".this_animalname div");

    click_this_animalicon.click(function(){
        // 先全部移除this_animalicon
        click_this_animalicon.removeClass("this_animalicon");

        // 再抓classname
        var animalicon_name=$(this).attr("class");
        var animal_name=animalicon_name.slice(13);

        // 再變色
        $(this).addClass("this_animalicon");

        // 下面換圖
        this_animalicon_large.removeClass();
        this_animalicon_large.addClass(animalicon_name);

        // 動物名字title
        this_animalname.text(animal_name);



        // 按鈕點擊後往上捲到第二選單(才看得到下面有產品出來)
        $('html,body').stop(true,false).animate({scrollTop:(productclass_secondnav.offset().top - header.outerHeight())},1000);

    });



// 因為有可能載入畫面時，剛好停在有動畫元件的位置，這時就寫下面這行，window一載入就觸發scroll事件
$window.trigger('scroll');

