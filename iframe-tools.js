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

    createAuthWindow(url = 'https://covacglobal.com/dest_bounce.php', name = 'Authorization', width = 500, height = 600, left = 0, top = 0) {
        const options =   `width=${width},height=${height},left=${left},top=${top}`;
        if (this.isSafari || this.isFirefox) {
            return window.open(url, name, options);
            // document.hasStorageAccess().then(hasAccess => {
            //     if (hasAccess) {
            //         // storage access has been granted already.
            //     } else {
            //
            //     }
            // });
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

    generateHtml() {
        let html = '';
        html += '<div id="cookies-tool-overlay">';
        html += '<p><a id="request-cookies" href="#">Please Enbable Cookies</a></p>';
        html += '</div>';
        return html;
    }
    appendHTML() {
        let html = this.generateHtml();
        document.body.insertAdjacentHTML('beforeend', html);
    }
    addEventListeners() {
        let requestCookies = document.getElementById('request-cookies');
        requestCookies.addEventListener('click', this.createAuthWindow.bind(this));
    }
    init() {
        this.appendHTML();
        this.addEventListeners();
    }
}
