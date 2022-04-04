function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (document.location.href.includes('https://hot-potato.reddit.com/embed')) {

    if (window.top !== window.self) {
        window.addEventListener(
            "load",
            () => {
                document
                    .getElementsByTagName("mona-lisa-embed")[0]
                    .shadowRoot.children[0].getElementsByTagName("mona-lisa-share-container")[0]
                    .getElementsByTagName("mona-lisa-canvas")[0]
                    .shadowRoot.children[0].appendChild(
                        (function() {
                            const i = document.createElement("img");
                            i.src = getCookie('image').length != 0 ? getCookie('image') : 'https://i.imgur.com/0LqGxmq.png';
                            i.style = `cursor: move; pointer-events: all; image-rendering: pixelated; opacity: 0.75; position: absolute; top: ${getCookie('y-pos').length != 0 ? getCookie('y-pos') + 'px' : '0px'}; left: ${getCookie('x-pos').length != 0 ? getCookie('x-pos') + 'px' : '0px'};`;

                            console.log(i);
                            return i;
                        })());

                function getMousePos(canvas, evt) {
                    var rect = canvas.getBoundingClientRect(), // abs. size of element
                        scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
                        scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

                    return {
                        x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
                        y: (evt.clientY - rect.top) * scaleY // been adjusted to be relative to element
                    }
                }

                function draw(event) {
                    if (getCookie('drawMode') == 'true') {
                        const canvas = document
                            .getElementsByTagName("mona-lisa-embed")[0]
                            .shadowRoot.children[0].getElementsByTagName("mona-lisa-share-container")[0]
                            .getElementsByTagName("mona-lisa-canvas")[0]
                            .shadowRoot.children[0].getElementsByTagName("canvas")[0];

                        const pos = getMousePos(canvas, event);
                        const size = getCookie('size').length != 0 ? parseInt(getCookie('size')) : 10;

                        var ctx = canvas.getContext("2d");
                        ctx.fillStyle = getCookie('color').length != 0 ? getCookie('color') : "#550a8a";

                        ctx.fillRect(pos.x - (size / 2), pos.y - (size / 2), size, size);
                    }
                }

                window.addEventListener('click', draw, { capture: true });

            },
            false
        );

    }
}