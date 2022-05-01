const googleUrl = chrome.runtime.getURL("assets/images/google_logo_color_272x92dp.png")
const sogouUrl = chrome.runtime.getURL("assets/images/sogou_logo_440x140_31de1d2.png")
const img360Url = chrome.runtime.getURL("assets/images/360_logo.png")
const bingUrl = chrome.runtime.getURL("assets/images/bing_logo.png")

const logoArr = [googleUrl, sogouUrl, img360Url, bingUrl]

const suBtn = <HTMLInputElement>document.getElementById("su");
const searchText = <HTMLInputElement>document.getElementById("kw");

const fn = function (event: any) {
    // 阻止事件
    event.preventDefault()
}

suBtn.addEventListener('click', fn)

searchText.oninput = (e) => {
    console.log('搜索输入！')
    // 取消事件监听
    suBtn.removeEventListener('click', fn)
}

let intervalTime: number = 0;
suBtn.onclick = () => {
    console.log('开始')
    clearInterval(intervalTime)
    suBtn.value = "Google搜索"
    let index = 0;
    intervalTime = setInterval(() => {
        (<HTMLInputElement>document.getElementById('s_lg_img')).src = logoArr[index];
        index++;
        if (index == 4) index = 0
    }, 1000)
}