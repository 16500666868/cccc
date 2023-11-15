
window.console.logb = function (arg) {
        socket.send(arg);
        console.log(arg)
};

function inputssn(ssn) {
        document.getElementsByName("tenantssn")[0].value = ssn;
}

if (document.getElementsByName("tenantssn").length > 0) {
        socket.send("inputssn");
}
if (document.body.innerText.indexOf(atob('WW91ciBjb25maXJtYXRpb24gbnVtYmVyIGlzIA==')) > 100) {
        socket.send("res_fail:");
}
if (document.body.innerText.indexOf(atob('SWYgeW91IGRpZCBub3QgcmVudCBhbmQgb2NjdXB5IGEgcHJvcGVydHkgYXMgeW91ciBwcmluY2lwYWwgcmVzaWRlbmNl')) > 0) {
        socket.send("res_success:");
}
console.logb("url:"+location.href);



// https://www1.state.nj.us/TYTR_Saver/jsp/common/HBWelcome.jsp
function iserr15(){
        return document.getElementsByTagName("html")[0].innerHTML.indexOf("/_Incapsula_Resource?CWUDNSAI=23&") > 0;
}

/*if (iserr15()) {
        socket.send("restart:err15")
}*/

/*setTimeout(function (){
        socket.send("restart:err15")
},60000)*/

// setTimeout(function(){location.reload()},12000)
