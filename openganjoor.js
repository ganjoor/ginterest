function createPopup(url) {
    chrome.windows.create({
        url: 'https://ganjoor.net?pinterest_url='+url,
        width: 800,
        height: 600,
        type: 'popup'
    });
}

browser.browserAction.onClicked.addListener((tab) => {
    if(tab.url.includes('pinterest.com')|| tab.url.includes('instagram.com')){
        createPopup(tab.url);
    }
    else{
        chrome.windows.create({
            url: 'html/error.html',
            width: 800,
            height: 600,
            type: 'popup'
        });
    }
})