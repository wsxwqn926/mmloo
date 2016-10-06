(function(){
    var tab = {
        init: function(){
            //初始化属性
            this.navWrapper = $('.cg-content');
            this.navItem = $('.nav-item');

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
            this.navWrapper.hover(function () {
                that.dropWrapper.css({
                    display : "block"
                })
            },function () {
                that.dropWrapper.css({
                    display : "none"
                })
            })
           /* this.navWrapper.onmouseenter = function(){

                that.dropWrapper.style.display = 'block';
            }
            this.navWrapper.onmouseleave = function(){
                that.dropWrapper.style.display = 'none';
            }*/
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
$(function () {
    var banner = {
        init: function () {
            this.list = $(".banner-img ul li");
            this.arrow = $(".arrow");
            this.arrowLeft = $(".arrow-left");
            this.arrowRight = $(".arrow-right");
            this.adTitle = $('.ad-title a')
            this.now = 0;
            this.num = 0;
            this.tiner = null;
            this.autoplay();
            this.mouseover();
            this.leftClick();
            this.rightClick();
            this.circlemove();
        },
        /*定时器*/
        autoplay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.num++;
                that.num%= that.list.length;
                that.fade();
            },2000)
        },
        /*淡出淡入的交替*/
        fade: function () {
           // console.log(this.now , this.num)
            this.list.eq(this.now).fadeOut(1000);
            this.list.eq(this.num).fadeIn(1000);

            this.now =  this.num;
            this.adTitle.eq(this.num).addClass("cur").siblings().removeClass("cur");

        },
        /*鼠标移入移出*/
        mouseover:function () {
            var that = this;
            $(".banner-img").hover(function () {
                clearInterval(that.timer);
                that.arrow.css({
                    display: "block"
                })
            },function () {
                that.autoplay();
                that.arrow.css({
                    display: "none"
                })
            })
        },
        /*点击切换上一张图片*/
        leftClick: function () {
            var that = this;
            this.arrowLeft.click(function () {
                that.num--;
                that.num%= that.list.length;
                if(that.num<=0){
                    that.num=5;
                }
                console.log(that.num)
                that.fade();
            })
        },
        /*点击切换下一张图片*/
        rightClick: function () {
            var that = this;
            this.arrowRight.click(function () {
                that.num++;
                that.num%= that.list.length;
                console.log(that.num)
                that.fade();
            })
        },
        /*鼠标移入切换当前图片*/
        circlemove:function () {
            var that = this;
            this.adTitle.mouseenter(function () {
                that.num = $(this).index();
                that.fade();
            })
        }
    };
    banner.init();
});
(function () {

    $(" .b-f-top ul li:even").css({
        background:"url('img/banner-bottom/zhijiang.png') no-repeat 0 center"

    })
    $(" .b-f-top ul li:odd").css({
        background:"url('img/banner-bottom/tejia.png') no-repeat 0 center"

    })
})();