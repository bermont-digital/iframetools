class iframeTools {
    constructor() {

    }
    createOauthWindow(url = 'https://covacglobal.com/dest_bounce.php', name = 'Authorization', width = 500, height = 600, left = 0, top = 0) {
        const options =   `width=${width},height=${height},left=${left},top=${top}`;
        return window.open(url, name, options);
    }
    createOauthWindow(url = 'https://covacglobal.com/dest_bounce.php', name = 'Authorization', width = 500, height = 600, left = 0, top = 0) {
        const options =   `width=${width},height=${height},left=${left},top=${top}`;
        return window.open(url, name, options);
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
