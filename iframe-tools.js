class iframeTools {
    constructor() {

    }
    createCookieWindow(url) {
        alert('Testing some functionality on NPM' + url);
    }

    listenWindow(url, selector) {
        window.addEventListener( "message", function (event) {
                if (event.origin === url) {
                    let iframe = document.querySelector(selector);
                    iframe.style.height = event.data["height"] + 'px';
                }
            },
    false);
    }

    makeRequestWithUserGesture() {
        const requestStorageAccess = document.requestStorageAccess();
        requestStorageAccess.then(
            function () {
                // Storage access was granted.
                console.log('storage access granted');
            },
            function (e) {
                console.log('storage access not granted' + e);
            }
        );
    }
}
