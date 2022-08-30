chrome.contextMenus.create({
    "title": "Clip public coupons",
    "id": "publix-clipper",
    "contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "publix-clipper") {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, info.menuItemId);
        });
    }
});
