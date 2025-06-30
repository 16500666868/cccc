var clickall = function(){
    console.log("clickall");
    var list = document.getElementsByClassName("grid w-full grid-cols-1 gap-2 sm:grid-cols-2")[0].getElementsByTagName("button");var time =-1000;for (let i = 0; i < list.length; i++) list[i].click();
}
function captchahasfinshed(){
    var textareas = document.getElementsByTagName("textarea");
    for (let i = 0; i < textareas.length; i++) {
        if (textareas[i].id.startsWith("h-captcha-response-")&&textareas[i].value.length >0) {
            return true;
        }
    }
    return false
}
window.thispagehasfinshed=function (){
    var list = document.getElementsByClassName("grid w-full grid-cols-1 gap-2 sm:grid-cols-2")[0].getElementsByTagName("button");
    for (let i = 0; i < list.length; i++) {
        if (!list[i].getElementsByClassName("absolute right-0 top-0")[0].getElementsByTagName("img")[0].getAttribute("src").endsWith(".svg")) {
            return "false";
        }
    }
    return "true";
}
var nextpage=function (){
    document.querySelector(".rc-pagination-next").click();
}
var tooldiv = document.createElement("div");
tooldiv.style.position = "fixed";
tooldiv.style.top = "10px";
tooldiv.style.right = "10px";
tooldiv.style.width = "110px";
tooldiv.style.height = "140px";
tooldiv.style.backgroundColor = "#4fc4e5";
tooldiv.style.zIndex = '99999';
document.body.append(tooldiv);
tooldiv.innerHTML="<h1 style='width: 100&;text-align: center;font-size: larger'>辅助</h1>\n" +
    "<button id='thispageall' style='border: #336600'>一键此页+阻止弹窗</button>\n" +
    "<button id='nextall'  style='border: #336600'>下一页</button>\n" ;
document.getElementById("thispageall").addEventListener("click", clickall);
document.getElementById("nextall").addEventListener("click", nextpage);