fetch("https://classic.tax1099.com/Protected/Dashboard/SubmissionList", {
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://classic.tax1099.com/Protected/Dashboard",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "sort=&page=1&pageSize=10&group=&filter=&statuses=0&year=2023&formType=All+Form+Types&TIN=&Ref=&UserID=0",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data);
    var datalist = data.Data;
    for (var i = 0; i < datalist.length; i++) {
        // console.log(datalist[i].FormType + " " + datalist[i].Year + " " + datalist[i].TIN + " " + datalist[i].Ref + " " + datalist[i].Status);
        window.open("https://classic.tax1099.com/Protected/SubmitForms/ShowForms?encryptedPayerId="+datalist[i].EncPayerId+"&year="+datalist[i].TaxYear+"&formType="+datalist[i].FormType+"&isCorrected=False")
    }
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});
