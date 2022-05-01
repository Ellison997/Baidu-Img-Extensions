console.log("百度搜索引擎更换logo扩展程序！")
let color = '#3aa757';

// 应用装载事件
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});


// 应用停止事件
chrome.runtime.onSuspend.addListener(() => {
    // Do some simple clean-up tasks.
});
