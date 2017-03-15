$(document).ready(function(){
    (function(){
        console.log($(".r-top-text"));
        //入口函数
        main();
        function main(){
            navscoll();
            //tab();
            calnav();
            buy_ajax();
        }
         
        //采购管理供应商信息
        function buy_ajax(){
            var buy = $('#buymange_btn');
            buy.click(function(){
                $.ajax({
                    type:"GET",
                    url:"../view/buymange.html",
                    dataType:'html',
                    success:function(data){
                        $('#right').html(data);
                    }
                })
            })
        }


    	//导航滑动
        function navscoll(){
              var mySwiper = new Swiper ('.swiper-container', {
                //direction: 'vertical',
                loop: true,
                
                // 如果需要分页器
                pagination: '.swiper-pagination',
                
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                
                // 如果需要滚动条
                //scrollbar: '.swiper-scrollbar',
              })  
        }

    	//选项卡
    	function tab(){
    		var tabbtn = $("#tab>.tab-btn>div"),
    		    tabcard = $("#tab table");

    		    //$("#tab table:gt(1)").hide();
    		    tabbtn.each(function(index){
                    $(this).click(function(){
                    	tabcard.eq(index).show().siblings().hide();
                    })
    		    })
    		    console.log(tabbtn.length+','+tabcard.length)
    	}
    	
        
    	function calnav(){
            //var li = $("#left").find("li");
            var li = $("#top-nav li:has(a)");
            console.log(li);
            li.each(function(index){
                var that = $(this);
                that.click(function(){ 
                    if(that.attr('class') != 'on'){

                        that.addClass('on').siblings().removeClass('on');
                    }     
                    //console.log(liO.eq(0).attr('class'))
                })
            })
    	}
        
    })()
});