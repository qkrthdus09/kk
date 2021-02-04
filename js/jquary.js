        $(document).ready(function(){
                
                
                
                //아코디언메뉴
                $(".sMenu").hide();
                
                $(".panelMenu>li>a").click(function(e){
                    e.preventDefault();
                    
                    $(this).siblings().slideToggle().parent().siblings().find(".sMenu").slideUp();
                    
                    $(this).toggleClass("on").parent().siblings().find("a").removeClass("on");
                })
                
                
                
                
                //panel 
                $(".panelBg").hide(); //원래 $(".panelWrap").hide();
                
                $(".panel").click(function(){
                    $(".panelBg").fadeIn(); //원래 $(".panelWrap").fadeIn();
                    $(".panelMenu").css("width","250px");
                })
                
                $(".panelBg").click(function(){
                    $(".panelBg").fadeOut(); //원래 $(".panelWrap").fadeOut();
                    $(".panelMenu").css("width","0");
                })
                
                
                
                
                
                
                
            })