
//control-TEMDE-login
    $(function(){
        $(".TEMDE-loginpage .login input.btn").click(function(){
            event.preventDefault();
            $('.TEMDE-loginpage').fadeOut(2000);
        });
    });


    //validate form
    $('.submitbtnnn').on("click",function(event){

        event.preventDefault();

        var val1 = $('#account').val();
        var val2 = $('#password').val();
        var rule1= /^\D{6,20}$/;
        var rule2= /^([a-zA-Z0-9_\.\-\+]){6,20}$/;
        
        if(val1.search(rule1) || val1==''){
            alert('帳號：請至少輸入6個英文字母');
            return false;
        };
        if(val2.search(rule2) || val2==''){
            alert('密碼：請至少輸入6個英文字母或數字');
            return false;
        };

        $('.TEMDE-loginpage').fadeOut();           

    });



//control-TEMDE-pagestruct-showhide
    $(".TEMDE-menu a").on('click', function(event) {

        event.preventDefault();

        $('.TEMDE-main-side-menu a').parent().removeClass('active');
        $(this).parent().addClass('active');

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $(hash).siblings().fadeOut();
            $(hash).fadeIn();

            var TEMDEmenu_Second_ulli = $('.TEMDE-menu .ul-li-items:nth-child(2)');

            if($(TEMDEmenu_Second_ulli).hasClass('active')){

                //原先iframe內的chart.js因$hash fadeout,無法loading,用src再次抓取自己的src。
                var iframe_uiineteract = $('#iframe_uiineteract');
                src=iframe_uiineteract.attr('src');
                iframe_uiineteract.attr('src',src);
            }

        }

    });
    $(".TEMDE-vision a").on('click', function(event) {

        event.preventDefault();

        $('.TEMDE-main-side-menu a').parent().removeClass('active');
        $(this).parent().addClass('active');

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $(hash).siblings().fadeOut();
            $(hash).fadeIn();

        }
    });


//control-TEMDE-RWD
    $(function(){

        var TEMDE_RWD_Desktop = $('.TEMDE-topcontrol .TEMDE-devicewidth-ul .TEMDE-devicewidth-ul-li .desktoplogo'),
            TEMDE_RWD_ipad = $('.TEMDE-topcontrol .TEMDE-devicewidth-ul .TEMDE-devicewidth-ul-li .ipadlogo'),
            TEMDE_RWD_mobile = $('.TEMDE-topcontrol .TEMDE-devicewidth-ul .TEMDE-devicewidth-ul-li .mobilelogo'),
            IframeWidth = $('.iframewidth');

        $(TEMDE_RWD_Desktop).click(function(event){
            event.preventDefault();
            $(this).parent().siblings().children().removeClass('active');
            $(this).addClass('active');
            $(IframeWidth).animate({
                width: "1200px",
                height: "auto"
            },{
                duration: 300,
                specialEasing: {
                    width: "linear",
                    height: "easeOutBounce"
                }
            });
        });

        $(TEMDE_RWD_ipad).click(function(event){
            event.preventDefault();
            $(this).parent().siblings().children().removeClass('active');
            $(this).addClass('active');
            $(IframeWidth).animate({
                width: "768px",
                height: "auto"
            },{
                duration: 300,
                specialEasing: {
                    width: "linear",
                    height: "easeOutBounce"
                }
            });
        });

        $(TEMDE_RWD_mobile).click(function(event){
            event.preventDefault();
            $(this).parent().siblings().children().removeClass('active');
            $(this).addClass('active');
            $(IframeWidth).animate({
                width: "375px",
                height: "auto"
            },{
                duration: 300,
                specialEasing: {
                    width: "linear",
                    height: "easeOutBounce"
                }
            });
        });
    })



//control-gethtml
// function _getHTML(){
//     // var htmlId = config.htmlId;

//     $.ajax({
//         url: 'ui-templatedesign-temp.html',
//         async: false,
//         datatype : 'json',
//         data : '',
//         type: 'post',               
//         success:function() {
//             // config.callback(json);
//             console.log('hi');
//         },
//         error : function(){
//             console.log('_getHTML 取得錯誤');
//         }
//     });

