(function(){
	var tab = {
		init: function(){
			//初始化属性
			this.navWrapper = $('.cg-content');
			this.navItem = $('.nav-item')
			this.dropWrapper = $('.cg-con-drop');
			this.dropItem = $('.drop-item');
			this.pre = 0;
			
			//添加事件
			this.navWrapperHover();
			this.navHover();
		},
		navWrapperHover: function(){
			var that = this;
			//鼠标移到cg-con-nav的盒子里面，三级菜单显示
			this.navWrapper.onmouseenter = function(){
				that.dropWrapper.style.display = 'block';
			}
			this.navWrapper.onmouseleave = function(){
				that.dropWrapper.style.display = 'none';
			}
		},
		navHover: function(){
			var that = this;
			for(var i=0; i<this.navItem.length; i++){
				this.navItem[i].index = i;
				//给选项卡菜单添加鼠标移入事件
				this.navItem[i].onmouseenter = function(){
					//将上一张显示的盒子隐藏掉
					that.dropItem[that.pre].style.display = 'none';
					//当前nav对应的drop-item盒子显示
					that.dropItem[this.index].style.display = 'block';
					that.pre = this.index;
				}
			}
		}
	};
	tab.init();

})();