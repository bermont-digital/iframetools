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
        this.hideOverlay();
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
    hideOverlay() {
        let overlay = document.getElementById('cookies-tool-overlay');
        overlay.style.display = 'none';
    }
    addEventListeners() {
        let requestCookies = document.getElementById('request-cookies');
        requestCookies.addEventListener('click', function() {
            this.createAuthWindow('https://covacglobal.com/dest_bounce.php', 'Authorization');
        }.bind(this));
    }

    init() {
        if (this.isSafari || this.isFirefox) {
            this.appendHTML();
            this.addEventListeners();
        }
    }
}