// }

// _getHTML();


////////////////////////////////////////////////////////////



//control-TEMDE-Funccontroller-draggable
    $(function() {
        $("#TEMDE-function-controller").draggable();
    });



//control-TEMDE-Funccontroller-opencloseStyleFunc
    $('.TEMDE-funccontrol-items .openclose-block').on('click', function(event) {

        $(this).toggleClass('active');

        var dfbtItems = $(this).parents('.TEMDE-func-btn-yesno');

        if ( dfbtItems.hash !== "") {

            event.preventDefault();

            var hash = dfbtItems.attr('data-func-btn-type');

            $(hash).slideToggle();

        }
    });



//showFunc
    $(function(){
        var labelShow = $('.ui-designtemplate-all .labeltag'),
            picShow = $('.ui-designtemplate-all .pic'),
            titleShow = $('.ui-designtemplate-all .title'),
            textShow = $('.ui-designtemplate-all .text'),
            listShow = $('.ui-designtemplate-all .ol-items'),
            buttonShow = $('.ui-designtemplate-all .btnnn-ul'),
            linkShow = $('.ui-designtemplate-all .alink');
    
        var Shows = {

            ShowLabel: function(event){
                $(labelShow).toggle();
            },
            ShowPic: function(event){
                $(picShow).toggle();
            },
            ShowTitle: function(event){
                $(titleShow).toggle();
            },
            ShowText: function(event){
                $(textShow).toggle();
            },
            ShowList: function(event){
                $(listShow).toggle();
            },
            ShowButton: function(event){
                $(buttonShow).toggle();
            },
            ShowLink: function(event){
                $(linkShow).toggle();
            }
            
        };

        $('input[data-show]').on("click",function(event){

            var Showlink = $(this);
            Show = Showlink.data("show");

            if( typeof Shows[Show] === "function"){
                Shows[Show].call(this,event);
            }
        });

    })



//showItemsAmount
    //showItems_text
        var textnuminput = $('input[name="textnumr"]');
        // console.log(btnnuminput);

        textnuminput.bind("enterKey",function(e){
            
            //do stuff here

            var textVal = $('input[name="textnumr"]').val();
            var i = textVal;

            if( 4 <= textVal ){

                alert('No more than the max number: 3!');
                return false;

            }else if( textVal < 1 ){

                alert('No less than the min number: 1!');
                return false;

            }else{

                $('.ui-designtemplate-all').each(function(){

                    var html='';

                    for(var i = 0; i < textVal; i++){ 
                        html += '<p>純文字'+(i+1)+'</p>';
                    }
                    $(".text").html(html);

                })

            }

        });

        textnuminput.keyup(function(e){
            if(e.keyCode == 13){
                $(this).trigger("enterKey");
            }
        }); 


    //showItems_list
        var listnuminput = $('input[name="listnumr"]');
        // console.log(btnnuminput);

        listnuminput.bind("enterKey",function(e){
            
            //do stuff here

            var listVal = $('input[name="listnumr"]').val();
            var i = listVal;

            if( 4 <= listVal ){

                alert('No more than the max number: 3!');
                return false;

            }else if( listVal < 1 ){

                alert('No less than the min number: 1!');
                return false;

            }else{

                $('.ui-designtemplate-all').each(function(){

                    var html='';

                    for(var i = 0; i < listVal; i++){ 
                        html += '<li class="ol-li-items" ui-TEMDE-ol-items-li="ol-items-li">第'+(i+1)+'點</li>';
                    }
                    $(".ol-items").html(html);

                })

            }

        });

        listnuminput.keyup(function(e){
            if(e.keyCode == 13){
                $(this).trigger("enterKey");
            }
        }); 


    //showItems_button
        var btnnuminput = $('input[name="btnnumr"]');
        // console.log(btnnuminput);

        btnnuminput.bind("enterKey",function(e){
            
            //do stuff here

            var btnVal = $('input[name="btnnumr"]').val();
            var i = btnVal;

            if( 5 <= btnVal ){

                alert('No more than the max number: 4!');
                return false;

            }else if( btnVal < 1 ){

                alert('No less than the min number: 1!');
                return false;

            }else{

                $('.ui-designtemplate-all').each(function(){

                    var html='';

                    for(var i = 0; i < btnVal; i++){ 
                        html += '<li class="btnnn-ul-li" ui-TEMDE-value="btnnn-ul-li">';
                        html += '<a href="">按鈕'+(i+1)+'</a>';
                        html += '</li>';
                    }
                    $(".btnnn-ul").html(html);

                })

            }

        });

        btnnuminput.keyup(function(e){
            if(e.keyCode == 13){
                $(this).trigger("enterKey");
            }
        }); 



