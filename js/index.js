/*三级菜单*/
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
/*全屏淡入淡出轮播图*/
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
/*b-f-top*/
(function () {

    $(" .b-f-top ul li:even").css({
        background:"url('img/banner-bottom/zhijiang.png') no-repeat 0 center"

    })
    $(" .b-f-top ul li:odd").css({
        background:"url('img/banner-bottom/tejia.png') no-repeat 0 center"

    })
})();
/*小型上下轮播*/
$(function(){
    var seamless = {
        init:function(){
            this.seamless = $('.seamless');
            this.wrapperUl = this.seamless.find('.wrapper-ul');
            this.list = this.wrapperUl.find('li');
            this.recommendRight = this.seamless.find('.recommend_next')
            this.recommendLeft = this.seamless.find('.recommend_pre')
            this.liLength = $('.wrapper-ul li').length;
            this.heightLi = this.list.eq(0).height();
            this.wrapperUl.css({
                top:-this.heightLi
            });
            this.index = 1;
            this.timer = null;
            this.autoPlay();
            this.move();
            this.leftClick();
            this.rightClick();
            //console.log(this.heightLi)
        },
        autoPlay:function(){
            var that = this;
            this.timer = setInterval(function(){
                //clearInterval(that.timer)
                that.index++;
                that.switchLi();
            }, 2000)
        },
        switchLi:function(){
            var that = this;
            //console.log(that.index)
             //console.log(-that.index*that.heightLi)
            this.wrapperUl.stop().animate({
                top:-that.index*that.heightLi
            },500,function(){
                if(that.index>=that.liLength-3){

                    that.index=1;

                };
                if(that.index<=0){
                    that.index=that.liLength-4
                }
                that.wrapperUl.css({
                    top:-that.index*that.heightLi
                })
            });
        },

         move:function(){
            var that = this;
            this.seamless.hover(function(){
                clearInterval(that.timer);
            },function(){
                that.autoPlay();
            })
        },
        leftClick:function(){
            var that = this;
            this.recommendLeft.click(function(){
                that.index--;
                that.switchLi();
            })
            
        },
         rightClick:function(){
            var that = this;
            this.recommendRight.click(function(){
                that.index++;
                that.switchLi();
               
            })
            
        }
    };
    seamless.init();
})
/*小型左右轮播图*/
$(function(){
    var goods = {
        init:function(){
            this.goodsBox = $('.goods_show_box');
            this.goodsUl = this.goodsBox.find('ul');
            this.goodsLi = this.goodsUl.find('li');
            this.goodsPer = this.goodsBox.find('.goods_show_per')
            this.goodsNext = this.goodsBox.find(".goods_show_next")
            /*克隆li*/
            var lastLi = this.goodsLi.last().clone(true);
            var firstLi = this.goodsLi.first().clone(true);
            //把最后一个元素添加到第一个位置
            this.goodsUl.prepend(lastLi);
            //把第一个元素添加到最后一个位置
            this.goodsUl.append(firstLi);
            //获取li个数
            this.goodsLength = $('.goods_show_box ul li').length;
            //获取li的宽度
            this.goodsWidth = lastLi.width();
            /*改变this.goodsUl宽度*/
            this.goodsUl.width(this.goodsWidth*this.goodsLength);
            //console.log(this.goodsWidth)
            this.goodsUl.css({
                left:-this.goodsWidth
            })
            this.index = 1;
            this.timer = null;
            this.autoPlay();
            this.move();
            this.perClick();
            this.nextClick();
        },
        autoPlay: function(){
            var that =this;
            this.timer = setInterval(function(){
                that.index++;
                that.switchLi();
            }, 2000)
        },
        switchLi:function(){
            var that = this;
            this.goodsUl.stop(true).animate({
                left:-that.index*that.goodsWidth
            }, 500,function(){
                if(that.index>=that.goodsLength-1){
                    that.index=1;
                };
                if(that.index<=0){
                    that.index=that.goodsLength-2
                };
                that.goodsUl.css({
                    left:-that.index*that.goodsWidth
                })
            })
        },
        move:function(){
            var that = this;
            this.goodsBox.hover(function() {
                clearInterval(that.timer)
            }, function() {
                that.autoPlay();
            });
        },
        perClick:function(){
            var that = this;
            this.goodsPer.click(function(){
                that.index--;
                that.switchLi();
            })
        },
         nextClick:function(){
            var that = this;
            this.goodsNext.click(function(){
                that.index++;
                that.switchLi();
                 console.log(that.index)
            })
        }
    };
    goods.init();
});
/*goods_group4*/
$(function(){
    var group4 = {
        init:function(){
            this.goodsGroup4 = $('.goods_group4 ul');
            this.move();
        },
        move:function(){
            var that = this;
            //console.log(this.goodsGroup4.find('.p_goods'))
            this.goodsGroup4.find('li').mouseenter(function(){
               
                $('.goods_group4 ul dl').eq($(this).index()).slideDown()
                $(this).siblings().find('dl').slideUp()
                //console.log(that.index())
                //
                //console.log($(this))
            });
        }
    };
    group4.init();
});
$(function(){
    $('.goods_list li dl .goods-thumb').hover(function() {
        $(this).stop(true).animate({
            top:-4
        }, 500)
    }, function() {
         $(this).stop(true).animate({
            top:0
        }, 500)
    });
})
$(function(){
    $('.show-top ul li').mouseenter(function(){
        $('.commodity_right').eq($(this).index()).css({
            display:'block'
        })
        $('.commodity_right').eq($(this).index()).siblings().css({
            display:'none'
        })
        console.log($('.commodity_right').eq($(this).index()))
    });
})