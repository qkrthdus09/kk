$(document).ready(function(){
    $('#fullpage').fullpage({
        sectionsColor : [/*'#ccc', '#f00', '#ff0'*/], //[]이 괄호는 배열하는 것
        navigation: true,
        navigationTooltips: ['첫번째', '두번째','세번째','네번째'],
        menu: '.gnb',
        anchors:['menu1','menu2','menu3','footer'],
    });
})