//styleFunc
    $(function(){

        $('a[data-action]').on("click",function(event){

            var labelpos = $('.ui-designtemplate-all .labeltag'),
                titleAlign = $('.ui-designtemplate-all .title'),
                textAlign = $('.ui-designtemplate-all .text'),
                btnnnUlLiaradius = $('.ui-designtemplate-all .btnnn-ul .btnnn-ul-li a'),
                blockline = $('.ui-designtemplate-all .ul-items .ul-li-items'),
                labelline = $('.ui-designtemplate-all .labeltag'),
                titleline = $('.ui-designtemplate-all .title p'),
                buttonline = $('.ui-designtemplate-all .btnnn-ul .btnnn-ul-li a'),
                linkline = $('.ui-designtemplate-all .content .alink a'),
                blockshadow = $('.ui-designtemplate-all .ul-items .ul-li-items'),
                labelshadow = $('.ui-designtemplate-all .labeltag'),
                buttonshadow = $('.ui-designtemplate-all .btnnn-ul .btnnn-ul-li a'),
                blockpadding = $('.ui-designtemplate-all .ul-items .ul-li-items'),
                labelpadding = $('.ui-designtemplate-all .labeltag'),
                contentpadding = $('.ui-designtemplate-all .content'),
                titlepadding = $('.ui-designtemplate-all .title'),
                textpadding = $('.ui-designtemplate-all .text'),
                listpadding = $('.ui-designtemplate-all .ol-items .ol-li-items'),
                buttonpadding =$('.btnnn-ul .btnnn-ul-li');

            var Actions = {

                    labelTLin: function(event){
                        $(labelpos).css({'top':'0px','bottom':'auto','right': 'auto', 'left': '0px', position:'absolute','width':'auto'});
                    },
                    labelTRin: function(event){
                        $(labelpos).css({'top':'0px','bottom':'auto','left': 'auto', 'right': '0px', position:'absolute','width':'auto'});
                    },
                    labelTCin: function(event){
                        $(labelpos).css({'top':'0px','bottom':'auto','left': '0px', 'right': '0px', position:'absolute', 'width':'100px', 'text-align':'center', 'margin':'auto'});
                    },
                    labelTLout: function(event){
                        $(labelpos).css({'top':'10px','bottom':'auto','right': 'auto', 'left': '-10px', position:'absolute','width':'auto'});
                    },
                    labelTRout: function(event){
                        $(labelpos).css({'top':'10px','bottom':'auto','left': 'auto', 'right': '-10px', position:'absolute','width':'auto'});
                    },
                    labelBLin: function(event){
                        $(labelpos).css({'top':'auto','bottom':'0px','right': 'auto', 'left': '0px', position:'absolute','width':'auto'});
                    },
                    labelBRin: function(event){
                        $(labelpos).css({'top':'auto','bottom':'0px','right': '0px', 'left': 'auto', position:'absolute','width':'auto'});
                    },
                    labelBCin: function(event){
                        $(labelpos).css({'top':'auto','bottom':'0px','left': '0px', 'right': '0px', position:'absolute', 'width':'100px', 'text-align':'center', 'margin':'auto'});
                    },


                    titleLeft: function(event){
                        $(titleAlign).css({'text-align':'left'});
                    },
                    titleCenter: function(event){
                        $(titleAlign).css({'text-align':'center'});
                    },  
                    titleRight: function(event){
                        $(titleAlign).css({'text-align':'right'});
                    },  
                    textLeft: function(event){
                        $(textAlign).css({'text-align':'left'});
                    },  
                    textCenter: function(event){
                        $(textAlign).css({'text-align':'center'});
                    },  
                    textRight: function(event){
                        $(textAlign).css({'text-align':'right'});
                    },


                    borderradiusSquare: function(event){
                        $(btnnnUlLiaradius).css({'border-radius':'0px'});
                    },  
                    borderradiusRound: function(event){
                        $(btnnnUlLiaradius).css({'border-radius':'8px'});
                    },  
                    borderradiusOval: function(event){
                        $(btnnnUlLiaradius).css({'border-radius':'30px'});
                    },


                    BlockborderlineNone: function(event){
                        $(blockline).css({'border':'0px'});
                    },
                    BlockborderlineAll: function(event){
                        $(blockline).css({'border':'1px solid #000'});
                    },
                    BlockborderlineTop: function(event){
                        $(blockline).css({'border':'0px', 'border-top':'3px solid #000'});
                    },
                    BlockborderlineBottom: function(event){
                        $(blockline).css({'border':'0px', 'border-bottom':'3px solid #000'});
                    },
                    BlockborderlineLeft: function(event){
                        $(blockline).css({'border':'0px', 'border-left':'1px solid #000'});
                    },
                    BlockborderlineRight: function(event){
                        $(blockline).css({'border':'0px', 'border-right':'1px solid #000'});
                    },


                    LabelborderlineNone: function(event){
                        $(labelline).css({'border':'0px'});
                    },
                    LabelborderlineAll: function(event){
                        $(labelline).css({'border':'1px solid #000'});
                    },
                    LabelborderlineTop: function(event){
                        $(labelline).css({'border':'0px', 'border-top':'1px solid #000'});
                    },
                    LabelborderlineBottom: function(event){
                        $(labelline).css({'border':'0px', 'border-bottom':'1px solid #000'});
                    },
                    LabelborderlineLeft: function(event){
                        $(labelline).css({'border':'0px', 'border-left':'1px solid #000'});
                    },
                    LabelborderlineRight: function(event){
                        $(labelline).css({'border':'0px', 'border-right':'1px solid #000'});
                    },


                    TitleborderlineNone: function(event){
                        $(titleline).css({'border':'0px'});
                    },
                    TitleborderlineAll: function(event){
                        $(titleline).css({'border':'1px solid #000'});
                    },
                    TitleborderlineTop: function(event){
                        $(titleline).css({'border':'0px', 'border-top':'1px solid #000'});
                    },
                    TitleborderlineBottom: function(event){
                        $(titleline).css({'border':'0px', 'border-bottom':'1px solid #000'});
                    },
                    TitleborderlineLeft: function(event){
                        $(titleline).css({'border':'0px', 'border-left':'1px solid #000'});
                    },
                    TitleborderlineRight: function(event){
                        $(titleline).css({'border':'0px', 'border-right':'1px solid #000'});
                    },


                    ButtonborderlineNone: function(event){
                        $(buttonline).css({'border':'0'});
                    },
                    ButtonborderlineAll: function(event){
                        $(buttonline).css({'border':'1px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    ButtonborderlineTop: function(event){
                        $(buttonline).css({'border':'0px', 'border-top':'1px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    ButtonborderlineBottom: function(event){
                        $(buttonline).css({'border':'0px', 'border-bottom':'1px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    ButtonborderlineLeft: function(event){
                        $(buttonline).css({'border':'0px', 'border-left':'1px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    ButtonborderlineRight: function(event){
                        $(buttonline).css({'border':'0px', 'border-right':'1px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    LinkborderlineNone: function(event){
                        $(linkline).css({'border':'0'});
                    },
                    LinkborderlineAll: function(event){
                        $(linkline).css({'border':'1px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    LinkborderlineTop: function(event){
                        $(linkline).css({'border':'0px', 'border-top':'3px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    LinkborderlineBottom: function(event){
                        $(linkline).css({'border':'0px', 'border-bottom':'3px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    LinkborderlineLeft: function(event){
                        $(linkline).css({'border':'0px', 'border-left':'3px solid #000','backgroundColor':'transparent','color':'#000'});
                    },
                    LinkborderlineRight: function(event){
                        $(linkline).css({'border':'0px', 'border-right':'3px solid #000','backgroundColor':'transparent','color':'#000'});
                    },


                    BlockshadowNone: function(event){
                        $(blockshadow).css({'box-shadow':'none'});
                    },
                    BlockshadowAll: function(event){
                        $(blockshadow).css({'box-shadow':'0px 0px 8px #ccc'});
                    },
                    BlockshadowRight: function(event){
                        $(blockshadow).css({'box-shadow':'3px 0px 5px #ccc'});
                    },
                    BlockshadowBottom: function(event){
                        $(blockshadow).css({'box-shadow':'0px 3px 5px #ccc'});
                    },
                    BlockshadowRightBotom: function(event){
                        $(blockshadow).css({'box-shadow':'3px 3px 5px #ccc'});
                    },
                    LabelshadowNone: function(event){
                        $(labelshadow).css({'box-shadow':'none'});
                    },
                    LabelshadowAll: function(event){
                        $(labelshadow).css({'box-shadow':'0px 0px 3px #888'});
                    },
                    LabelshadowRight: function(event){
                        $(labelshadow).css({'box-shadow':'2px 0px 3px #888'});
                    },
                    LabelshadowBottom: function(event){
                        $(labelshadow).css({'box-shadow':'0px 2px 3px #888'});
                    },
                    LabelshadowRightBotom: function(event){
                        $(labelshadow).css({'box-shadow':'2px 2px 3px #888'});
                    },
                    ButtonshadowNone: function(event){
                        $(buttonshadow).css({'box-shadow':'none'});
                    },
                    ButtonshadowAll: function(event){
                        $(buttonshadow).css({'box-shadow':'0px 0px 5px #ccc'});
                    },
                    ButtonshadowRight: function(event){
                        $(buttonshadow).css({'box-shadow':'3px 0px 5px #ccc'});
                    },
                    ButtonshadowBottom: function(event){
                        $(buttonshadow).css({'box-shadow':'0px 3px 5px #ccc'});
                    },
                    ButtonshadowRightBotom: function(event){
                        $(buttonshadow).css({'box-shadow':'3px 3px 5px #ccc'});
                    },


                    
                    BlockPaddingAll_10: function(event){
                        $(blockpadding).css({'padding':'10px'});
                    },
                    BlockPaddingTopBottom_10: function(event){
                        $(blockpadding).css({'padding':'10px 0px'});
                    },
                    BlockPaddingLeftRight_10: function(event){
                        $(blockpadding).css({'padding':'0px 10px'});
                    },
                    BlockPaddingAll_20: function(event){
                        $(blockpadding).css({'padding':'20px'});
                    },
                    BlockPaddingTopBottom_20: function(event){
                        $(blockpadding).css({'padding':'20px 0px'});
                    },
                    BlockPaddingLeftRight_20: function(event){
                        $(blockpadding).css({'padding':'0px 20px'});
                    },

                    LabelPaddingAll_5: function(event){
                        $(labelpadding).css({'padding':'5px'});
                    },
                    LabelPaddingTopBottom_5: function(event){
                        $(labelpadding).css({'padding':'5px 10px'});
                    },
                    LabelPaddingLeftRight_5: function(event){
                        $(labelpadding).css({'padding':'10px 5px'});
                    },
                    LabelPaddingAll_10: function(event){
                        $(labelpadding).css({'padding':'10px'});
                    },
                    LabelPaddingTopBottom_10: function(event){
                        $(labelpadding).css({'padding':'10px 5px'});
                    },
                    LabelPaddingLeftRight_10: function(event){
                        $(labelpadding).css({'padding':'5px 10px'});
                    },

                    BlockContentPaddingAll_10: function(event){
                        $(contentpadding).css({'padding':'10px'});
                    },
                    BlockContentPaddingTopBottom_10: function(event){
                        $(contentpadding).css({'padding':'10px 20px'});
                    },
                    BlockContentPaddingLeftRight_10: function(event){
                        $(contentpadding).css({'padding':'20px 10px'});
                    },
                    BlockContentPaddingAll_20: function(event){
                        $(contentpadding).css({'padding':'20px'});
                    },
                    BlockContentPaddingTopBottom_20: function(event){
                        $(contentpadding).css({'padding':'20px 10px'});
                    },
                    BlockContentPaddingLeftRight_20: function(event){
                        $(contentpadding).css({'padding':'10px 20px'});
                    },

                    TitlePaddingAll_5: function(event){
                        $(titlepadding).css({'padding':'5px'});
                    },
                    TitlePaddingTopBottom_5: function(event){
                        $(titlepadding).css({'padding':'5px 10px'});
                    },
                    TitlePaddingLeftRight_5: function(event){
                        $(titlepadding).css({'padding':'10px 5px'});
                    },
                    TitlePaddingAll_10: function(event){
                        $(titlepadding).css({'padding':'10px'});
                    },
                    TitlePaddingTopBottom_10: function(event){
                        $(titlepadding).css({'padding':'10px 5px'});
                    },
                    TitlePaddingLeftRight_10: function(event){
                        $(titlepadding).css({'padding':'5px 10px'});
                    },

                    TextPaddingAll_5: function(event){
                        $(textpadding).css({'padding':'5px'});
                    },
                    TextPaddingTopBottom_5: function(event){
                        $(textpadding).css({'padding':'5px 10px'});
                    },
                    TextPaddingLeftRight_5: function(event){
                        $(textpadding).css({'padding':'10px 5px'});
                    },
                    TextPaddingAll_10: function(event){
                        $(textpadding).css({'padding':'10px'});
                    },
                    TextPaddingTopBottom_10: function(event){
                        $(textpadding).css({'padding':'10px 5px'});
                    },
                    TextPaddingLeftRight_10: function(event){
                        $(textpadding).css({'padding':'5px 10px'});
                    },

                    ListPaddingAll_5: function(event){
                        $(listpadding).css({'padding':'5px'});
                    },
                    ListPaddingTopBottom_5: function(event){
                        $(listpadding).css({'padding':'5px 10px'});
                    },
                    ListPaddingLeftRight_5: function(event){
                        $(listpadding).css({'padding':'10px 5px'});
                    },
                    ListPaddingAll_10: function(event){
                        $(listpadding).css({'padding':'10px'});
                    },
                    ListPaddingTopBottom_10: function(event){
                        $(listpadding).css({'padding':'10px 5px'});
                    },
                    ListPaddingLeftRight_10: function(event){
                        $(listpadding).css({'padding':'5px 10px'});
                    },

                    ButtonPaddingAll_5: function(event){
                        $(buttonpadding).css({'padding':'5px'});
                    },
                    ButtonPaddingTopBottom_5: function(event){
                        $(buttonpadding).css({'padding':'5px 10px'});
                    },
                    ButtonPaddingLeftRight_5: function(event){
                        $(buttonpadding).css({'padding':'10px 5px'});
                    },
                    ButtonPaddingAll_10: function(event){
                        $(buttonpadding).css({'padding':'10px'});
                    },
                    ButtonPaddingTopBottom_10: function(event){
                        $(buttonpadding).css({'padding':'10px 5px'});
                    },
                    ButtonPaddingLeftRight_10: function(event){
                        $(buttonpadding).css({'padding':'5px 10px'});
                    },
                    

                };


            var Actionlink = $(this);
            Actionlink.parent().siblings().children().removeClass('choosebtnstyleActive');
            Actionlink.addClass('choosebtnstyleActive');

            Action = Actionlink.data("action");

            event.preventDefault();

            if( typeof Actions[Action] === "function"){
                Actions[Action].call(this,event);
            }
        });
    })



//colorFunc
    ////textcolor
        $('#colorSelectorColorLabel').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorColorLabel div').css('backgroundColor', '#' + hex);
                $('.labeltag p').css('color', '#' + hex);
            }
        });

        $('#colorSelectorColorTitle').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorColorTitle div').css('backgroundColor', '#' + hex);
                $('.title p').css('color', '#' + hex);
            }
        });

        $('#colorSelectorColorText').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorColorText div').css('backgroundColor', '#' + hex);
                $('.text p').css('color', '#' + hex);
            }
        });

        $('#colorSelectorColorList').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorColorList div').css('backgroundColor', '#' + hex);
                $('.ui-designtemplate-all .content .ol-items .ol-li-items').css('color', '#' + hex);
            }
        });

        $('#colorSelectorColorButton').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorColorButton div').css('backgroundColor', '#' + hex);
                $('.btnnn-ul .btnnn-ul-li a').css('color', '#' + hex);
            }
        });

        $('#colorSelectorColorLink').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorColorLink div').css('backgroundColor', '#' + hex);
                $('.alink a').css('color', '#' + hex);
            }
        });


    ////bgcolor
        $('#colorSelectorBgBlock').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBgBlock div').css('backgroundColor', '#' + hex);
                $('.ui-designtemplate-all .ul-items .ul-li-items').css('backgroundColor', '#' + hex);
            }
        });
        $('#colorSelectorBgLabel').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBgLabel div').css('backgroundColor', '#' + hex);
                $('.labeltag').css('backgroundColor', '#' + hex);
            }
        });
        $('#colorSelectorBgTitle').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBgTitle div').css('backgroundColor', '#' + hex);
                $('.title p').css('backgroundColor', '#' + hex);
            }
        });
        $('#colorSelectorBgButton').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBgButton div').css('backgroundColor', '#' + hex);
                $('.btnnn-ul .btnnn-ul-li a').css('backgroundColor', '#' + hex);
            }
        });
        $('#colorSelectorBgLink').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBgLink div').css('backgroundColor', '#' + hex);
                $('.alink a').css('backgroundColor', '#' + hex);
            }
        });


    ////bordercolor
        $('#colorSelectorBorderBlock').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBorderBlock div').css('backgroundColor', '#' + hex);
                $('.ui-designtemplate-all .ul-items .ul-li-items').css('border-color', '#' + hex);
            }
        });
        $('#colorSelectorBorderLabel').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBorderLabel div').css('backgroundColor', '#' + hex);
                $('.labeltag').css('border-color', '#' + hex);
            }
        });
        $('#colorSelectorBorderTitle').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBorderTitle div').css('backgroundColor', '#' + hex);
                $('.title p').css('border-color', '#' + hex);
            }
        });
        $('#colorSelectorBorderButton').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBorderButton div').css('backgroundColor', '#' + hex);
                $('.btnnn-ul .btnnn-ul-li a').css('border-color', '#' + hex);
            }
        });
        $('#colorSelectorBorderLink').ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $('#colorSelectorBorderLink div').css('backgroundColor', '#' + hex);
                $('.alink a').css('border-color', '#' + hex);
            }
        });










