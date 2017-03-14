$(document).ready(function(){
	(function(){
		leftnav();
		function leftnav(){
			var liO = $("#left-nav li:has(a)");
			liO.each(function(index){
				//that = $(this);
                liO.eq(index).click(function(){
                	liO.each(function(index2){
                		liO.eq(index2).removeClass('on');
                		liO.eq(index).addClass('on');
                	})
                    //liO不在一个ul中，所以不能用siblings()
                    //if(that.attr('class') != 'on'){
                    //$(this).addClass("on");
                    //liOremoveClass("on");
                    //}
                    console.log($(this).attr('class'))
                })
			})
			console.log(liO.length)
        }
	})()
})