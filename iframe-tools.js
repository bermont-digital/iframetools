class iframeTools {
    isSafari = false;
    isFirefox = false;
    overlayCss = "";
    modalCss = "";
    constructor() {
        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
        {
            this.isSafari = true;
        }
        if (navigator.userAgent.search("Firefox") >= 0)
        {
            this.isFirefox = true;
        }
        this.overlayCss = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999; background-color: #000; opacity: 0.5;";
        this.modalCss = "position: fixed; top: 50%; left: 50%; width: 400px; height: 200px; z-index: 999999; margin-top: -100px; margin-left: -200px; background-color: #fff; border: 1px solid #ccc; border-radius: 5px;";
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

    generateCss(selector, css) {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = selector + '{' + css + '}';
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    generateHtml() {
        let html = '';
        html += '<div id="cookies-tool-overlay">';
        html += '<div class="cookies-modal"><a id="request-cookies" href="#">Please Enbable Cookies</a></div>';
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
            this.generateCss('#cookies-tool-overlay', this.overlayCss);
            this.generateCss('.cookies-modal', this.modalCss);
            this.appendHTML();
            this.addEventListeners();
        }
    }
}
