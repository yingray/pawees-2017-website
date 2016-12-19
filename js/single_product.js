    var $window = $(window);
    var wrap = $(".wrap");
    var header = $("header");


    var product_logo = $(".product_logo div");
    var productclass_intro_content = $(".productclass_intro_content");
    var productclass_secondnav = $(".productclass_secondnav");
    var product_item = $(".product_item");



    product_logo.click(function(){
        // 全部先移除
        product_logo.removeClass("this_productclass");

        // 取得現在點擊的類別字串
        var product_class_name = $(this).attr("class");
        var product_class_html = product_class_name + ".html" ; //字串串接出檔案名稱

        // 加上新類別換內容
        $(this).addClass("this_productclass");


        // ajax
        // productclass_intro_content.load("ajax/product_animal.html");

        location.href = product_class_html; //暫時先換頁

        console.log(product_class_html);

    })



// 因為有可能載入畫面時，剛好停在有動畫元件的位置，這時就寫下面這行，window一載入就觸發scroll事件
$window.trigger('scroll');


