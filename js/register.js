$(function () {
	/*用户名*/
	$('#username').blur(function(){
		var val = $(this).val();
		var that = $(this)
		var p = '手机号格式不正确';
		var p2 = "手机号不能为空";
		var p3 = "该手机号已被使用";
		var reg =/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		judge(val,reg,that,p,p2,p3);
		//console.log(val.length)
	});
	/*密码*/
	$('#password').blur(function(){
		var val = $(this).val();
		var that = $(this);
		var p = '密码格式不正确'
		var p2 = "密码不能为空"
		var reg = /^[a-zA-Z]\w{5,12}$/;
		judge(val,reg,that,p,p2);

		//console.log("^" + val + "=(.*)$")
	})
	/*验证码*/
	$('#captcha').blur(function(){
		var val = $(this).val();
		var that = $(this)
		var code =  $('.code').html()
		var p = "验证码输入错误！@_@"
		var p2 = "验证码不能为空"
		validate(val,that,code,p,p2)
		//console.log("^" + val + "=(.*)$")

	})

	createCode($('.code'))
	$('#aClick').click(function(){
		var codesb = $('.code')
		createCode(codesb)
	})
	/*短信验证*/
	$('#seccode').blur(function(){
		var val = $(this).val();
		var that = $(this);
		var p = "验证码输入错误！@_@"
		var p2 = "验证码不能为空"
		var reg = /^[0-9]{6}$/;
		judge(val,reg,that,p,p2);
	})
	/*立即注册*/
	$("#submit").click(function(){
		var fal =false
		$('.zc_login_centent .tip').each(function(){
			//console.log($(this).is('input[data-date="true"]'))
			//console.log($(this).is('input[dataDate="true"]'))
			if($(this).is('input[data-date="true"]')){
				//console.log(3121)
				fal = true;
				return
			}
		})
		if(fal){
			var userinfo = {
				username: $('#username').val(),
				password: $('#password').val()
			};
			console.log()
			$.cookie('userinfo',JSON.stringify( userinfo ),{expires: 10,path: '/'})

			//跳转到登录页面
			window.location.href = 'index.html';
		}else{
			alert("请完善信息！")
		}
	})
	function judge(val,reg,that,p,p2,p3){
		//验证用户名是否已经存在
		if(that.is('input[name="username"]')){
			//console.log(1)
			$.getJSON('js/data.json',function(result){
				console.log(result);
				var validate = true;
				for(var key in result){
					//console.log(val)
					if(val == result[key].username){
						validate= false;
						break;
					}
				}
				if(!validate) {
					that.addClass('bode');
					that.parent().find('i').show().addClass('error');
					that.parent().find('em').html(p3)
					that.attr('data-date', "false");
				}
			});
		}
		if(val.length==0){
			that.addClass('bode');
			that.parent().find('i').show().addClass('error');
			that.parent().find('em').html(p2);
			that.attr('data-date', "false");
			return
		}else if(!reg.test(val)){
			that.addClass('bode');
			that.parent().find('i').show().addClass('error');
			that.parent().find('em').html(p)
			that.attr('data-date', "false");
			// if()  
	 	}else{
	 		
			that.parent().find('i').show().removeClass('error');
			that.removeClass('bode');
			that.parent().find('em').html('')
			that.attr('data-date', "true");
			
		}
	}
});
// 随机验证码
 function createCode(codesb){
 	var  codes = "";
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
     'S','T','U','V','W','X','Y','Z');//随机数  
     for(var i = 0; i < 4; i++) {//循环操作  
        var index = Math.floor(Math.random()*random.length);//取得随机数的索引（0~35）  
        codes += random[index];//根据索引取得随机数加到code上  
    }  
    codesb.html(codes);//把code值赋给验证码  
 }
 //判断验证码
function validate(val,that,code,p,p2){ 
	//console.log(1)
    if(val.length <= 0) { //若输入的验证码长度为0  
        that.addClass('bode');
		that.parent().find('i').show().addClass('error');
		that.parent().find('em').html(p2)
		that.attr('data-date', "false");
    }         
    else if(val != code ) { //若输入的验证码与产生的验证码不一致时  
       that.addClass('bode');
        that.parent().find('i').show().addClass('error');
		that.parent().find('em').html(p2)
		that.attr('data-date', "false");
    }         
    else { //输入正确时  
        that.parent().find('i').show().removeClass('error');
		that.removeClass('bode');
		that.parent().find('em').html('')
		that.attr('data-date', "true");
    }             
}  