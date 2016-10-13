/*三级菜单*/
(function(){
    var tab = {
        init: function(){
            //初始化属性
            this.navWrapper = $('.cg-content');
            this.navItem = $('.nav-item');
            this.cgTitle = $('.categorys')
            this.dropWrapper = $('.cg-con-drop');
            this.dropItem = $('.drop-item');

            this.pre = 0;

            //添加事件
            this.navWrapperHover();
            this.navHover();
            console.log(1)
            this.cgTitlemove();
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
           
        },
        cgTitlemove:function(){
            var that = this
            this.cgTitle.hover(function(){
                that.navWrapper.show();
            },this.cgTitle.onmouseleave = function(){
                that.navWrapper.hide();
            })
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
(function(){
    var goodsLeft={
        init:function(){
            this.xqCenten = $('#xq_centen');
            this.xqabg = this.xqCenten.find('.xq_goods_abg')
            this.goodsLeft = $('.xq_goods_t_left');
            this.xQgoodsImg = this.goodsLeft.find('.xq_goods_img')
            this.goodsImg = this.goodsLeft.find('.xq_goods_img img');
            this.goodsUl = this.goodsLeft.find('ul')
            this.goodsLi = this.xqCenten.find('.xq_goods_t_left li');
            this.goodsAs =  this.xqCenten.find('.clearfix a')
            this.xqGoodsShut = this.xqCenten.find(".xq_goods_shut");
            this.freight = this.xqCenten.find('.xq-freight-dt-1');
            this.xqQuShow =this.xqCenten.find('.xq-qu-show')
            /*商品数量*/
            this.quantity = this.xqCenten.find("#quantity")
            /*增加*/
            this.increase =this.xqCenten.find(".increase")
            /*减少*/
            this.decrease = this.xqCenten.find(".decrease")

            this.ncsKjzp = this.goodsLeft.find('.ncs_kjzp')
            /*购物车*/
            this.addcart= this.xqCenten.find(".addcart")
            /*切换按钮*/
            this.cut = this.xqCenten.find('.cut');
            this.cutLeft = this.xqCenten.find(".xq_gs_left");
            this.cutRight = this.xqCenten.find(".xq_gs_right");
            this.index = 0;
            this.move();
            this.clickLi();
            this.clickShut();
            this.xgoodsImg();
            this.numAdd();
            this.numReduce();
            this.input();
            this.addCart();
            this.movesChover();
            this.clickLeft();
            this.clickRight();
            this.freiGht();
            this.clickAabg();
        },
        /*鼠标移入li给a添加一个类*/
        move:function(){

            var that = this
            var index = 0
            this.goodsLi.click(function(){
                that.index = $(this).index();
               that.fade($(this))
            });
        },
          /*图片的交替*/
        fade: function (thats) {
            var that = this;
           // console.log(this.now , this.num)
            
            if(this.index<0){
                this.index=4
            }
            if(this.index>4){
                this.index=0
            }
            this.goodsImg.attr({
                src:that.goodsLi.eq(that.index).find('img').attr('src')
            });
            //console.log(this.index)
            this.goodsLi.eq(that.index).find('a').addClass('optFor')
            this.goodsLi.eq(that.index).siblings().find('a').removeClass('optFor')
        },
        /*切换按钮*/
        movesChover:function(){
            var that = this;
            this.xqabg.hover(function(){
                that.cut.show();
            },function(){
                that.cut.hide();
            })
        },
        /*点击切换按钮切left换图片*/
        clickLeft:function(){
            var that = this;
            this.cutLeft.on("click",function(){
                that.index--;
                that.fade();
            });
        },
        /*点击切换按钮切right换图片*/
        clickRight:function(){
            var that = this;
            this.cutRight.on("click",function(){
                that.index++;
                that.fade();
            });
        },
        /*鼠标移入显示地区*/
        freiGht:function(){
            var that = this;
            this.freight.hover(function(){
                that.xqQuShow.addClass('xq-tope')
            },function(){
                that.xqQuShow.removeClass('xq-tope')
            })
        },
        clickAabg:function(){
            this.xqQuShow.find('a').click(function(){
                $('#ncrecive').html($(this).html())
                $('.transport_price').hide();
                $('#loading_price').show();
                //$('#loading_price').delay(6000).hide();
                setTimeout(function(){
                    $('#loading_price').hide();
                     $('.transport_price').show();
                }, 500)
            })
        },
        /*点击li*/
        clickLi:function(){
            var that = this;
            this.goodsLi.click(function(){
                that.change(1);
            });
        },
        change:function(index){
            if(index==1){
                this.xQgoodsImg.stop().animate({
                    width:1200,
                    height:620,
                    marginTop:-50
                }, 500);
                 this.goodsImg.stop().animate({
                    width:450,
                    height:450
                 },500);
                 this.goodsUl.stop().animate({
                    width:1100,
                    bottom: -150
                 },500);
                 this.ncsKjzp.css({
                    visibility:'hidden'
                 });
                 this.xqCenten.animate({
                    marginBottom:200
                 },500);
                 this.xqGoodsShut.show()
            }else if(index==2){
                this.xQgoodsImg.stop().animate({
                    width:360,
                    height:360,
                    marginTop:0
                }, 500);
                 this.goodsImg.stop().animate({
                    width:360,
                    height:360
                 },500);
                 this.goodsUl.stop().animate({
                    width:380,
                    bottom: 2
                 },500)
                 this.ncsKjzp.css({
                    visibility:'visible'
                 })
                 this.xqCenten.animate({
                    marginBottom:10
                 },500);
                 this.xqGoodsShut.hide()
            }
        },
        clickShut: function(){
            var that = this;
            this.xqGoodsShut.click(function(){
                that.change(2)
            })
        },
        xgoodsImg:function(){
            var that = this;
            this.goodsImg.click(function(){
                that.change(1);
            });
        },
            //增加商品数量
        numAdd: function(){
            var that = this;
            this.increase.click(function(){
                //让num-input的值+1
                var amount = parseInt( that.quantity.val() );//获取到的是一个字符串
                //判断库存
                if(amount >= 999){
                    return;
                }
                amount++;
                that.quantity.val(amount);
            });
        },
        //减少商品数量
        numReduce: function(){
            var that = this;
            this.decrease.click(function(){
                //让num-input的值-1
                var amount = parseInt( that.quantity.val() );//获取到的是一个字符串
                //判断下边界
                if(amount <= 1){
                    return;
                }
                amount--;
                that.quantity.val(amount);
            });
        },
        //直接输入
        input: function(){
            //实时监控文本的值是否发生变化
            this.quantity.on('input propertychange',function(){
                var amount = $(this).val();
                //判断是否超过边界
                if(amount <= 0){
                    amount = 1;
                }else if(amount > 999){
                    amount = 999;
                }
                //判断输入是否含有非数字字符
                var reg = /^\d+$/;
                if(!reg.test(amount)){
                    amount = 1;
                }

                $(this).val(amount);
            });
        },
        addCart: function(){
            var that = this
            this.addcart.click(function(){
                
                //读取cookie
                var cart = $.cookie('mls-cart') || '{}';
                cart = JSON.parse(cart);

                var goodsId = $('.optFor').data('gid');
                var amount = that.quantity.val();
                console.log($('.optFor').data('gid'))
                //判断cart中是否已经存在当前商品
                if(!cart[goodsId]){
                    cart[goodsId] = {
                        goodsId: goodsId,
                        goodsAmount: parseInt( amount )
                    };
                }else{
                    cart[goodsId].goodsAmount += parseInt(amount);
                }

                //写到cookie中
                $.cookie('mls-cart',JSON.stringify( cart ),{expires: 365,path:'/'});
                //console.log(JSON.parse( $.cookie('mls-cart') ) );
                if(confirm('添加成功，是否查看购物车')){
                   window.location.href = 'cart.html';
                }
                /*var dog = {};
                if(!dog['name']){
                    dog['name'] = '哈士奇';
                }*/
            });
        }

    };
    goodsLeft.init();
})()