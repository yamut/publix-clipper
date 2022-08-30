var clipper = null;
document.addEventListener('mousedown', function (e) {
    if (e.button === 2) {
        clipper = e.target;
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request === "publix-clipper") {
        document.querySelectorAll('.p-coupon-button')
            .forEach(i => {
                if (i.querySelector('span').textContent.trim() !== 'Clipped') {
                    new Promise(resolve => setTimeout(resolve, 1000))
                        .then(() => {
                            i.click();
                        })
                }
            })
    }
});
