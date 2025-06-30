var clickall = function(){
    console.log("clickall");
    try {
        document.addEventListener('click', function(e) {
            let target = e.target;
            // 找到最近的 <a> 元素
            while (target && target.nodeName !== 'A') {
                target = target.parentElement;
                if (!target) return;
            }

            // 检查是否有 target="_blank"
            if (target && target.target === '_blank') {
                e.preventDefault();
                console.log('Blocked new tab for:', target.href);
                // 在当前标签页打开
            }
        }, true);
    }catch (ex){
        
    }
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
var button1 = document.createElement("button");
var button2 = document.createElement("button");
button1.id = "thispageall";
button2.id = "nextall";
button1.className = "w-full select-none rounded-lg leading-5 transition-all duration-300 font-normal px-4 py-[10px] text-[14px] sm:px-[24px] sm:py-[10px] border backdrop-blur-[9px] dark:bg-black/30 dark:shadow-button-inset border-purple-contrast/50 hover:bg-purple-dark/10 dark:border-purple-dark/15 dark:text-purple-light dark:shadow-button-purple/10 dark:hover:shadow-button-purple/20";
button2.className = "w-full select-none rounded-lg leading-5 transition-all duration-300 font-normal px-4 py-[10px] text-[14px] sm:px-[24px] sm:py-[10px] border backdrop-blur-[9px] dark:bg-black/30 dark:shadow-button-inset border-purple-contrast/50 hover:bg-purple-dark/10 dark:border-purple-dark/15 dark:text-purple-light dark:shadow-button-purple/10 dark:hover:shadow-button-purple/20";
button1.style.width = "225px";
button2.style.width = "225px";
button1.innerHTML = "本页全部+拦截弹窗";
button2.innerHTML = "下一页";
document.querySelector("body > div > main > div > div > div.py-2.opacity-80.lg\\:py-6").innerHTML = "";
document.querySelector("body > div > main > div > div > div.py-2.opacity-80.lg\\:py-6").prepend(button2);
document.querySelector("body > div > main > div > div > div.py-2.opacity-80.lg\\:py-6").prepend(button1);
document.getElementById("thispageall").addEventListener("click", clickall);
document.getElementById("nextall").addEventListener("click", nextpage);
