$(document).ready(function(){
	(function(){
		leftnav();
		function leftnav(){
			var liO = $("#left-nav li:has(a)");
            //liO.eq(0).addClass("on")
			liO.each(function(){
				that = $(this);
                that.click(function(){
                    if(that.attr('class') != 'on'){

                        that.addClass("on").siblings().removeClass("on");
                    }
                    console.log(liO.eq(0).attr('class'))
                })
			})
			console.log(liO.length)
        }
	})()
})