// function solution() {
//     var checkInput = $('input[type="radio"]');
    

//     $(checkInput).on("click",function(event){

//         var checkbtn = $(this);

//         if($(checkbtn).attr('value')=='person' || $(checkbtn).attr('checked')){
//             console.log('person');
//             var val1 = $('#first_name').val();
//             var val2 = $('#last_name').val();
//             var val3 = $('#email').val();
//             var rule1= /^\D{2,20}|[ .-]$/;
//             var rule2= /^([a-zA-Z0-9_\.\-\+])+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
            

//             if(val1.search(rule1) || val1==''){
//                 // alert('incorrect forms.first_name');
//                 return false;
//             };
//             if(val2.search(rule1) || val2==''){
//                 // alert('incorrect forms.last_name');
//                 return false;
//             };
//             if(val3.search(rule2) || val3==''){
//                 // alert('incorrect forms.email');
//                 return false;
//             };

//         }else if($(checkbtn).attr('value')=='company'|| $(checkbtn).attr('checked')){
//             console.log('company');
//             var val4 = $('#company_name').val();
//             var val5 = $('#phone').val();
//             var rule1_1= /^\D{2,20}$/;
//             var rule3= /^\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{3}$/;

//             if(val4.search(rule1_1) || val4==''){
//                 // alert('incorrect forms.company_name');
//                 return false;
//             };
//             if(val5.search(rule3) || val5==''){
//                 // alert('incorrect forms.phone');
//                 return false;
//             };

//         }else{
//             return false;
//         }

//     });
// }


