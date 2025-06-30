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
tooldiv.style.borderRadius = "8px"; // 圆角边框
tooldiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // 添加阴影
tooldiv.style.padding = "10px"; // 内边距
tooldiv.style.fontFamily = "Arial, sans-serif"; // 设置字体
document.querySelector("body > div > main > div").append(tooldiv);
tooldiv.innerHTML="<h1 style=\"width: 100%; text-align: center; font-size: larger; margin: 0;\">辅助</h1>\n" +
    "<button id=\"thispageall\" class=\"tool-button\">一键此页+阻止弹窗</button><br>" +
    "<button id=\"nextall\"  class=\"tool-button\"  >下一页</button>\n"+
"\n<style>" +
    "    .tool-button {\n" +
    "        width: 100%;\n" +
    "        margin: 5px 0;\n" +
    "        padding: 10px;\n" +
    "        background-color: #336600;\n" +
    "        color: white;\n" +
    "        border: none;\n" +
    "        border-radius: 4px;\n" +
    "        cursor: pointer;\n" +
    "        font-size: 10px;\n" +
    "        transition: background-color 0.3s ease;\n" +
    "    }\n" +
    "\n" +
    "    .tool-button:hover {\n" +
    "        background-color: #254d00;\n" +
    "    }\n" +
    "</style>";
document.getElementById("thispageall").addEventListener("click", clickall);
document.getElementById("nextall").addEventListener("click", nextpage);
