const suText = (<HTMLInputElement>document.getElementById('su')).value = "Google搜索"

const googleUrl = chrome.runtime.getURL("assets/images/google_logo_color_272x92dp.png")
const sogouUrl = chrome.runtime.getURL("assets/images/sogou_logo_440x140_31de1d2.png")
const img360Url = chrome.runtime.getURL("assets/images/360_logo.png")
const bingUrl = chrome.runtime.getURL("assets/images/bing_logo.png")

const logoArr = [googleUrl, sogouUrl, img360Url, bingUrl]
let index = 0;
setInterval(function () {
    (<HTMLInputElement>document.getElementById('s_lg_img')).src = logoArr[index];
    index++;
    if (index == 4) index = 0
}, 1000)
