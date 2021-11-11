class iframeTools {
    isSafari = false;
    isFirefox = false;
    constructor() {
        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
        {
            this.isSafari = true;
        }
        if (navigator.userAgent.search("Firefox") >= 0)
        {
            this.isFirefox = true;
        }
    }

    createOauthWindow(url = 'https://covacglobal.com/dest_bounce.php', name = 'Authorization', width = 500, height = 600, left = 0, top = 0) {
        const options =   `width=${width},height=${height},left=${left},top=${top}`;
        if (this.isSafari || this.isFirefox) {
            document.hasStorageAccess().then(hasAccess => {
                if (hasAccess) {
                    // storage access has been granted already.
                } else {
                    return window.open(url, name, options);
                }
            });
        }

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
