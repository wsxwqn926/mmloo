$(function  () {
	var enter = {
		init:function(){
			this.login = $('.dl-logoin-centent');
			this.test = this.login.find('.text');
			this.buttons = this.login.find('.dl-login-submit');
			this.username = this.login.find('#username');
			this.password = this.login.find('#password')
			this.cheat = this.login.find('#cheat')
			this.sin();
			this.outuser();
			this.button();
			this.outpass();
		},
		sin: function(){
			this.test.focusin(function(){
				//console.log(0)
				$(this).addClass('dl-login-tip')
			});
		},
		outuser: function(){
			var that = this;
			this.username.focusout(function(){
				//console.log(0)
				var val = $(this).val()
				$(this).removeClass('dl-login-tip')
				that.judge('',val,$(this))
			});
		},
		outpass: function(){
			var that = this;
			this.password.focusout(function(){
				//console.log(0)
				var val = $(this).val()
				$(this).removeClass('dl-login-tip')
				that.judge('',val,$(this))
			});
		},
		judge: function (argument,val,that) {
			//console.log(argument,that)
			if(val.length<=0){
				that.parent().find('.error').html(argument)
			}else{
				that.parent().find('.error').html('')
			}
		},
		button:function(){
			var that = this;
			var index = 0;
			this.buttons.click(function(){
				console.log(that.username.val(),that.username)
				that.judge('密码不能为空',that.username.val(),that.username);
				that.judge('密码不能为空',that.password.val(),that.password);
				var username = $('input[name="username"]').val();
				var password = $('input[name="password"]').val();
				//读取cookie
				var userinfo = $.cookie('userinfo') || '{}';
				userinfo = JSON.parse( userinfo);
				console.log(userinfo.username,userinfo.password)
				if(username != userinfo.username || password != userinfo.password) {
					alert('用户名或者密码不正确');
					return;
				}else{	
					alert('登录成功');
					window.location.href = 'index.html';
				}
			});
		}
	};
	enter.init();
})